"use client";
import "./Navbar.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faXmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { type Locale } from "../../lib/locales";
const Navbar = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations();
  const openMobileNavbar = (): void => {
    const navbar = document.querySelector(".navbar_bottom_mobile");
    if (navbar) {
      navbar.classList.replace("d-none", "d-flex");
    }
  };

  const closeMobileNavbar = (): void => {
    const navbar = document.querySelector(".navbar_bottom_mobile");
    if (navbar) {
      navbar.classList.replace("d-flex", "d-none");
    }
  };

  const openTranslation = () => {
    const openTranslation = document.querySelector(".translation_options");
    if (openTranslation) {
      openTranslation.classList.toggle("d-flex");
    }
  }

  const openTranslationMobile = () => {
    const openTranslation = document.querySelector(".navbar_bottom_mobile .translation_options");
    if (openTranslation) {
      openTranslation.classList.toggle("d-flex");
    }
  }


  return (
    <>
      <div className="navbar_top" >
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            width={110}
            height={110}
            alt="logo"
            loading="lazy"
            className="logo_image mr-5"
          />
        </Link>

        <div className="search" >
          <input type="text" placeholder="بحث" />
        </div>

        < div className="nav_icons" >
          <Link href={`/${locale}/cart`}>
            <FontAwesomeIcon icon={faCartShopping} width={30} />
          </Link>
          <span className="cart_count" > 1 </span>
          <Link href={`/${locale}/register`} >
            <FontAwesomeIcon icon={faUser} width={30} />
          </Link>
          <Link href={`/${locale}/addtofav`} >
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          < Image
            src="/images/saudi-arabia-flag-icon.png"
            width={40}
            height={40}
            alt="saudi arabia flag"
            style={{ cursor: "auto" }
            }
          />
          <div className="translation" >
            <p onClick={openTranslation}>{locale}</p>
            <div className="translation_options d-none">

              <Link href={"/en"}> En </Link>

              <Link href={"/ar"}> ع </Link>
            </div>
          </div>
        </div>
      </div>

      < div className="navbar_top mobile" >
        <div className="logo_icons" >
          <Image
            src="/images/logo.png"
            width={110}
            height={110}
            alt="logo"
            loading="lazy"
            className="logo_image mr-5"
          />
          <div className="nav_icons flag_mob" >
            <Link href={`/${locale}/cart`} >
              <FontAwesomeIcon icon={faCartShopping} width={30} />
            </Link>
            < span className="cart_count" > 1 </span>
            < Link href={`/${locale}/register`} >
              <FontAwesomeIcon icon={faUser} width={30} />
            </Link>
            < Link href={`/${locale}/addtofav`} >
              <FontAwesomeIcon icon={faHeart} width={30} />
            </Link>
            < Image
              src="/images/saudi-arabia-flag-icon.png"
              width={1000}
              height={1000}
              alt="saudi arabia flag"
              style={{ cursor: "auto" }
              }
            />

            < FontAwesomeIcon
              icon={faBars}
              width={30}
              onClick={openMobileNavbar}
            />
          </div>
        </div>

        < div className="search" >
          <input type="text" placeholder="بحث" />
        </div>
      </div>

      < nav className="navbar_bottom_mobile d-none" >
        <FontAwesomeIcon icon={faXmark} onClick={closeMobileNavbar} />
        <ul>
          <li>
            <Link href="/" > الصفحة الرئيسية </Link>
          </li>
          < li >
            <Link href="/" > عروضنا </Link>
          </li>
          < li >
            <Link href="/" > الشاي الاسود </Link>
          </li>
          < li >
            <Link href="/" > الشاي الاخضر </Link>
          </li>
          < li >
            <Link href="/" > الشاي المنكه </Link>
          </li>
          < li >
            <Link href="/" > ادوات الشاي </Link>
          </li>
          < li >
            <Link href="/" > مجموعات توفير </Link>
          </li>
          < li >
            <Link href="/" > مع شاي سوالف </Link>
          </li>
          <li>
            <div className="translation" >
              <p onClick={openTranslationMobile}>{locale}</p>
              <div className="translation_options d-none">

                <Link href={"/en"}> En </Link>

                <Link href={"/ar"}> ع </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
