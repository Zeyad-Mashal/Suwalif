import Link from "next/link";
import "./NavbarMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from 'next-intl';


const NavbarMenu = () => {
  const t = useTranslations("navbar");
  return (
    <>
      <nav className="navbar_bottom">
        <ul>
          <li>
            <Link href={`/`}>{t("main")}</Link>
          </li>
          <li>
            <Link href="/">{t("nav2")}</Link>
          </li>
          <li>
            <Link href="/">{t("nav3")}</Link>
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
