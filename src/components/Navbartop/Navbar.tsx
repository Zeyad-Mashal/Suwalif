"use client";
import React, { useState, useEffect } from "react";
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

  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const [isTranslationOpen, setIsTranslationOpen] = useState(false);
  const [isMobileTranslationOpen, setIsMobileTranslationOpen] = useState(false);

  useEffect(() => {
    console.log('Component mounted');
  }, []);

  const openMobileNavbar = (): void => {
    console.log('Opening mobile navbar');
    setIsMobileNavbarOpen(true);
  };

  const closeMobileNavbar = (): void => {
    console.log('Closing mobile navbar');
    setIsMobileNavbarOpen(false);
  };

  const toggleTranslation = () => {
    console.log('Toggling translation options');
    setIsTranslationOpen(!isTranslationOpen);
  }

  const toggleMobileTranslation = () => {
    console.log('Toggling mobile translation options');
    setIsMobileTranslationOpen(!isMobileTranslationOpen);
  }

  return (
    <>
      <div className="navbar_top">
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

        <div className="search">
          <input type="text" placeholder="بحث" />
        </div>

        <div className="nav_icons">
          <Link href={`/${locale}/cart`}>
            <FontAwesomeIcon icon={faCartShopping} width={30} />
          </Link>
          <span className="cart_count">1</span>
          <Link href={`/${locale}/register`}>
            <FontAwesomeIcon icon={faUser} width={30} />
          </Link>
          <Link href={`/${locale}/addtofav`}>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Image
            src="/images/saudi-arabia-flag-icon.png"
            width={40}
            height={40}
            alt="saudi arabia flag"
            style={{ cursor: "auto" }}
          />
          <div className="translation">
            <p onClick={toggleTranslation}>{locale}</p>
            <div className={`translation_options ${isTranslationOpen ? "d-flex" : "d-none"}`}>
              <Link href={"/en"}>En</Link>
              <Link href={"/ar"}>ع</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar_top mobile">
        <div className="logo_icons">
          <Image
            src="/images/logo.png"
            width={110}
            height={110}
            alt="logo"
            loading="lazy"
            className="logo_image mr-5"
          />
          <div className="nav_icons flag_mob">
            <Link href={`/${locale}/cart`}>
              <FontAwesomeIcon icon={faCartShopping} width={30} />
            </Link>
            <span className="cart_count">1</span>
            <Link href={`/${locale}/register`}>
              <FontAwesomeIcon icon={faUser} width={30} />
            </Link>
            <Link href={`/${locale}/addtofav`}>
              <FontAwesomeIcon icon={faHeart} width={30} />
            </Link>
            <Image
              src="/images/saudi-arabia-flag-icon.png"
              width={1000}
              height={1000}
              alt="saudi arabia flag"
              style={{ cursor: "auto" }}
            />
            <FontAwesomeIcon
              icon={faBars}
              width={30}
              onClick={openMobileNavbar}
            />
          </div>
        </div>

        <div className="search">
          <input type="text" placeholder="بحث" />
        </div>
      </div>

      <nav className={`navbar_bottom_mobile ${isMobileNavbarOpen ? "d-flex" : "d-none"}`}>
        <FontAwesomeIcon icon={faXmark} onClick={closeMobileNavbar} />
        <ul>
          <li>
            <Link href="/">الصفحة الرئيسية</Link>
          </li>
          <li>
            <Link href="/">عروضنا</Link>
          </li>
          <li>
            <Link href="/">الشاي الاسود</Link>
          </li>
          <li>
            <Link href="/">الشاي الاخضر</Link>
          </li>
          <li>
            <Link href="/">الشاي المنكه</Link>
          </li>
          <li>
            <Link href="/">ادوات الشاي</Link>
          </li>
          <li>
            <Link href="/">مجموعات توفير</Link>
          </li>
          <li>
            <Link href="/">مع شاي سوالف</Link>
          </li>
          <li>
            <div className="translation">
              <p onClick={toggleMobileTranslation}>{locale}</p>
              <div className={`translation_options ${isMobileTranslationOpen ? "d-flex" : "d-none"}`}>
                <Link href={"/en"}>En</Link>
                <Link href={"/ar"}>ع</Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
