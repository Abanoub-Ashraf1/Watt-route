import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Card from "../../common/Card/Card";
import LazyIcon from "../../common/LazyIcon/LazyIcon";
import { fadeInUp, stagger } from "../../../utils/animations";
import styles from "./EVSolutions.module.css";

const EVSolutions = () => {
  const { t } = useTranslation();
  const solutions = [
    {
      id: 1,
      icon: "/images/icons/charging.webp",
      titleKey: "evSolutions.smartCharging",
      descKey: "evSolutions.smartChargingDesc",
    },
    {
      id: 2,
      icon: "/images/icons/payment.webp",
      titleKey: "evSolutions.unifiedPayment",
      descKey: "evSolutions.unifiedPaymentDesc",
    },
    {
      id: 3,
      icon: "/images/icons/real-time.webp",
      titleKey: "evSolutions.realTimeStatus",
      descKey: "evSolutions.realTimeStatusDesc",
    },
    {
      id: 4,
      icon: "/images/icons/support.webp",
      titleKey: "evSolutions.support24",
      descKey: "evSolutions.support24Desc",
    },
    {
      id: 5,
      icon: "/images/icons/security.webp",
      titleKey: "evSolutions.reliable",
      descKey: "evSolutions.reliableDesc",
    },
    {
      id: 6,
      icon: "/images/icons/mobile-app.webp",
      titleKey: "evSolutions.mobileApp",
      descKey: "evSolutions.mobileAppDesc",
    },
  ];

  return (
    <section className={styles.section} id="ev-solutions">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={styles.title}>{t("evSolutions.title")}</h2>
          <p className={styles.subtitle}>{t("evSolutions.subtitle")}</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {solutions.map((solution, index) => (
            <motion.div key={solution.id} variants={fadeInUp}>
              <Card className={styles.card}>
                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <LazyIcon
                    src={solution.icon}
                    alt={t(solution.titleKey)}
                    className={styles.icon}
                  />
                </div>

                <h3 className={styles.cardTitle}>{t(solution.titleKey)}</h3>
                <p className={styles.cardDescription}>{t(solution.descKey)}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EVSolutions;
