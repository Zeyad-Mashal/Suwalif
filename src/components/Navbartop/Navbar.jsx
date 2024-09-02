"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faXmark,
  faHeart,
  faX,
  faMobile,
  faEnvelope,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import searchByProductApi from "@/src/app/[locale]/api/search/searchByProductApi";
import getCategoriesApi from "@/src/app/[locale]/api/category/getCategoriesApi";
import { useRouter } from "next/navigation";
// Define the Product interface
import LoginAPI from "@/src/app/[locale]/api/auth/login.api";
import VerificationLoginCode from "@/src/app/[locale]/api/auth/VerificationLogin.api";
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
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [logOut, setLogout] = useState(false);
  const [login, setLogin] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [emailOrPhone, setemailOrPhone] = useState("");
  const [openMobileTranslate, setOpenMobileTranslate] = useState(false);
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

  const lang = window.localStorage.getItem("translation");
  const user_token = window.localStorage.getItem("user");
  const arTranslate = (lang) => {
    window.location.href = `https://suwalif.vercel.app/${lang}`;
  };

  const getAllCategories = () => {
    getCategoriesApi(setloading, setError, setAllCategories);
  };
  const removeToken = () => {
    window.localStorage.removeItem("user");
    window.location.href = `https://suwalif.vercel.app/${lang}`;
  };
  const handleOpenPhone = () => {
    document.querySelector(".phone_way").style.display = "flex";
    document.querySelector(".login_ways").style.display = "none";
    document.querySelector(".login_ways_p").style.display = "none";
  };
  const handleOpenemail = () => {
    document.querySelector(".email_way").style.display = "flex";
    document.querySelector(".login_ways").style.display = "none";
    document.querySelector(".login_ways_p").style.display = "none";
  };
  const handleOpenVerification = () => {
    document.querySelector(".code").style.display = "flex";
    document.querySelector(".login_ways_p").style.display = "none";
  };
  const handleLogin = () => {
    if (emailOrPhone == "") {
      setError("Please enter your email or phone number");
    } else {
      const data = {
        emailOrPhone: emailOrPhone,
      };
      LoginAPI(setLoading, setError, data);
    }
  };
  const [code, setCode] = useState("");
  const hendleVerifyCode = () => {
    if (code == "") {
      setError("يرجي إادخال رمز التحقق المرسل");
    } else {
      const data = {
        emailOrPhone,
        verificationCode: code,
      };
      VerificationLoginCode(setloading, setError, data);
    }
  };
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
                  : searchedProducts?.map((item) => (
                      <Link
                        href={`/${lang}/details/${item._id}`}
                        key={item._id}
                      >
                        <div className="search_item" key={item._id}>
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
                      </Link>
                    ))}
              </div>
            </div>
          )}
        </div>

        <div className="nav_icons">
          <Link href={`/${lang}/cart`}>
            <FontAwesomeIcon icon={faCartShopping} width={30} />
          </Link>
          <Link href={`/${lang}/addtofav`}>
            <FontAwesomeIcon icon={faHeart} />
          </Link>

          {user_token ? (
            <div className="register_logedin">
              <FontAwesomeIcon
                icon={faUser}
                width={20}
                onClick={() => setLogout(!logOut)}
              />
            </div>
          ) : (
            <FontAwesomeIcon
              icon={faUser}
              width={30}
              onClick={() => setLogin(!login)}
            />
          )}
          {logOut ? (
            <div className="logout_dropmenu">
              <p>هل تريد تسجيل خروج ؟</p>
              <button onClick={removeToken}>تسجيل خروج</button>
            </div>
          ) : (
            ""
          )}
          <div className="translation">
            <div className="translate_indecator">
              <p onClick={toggleTranslation}>{`${
                lang == "ar" ? "English" : "عربي"
              }`}</p>{" "}
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div
              className={`translation_options ${
                isTranslationOpen ? "d-flex" : "d-none"
              }`}
            >
              <button onClick={() => arTranslate("en")}>English</button>
              <button onClick={() => arTranslate("ar")}>عربي</button>
            </div>
          </div>
          <Image
            src="/images/saudi-arabia-flag-icon.png"
            width={40}
            height={40}
            alt="saudi arabia flag"
            style={{ cursor: "auto" }}
          />
        </div>
      </div>

      {login ? (
        <div className="login">
          <div
            className="login_container"
            onClick={() => setLogin(!login)}
          ></div>
          <div className="login_content">
            <FontAwesomeIcon
              icon={faX}
              className="close_login"
              onClick={() => setLogin(!login)}
            />
            <FontAwesomeIcon icon={faUser} />
            <h3>تسجيل الدخول</h3>
            <p className="login_ways_p">أختر وسيلة التسجيل</p>

            <div className="phone_way">
              <p>رقم الجوال: </p>
              <div className="phone_input">
                <input
                  type="text"
                  placeholder="51 234 5678"
                  value={emailOrPhone}
                  onChange={(e) => setemailOrPhone(e.target.value)}
                />
                <span>+966</span>
              </div>
              {error}
              <button onClick={handleLogin}>
                {Loading ? "Suwalif..." : "دخول"}
              </button>
            </div>

            <div className="email_way ">
              <p>البريد الالكتروني: </p>
              <div className="email_input">
                <input
                  type="text"
                  placeholder="example1@email.com"
                  value={emailOrPhone}
                  onChange={(e) => setemailOrPhone(e.target.value)}
                />
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              {error}
              <button onClick={handleLogin}>
                {Loading ? "Suwalif..." : "دخول"}
              </button>
            </div>

            <div className="code">
              <p>يرجي إدخال رمز التحقق</p>
              <div className="code_input">
                <input
                  type="text"
                  placeholder="رمز التحقق"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              {error}
              <button onClick={hendleVerifyCode}>
                {Loading ? "Suwalif..." : "دخول"}
              </button>
            </div>

            <div className="login_ways">
              <div className="login_phone" onClick={handleOpenPhone}>
                <FontAwesomeIcon icon={faMobile} />
                <p>رسالة نصية</p>
              </div>
              <div className="login_email" onClick={handleOpenemail}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>البريد الألكتروني</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

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
            <Link href={`/${lang}/addtofav`}>
              <FontAwesomeIcon icon={faHeart} width={30} />
            </Link>
            {user_token ? (
              <div className="register_logedin">
                <FontAwesomeIcon
                  icon={faUser}
                  width={20}
                  onClick={() => setLogout(!logOut)}
                />
              </div>
            ) : (
              <FontAwesomeIcon
                icon={faUser}
                width={30}
                onClick={() => setLogin(!login)}
              />
            )}
            {logOut ? (
              <div className="logout_dropmenu">
                <p>هل تريد تسجيل خروج ؟</p>
                <button onClick={removeToken}>تسجيل خروج</button>
              </div>
            ) : (
              ""
            )}
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
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeMobileNavbar}
          className="close_mobile"
        />
        <ul>
          <li>
            <Link href={``}>{t("main")}</Link>
          </li>
          <li>
            <Link href={`/`}>{t("nav2")}</Link>
          </li>
          {loading
            ? "Loading..."
            : allCategories.map((item) => {
                return (
                  <li key={item._id}>
                    <Link href={`/${lang}/category/${item._id}`}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}

          <li className="mobile_translation_content">
            <div
              className="mobile_translation_indecator"
              onClick={() => setOpenMobileTranslate(!openMobileTranslate)}
            >
              <p>{`${lang == "ar" ? "English" : "عربي"}`}</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {openMobileTranslate ? (
              <div className="mobile_translation">
                <button onClick={() => arTranslate("en")}>English</button>
                <button onClick={() => arTranslate("ar")}>عربي</button>
              </div>
            ) : (
              ""
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
