"use client";
import React, { useState, useEffect } from "react";
import "./Section2.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import { useTranslations } from "next-intl";
import getBySection from "@/src/app/[locale]/api/topSale/getBySection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const Section2 = ({ onAddToCart, login, setLogin }) => {
  useEffect(() => {
    getAllProductsSection();
  }, []);

  const t = useTranslations("sectionTwo");
  const [bySection, setBySection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);
  const [emailOrPhone, setemailOrPhone] = useState("");
  const [code, setCode] = useState("");

  const getAllProductsSection = () => {
    getBySection(setLoading, setError, setBySection, "offers");
  };
  const lang = window.localStorage.getItem("translation");
  const closeCartPopup = () => {
    document.querySelector(".cart_popop").style.display = "none";
  };
  const handleLogin = () => {
    if (emailOrPhone == "") {
      setError("Please enter your email or phone number");
    } else {
      const data = {
        emailOrPhone: emailOrPhone,
      };
      LoginAPI(setError, data);
    }
    document.querySelector(".login_btn_way").style.display = "none";
  };
  const hendleVerifyCode = () => {
    if (code == "") {
      setError("يرجي إادخال رمز التحقق المرسل");
    } else {
      const data = {
        emailOrPhone,
        verificationCode: code,
      };
      VerificationLoginCode(setLoading, setError, data);
    }
  };
  const handleOpenPhone = () => {
    document.querySelector(".section_2_phone").style.display = "flex";
    document.querySelector(".login_section2").style.display = "none";
    document.querySelector(".login_ways_p_section2").style.display = "none";
  };
  const handleOpenemail = () => {
    document.querySelector(".email_way_section2").style.display = "flex";
    document.querySelector(".login_section2").style.display = "none";
    document.querySelector(".login_ways_p_section2").style.display = "none";
  };
  return (
    <section className="section2">
      <div className="section2_container">
        <h2>{t("title")}</h2>
        <div className="section2_list">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {loading
              ? "Loading..."
              : bySection.map((item) => {
                  return (
                    <SwiperSlide key={item._id}>
                      <div className="section2_item">
                        <Link href={`/${lang}/details/${item._id}`}>
                          <Image
                            src={item.images[0]}
                            width={200}
                            height={200}
                            alt="product image"
                          />
                        </Link>
                        <div className="item_content">
                          <h3>{item.name}</h3>
                          <div className="price">
                            <p>
                              {item.price} {lang == "ar" ? "ريال" : "SAR"}
                            </p>
                            <div
                              className="cart_btn"
                              onClick={() => onAddToCart(item._id)}
                            >
                              <button className="cart_btn_button">
                                {lang == "ar" ? "أضف الي السلة" : "Add To Cart"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
          </Swiper>
          <div className="cart_popop_container">
            <div className="cart_popop">
              <FontAwesomeIcon icon={faX} onClick={closeCartPopup} />
              <Image
                src={"/images/logo.png"}
                alt="cart logo"
                width={500}
                height={500}
              />
              <h3>تمت الاضافة الي السلة</h3>
              <Link href={`${lang}/cart`}>عرض السلة</Link>
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
                <p className="login_ways_p login_ways_p_section2">
                  أختر وسيلة التسجيل
                </p>

                <div className="phone_way section_2_phone">
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
                  <button onClick={handleLogin} className="login_btn_way">
                    ارسال رمز التحقق
                  </button>
                </div>

                <div className="email_way email_way_section2">
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
                  <button onClick={handleLogin} className="login_btn_way">
                    ارسال رمز التحقق
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
                  <button onClick={hendleVerifyCode}>دخول</button>
                </div>

                <div className="login_ways login_section2">
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
          <div className="cart_notLogin">
            <div className="cart_notLogin_container">
              <Image
                src={"/images/logo.png"}
                width={500}
                height={500}
                alt="logo"
              />
              <p>يجب تسجيل الدخول اولا </p>
              <p>يرجي تسجيل الدخول ثم المحاولة مرة اخري</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
