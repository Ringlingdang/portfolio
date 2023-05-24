import React, { useEffect, useRef, useState } from "react"
import css from "./Header.module.scss"
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi"
import { SiGoogletranslate } from "react-icons/Si"
import { motion } from "framer-motion"
import { getMenuStyles, headerVariants } from "@/utils/motion"
import useOutsideAlerter from "@/hooks/useOutsideAlerter"
import useHeaderShadow from "@/hooks/useHeaderShadow"

import { useTranslation, Trans } from "react-i18next"

// const lngs = {
//   en: { nativeName: "English" },
//   zh: { nativeName: "中文" }
// }

const Header = () => {
  const { t, i18n } = useTranslation()
  const menuRef = useRef<HTMLUListElement | null>(null)
  const [menuOpened, setMenuOpened] = useState(false)
  const headerShadow = useHeaderShadow()

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({ menuRef, setMenuOpened })
  const transformLocale = () => {
    if (i18n.resolvedLanguage !== "zh") {
      return i18n.changeLanguage("zh")
    }
    return i18n.changeLanguage("en")
  }
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>{t("RingLingdang")}</div>
        <ul className={`flexCenter ${css.menu}`} ref={menuRef} style={getMenuStyles(menuOpened)}>
          <li>
            <a href="#experties">{t("Services")}</a>
          </li>
          <li>
            <a href="#work">{t("Experience")}</a>
          </li>
          <li>
            <a href="#portfolio">{t("Portfolio")}</a>
          </li>
          <li>
            <a href="#people">{t("Testimonials")}</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+86 175 5088 3775</p>
            <BiPhoneCall size={"40px"} />
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <SiGoogletranslate size={"40px"} onClick={() => transformLocale()} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div className={css.menuIcon} onClick={() => setMenuOpened(prev => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header
