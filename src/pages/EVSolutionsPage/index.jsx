import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import EVSolutions from "../../components/sections/EVSolutions/EVSolutions";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";
import { fadeInUp } from "../../utils/animations";
import { ROUTES } from "../../constants/routes";
import styles from "./EVSolutionsPage.module.css";

// SVG Icon Components
const TrophyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

const BoltIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const BulbIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="9" y1="18" x2="15" y2="18"></line>
    <line x1="10" y1="22" x2="14" y2="22"></line>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
  </svg>
);

const EVSolutionsPage = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      id: 1,
      icon: TrophyIcon,
      titleKey: "evSolutionsPage.industryLeading",
      textKey: "evSolutionsPage.industryLeadingText",
    },
    {
      id: 2,
      icon: BoltIcon,
      titleKey: "evSolutionsPage.ultraFastCharging",
      textKey: "evSolutionsPage.ultraFastChargingText",
    },
    {
      id: 3,
      icon: GlobeIcon,
      titleKey: "evSolutionsPage.nationwideCoverage",
      textKey: "evSolutionsPage.nationwideCoverageText",
    },
    {
      id: 4,
      icon: BulbIcon,
      titleKey: "evSolutionsPage.smartTechnology",
      textKey: "evSolutionsPage.smartTechnologyText",
    },
  ];

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <motion.div
            className={styles.headerContent}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className={styles.pageTitle}>
              {t("evSolutionsPage.pageTitle")}{" "}
              <span className={styles.highlight}>
                {t("evSolutionsPage.pageTitleHighlight")}
              </span>
            </h1>
            <p className={styles.pageDescription}>
              {t("evSolutionsPage.pageDescription")}
            </p>
            <div className={styles.headerButtons}>
              <Link to={ROUTES.DOWNLOAD_APP}>
                <Button variant="secondary" size="large">
                  {t("evSolutionsPage.downloadApp")}
                </Button>
              </Link>
              <Link to={ROUTES.PRODUCTS}>
                <Button variant="outline" size="large">
                  {t("evSolutionsPage.viewProducts")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <EVSolutions />

      {/* Why Choose Us Section */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <motion.div
            className={styles.whyContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              {t("evSolutionsPage.whyChoose")}
            </h2>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.id}
                    className={styles.benefit}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                  >
                    <div className={styles.benefitIcon}>
                      <IconComponent />
                    </div>
                    <h3 className={styles.benefitTitle}>
                      {t(benefit.titleKey)}
                    </h3>
                    <p className={styles.benefitText}>{t(benefit.textKey)}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.ctaTitle}>
              {t("evSolutionsPage.readyToGetStarted")}
            </h2>
            <p className={styles.ctaText}>
              {t("evSolutionsPage.readyToGetStartedDesc")}
            </p>
            <Link to={ROUTES.FIND_CHARGING_STATIONS}>
              <Button variant="secondary" size="large">
                {t("evSolutionsPage.findNearestStation")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EVSolutionsPage;
