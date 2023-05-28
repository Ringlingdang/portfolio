import React from "react"
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion"
import css from "./Hero.module.scss"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const Hero = () => {
  const { t } = useTranslation()
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            {/* Hey There,
            <br />
          I'm Binjan. */}
            {t("Hey There,")}
            <br />
            {t("I'm RingLingdang.")}
          </motion.span>
          <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
            {t("I design beautiful simple things,")}
            <br />
            {t("And I love what i do")}
          </motion.span>
        </div>

        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className={css.person}>
          <motion.img loading="lazy" variants={slideIn("up", "tween", 0.5, 1.3)} src="./ringlingdang-works.jpg" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:ringlingdang@gmail.com">
          ringlingdang@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">5</div>
            <div className="secondaryText">
              <div>{t("Months")}</div>
              <div>{t("Experience")}</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>{t("PROFATIONAL")}</span>
            <span>{t("GRAPHIC DESIGNER")}</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
