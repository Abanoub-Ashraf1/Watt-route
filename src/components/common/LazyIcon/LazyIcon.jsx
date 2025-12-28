import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const LazyIcon = ({ src, alt, className = "", onError, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start loading the icon when it enters the viewport
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            img.onerror = () => {
              setHasError(true);
              if (onError) {
                onError();
              }
            };
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, onError]);

  if (hasError) {
    return null;
  }

  return (
    <div ref={imgRef} style={{ display: "inline-block" }}>
      {isLoaded && imageSrc ? (
        <motion.img
          src={imageSrc}
          alt={alt}
          className={className}
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          {...props}
        />
      ) : (
        <span
          style={{
            display: "inline-block",
            width: "1em",
            height: "1em",
            backgroundColor: "transparent",
          }}
        />
      )}
    </div>
  );
};

export default LazyIcon;
