import React from "react"
import { projectExperience, WhatDoIHelp } from "@/utils/data"
import css from "./Experties.module.scss"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion.js"
import { useTranslation } from "react-i18next"

const Experties = () => {
  const { t } = useTranslation()
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <div className={css.leftSide}>
          {projectExperience.map(({ bg, name, projects, icon: Icon }, i) => {
            const props = { size: 25, color: "white" }
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.exp}
                key={i}
              >
                <div style={{ background: bg }} className="flexCenter">
                  <Icon {...props} />
                </div>
                <div>
                  <span>{t(name)}</span>
                  <span className="secondaryText">
                    {projects}
                    {t("Projects")}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* right */}
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">{t("What do I help?")} </span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className="secondaryText" key={i}>
              {t(paragraph)}
            </span>
          ))}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">285+</span>
              <span className="secondaryText">{t("Project Completed")}</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">190+</span>
              <span className="secondaryText">{t("Happy Clients")}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experties
