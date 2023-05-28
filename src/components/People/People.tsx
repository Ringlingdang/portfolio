import React from "react"
import { comments, sliderSettings } from "@/utils/data"
import css from "./People.module.scss"
import Slider from "react-slick"
import { motion } from "framer-motion"
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "@/utils/motion"
import { useTranslation } from "react-i18next"

const People = () => {
  const { t } = useTranslation()
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="people"></a>

      <motion.div variants={footerVariants} className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">{t("People talk about us")}</span>
          <p style={{ marginTop: "2rem" }}>
            {t("I got a job that was in accordance with the salary and field of work")}
          </p>
          <p>{t("The process of submitting an appilication was quite cosy")}</p>
        </div>

        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`} key={i}>
                  <img loading="lazy" src={comment.img} alt="" />
                  <p>{t(comment.comment)}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{t(comment.post)}</span>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default People
