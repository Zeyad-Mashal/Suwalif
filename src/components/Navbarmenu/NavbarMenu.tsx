'use client'
import Link from "next/link";
import "./NavbarMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";
import { type Locale } from "../../lib/locales";

const NavbarMenu = () => {
  const t = useTranslations("navbar");
  const locale = useLocale() as Locale;

  return (
    <>
      <nav className="navbar_bottom">
        <ul className="mainMenu" >
          <li>
            <Link href={`/`}>{t("main")}</Link>
          </li>
          <li>
            <Link href={`/`}>{t("nav2")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/category`}>{t("nav3")}</Link>
          </li>
          <li>
            <Link href="/">{t("nav4")}</Link>
          </li>
          <li>
            <Link href="/">{t("nav5")}</Link>
          </li>
          <li>
            <Link href="/">{t("nav6")}</Link>
          </li>
          <li>
            <Link href="/">{t("nav7")}</Link>
          </li>
          <li>
            <Link href="/">{t("nav8")}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMenu;
