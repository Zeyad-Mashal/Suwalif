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
import searchByProductApi from "@/src/app/[locale]/api/search/searchByProductApi";
import getCategoriesApi from "@/src/app/[locale]/api/category/getCategoriesApi";
// Define the Product interface

const Navbar = () => {
  useEffect(() => {
    getAllCategories();
  }, []);
  const t = useTranslations("navbar");

  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const [isTranslationOpen, setIsTranslationOpen] = useState(false);
  const [isMobileTranslationOpen, setIsMobileTranslationOpen] = useState(false);
  const [searchMenu, setSearchMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  const openMobileNavbar = () => {
    setIsMobileNavbarOpen(true);
  };

  const closeMobileNavbar = () => {
    setIsMobileNavbarOpen(false);
  };

  const toggleTranslation = () => {
    setIsTranslationOpen(!isTranslationOpen);
  };

  const toggleMobileTranslation = () => {
    setIsMobileTranslationOpen(!isMobileTranslationOpen);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setSearchMenu(query.length > 0);
    searchByProductApi(setloading, setError, setSearchedProducts, query);
    console.log(query);
  };

  const arTranslate = (lang) => {
    window.localStorage.setItem("Lang", lang);
    window.location.href = `http://localhost:3000/${lang}`;
  };

  const getAllCategories = () => {
    getCategoriesApi(setloading, setError, setAllCategories);
  };

  const lang = window.localStorage.getItem("Lang");
  lang ? lang : lang == "ar";
  return (
    <>
      <div className="navbar_top">
        <Link href={`/${lang}`}>
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
          <input
            type="text"
            placeholder="بحث"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchMenu && (
            <div className="search_info">
              <div className="search_list">
                {loading
                  ? "Loading..."
                  : searchedProducts?.map((item, index) => (
                      <div className="search_item" key={index}>
                        <Image
                          src={item.images[0]}
                          width={100}
                          height={100}
                          alt="search"
                        />
                        <div className="search_content">
                          <h3>{item.name}</h3>
                          <div className="search_content_info">
                            <span>{item.price} ريال</span>
                            <p>{item.category}</p>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          )}
        </div>

        <div className="nav_icons">
          <Link href={`/${lang}/cart`}>
            <FontAwesomeIcon icon={faCartShopping} width={30} />
          </Link>
          <Link href={`/${lang}/register`}>
            <FontAwesomeIcon icon={faUser} width={30} />
          </Link>
          <Link href={`/${lang}/addtofav`}>
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
            <p onClick={toggleTranslation}>{lang}</p>
            <div
              className={`translation_options ${
                isTranslationOpen ? "d-flex" : "d-none"
              }`}
            >
              <button onClick={() => arTranslate("en")}>En</button>
              <button onClick={() => arTranslate("ar")}>ع</button>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar_top mobile">
        <div className="logo_icons">
          <Link href={`/${lang}`}>
            <Image
              src="/images/logo.png"
              width={110}
              height={110}
              alt="logo"
              loading="lazy"
              className="logo_image mr-5"
            />
          </Link>
          <div className="nav_icons flag_mob">
            <Link href={`/${lang}/cart`}>
              <FontAwesomeIcon icon={faCartShopping} width={30} />
            </Link>
            <Link href={`/${lang}/register`}>
              <FontAwesomeIcon icon={faUser} width={30} />
            </Link>
            <Link href={`/${lang}/addtofav`}>
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
          <input
            type="text"
            placeholder="بحث"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <nav
        className={`navbar_bottom_mobile ${
          isMobileNavbarOpen ? "d-flex" : "d-none"
        }`}
      >
        <FontAwesomeIcon icon={faXmark} onClick={closeMobileNavbar} />
        <ul>
          <li>
            <Link href={``}>{t("main")}</Link>
          </li>
          <li>
            <Link href={`/`}>{t("nav2")}</Link>
          </li>
          {loading
            ? "Loading..."
            : allCategories?.map((item) => {
                return (
                  <li key={item._id}>
                    <Link href={`/${lang}/category/${item._id}`}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          <li>
            <div className="translation">
              <p onClick={toggleMobileTranslation}>{lang}</p>
              <div
                className={`translation_options ${
                  isMobileTranslationOpen ? "d-flex" : "d-none"
                }`}
              >
                <button onClick={() => arTranslate("en")}>En</button>
                <button onClick={() => arTranslate("ar")}>ع</button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
