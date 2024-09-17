"use client";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section1.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import "./Section1.css";
import { useTranslations } from "next-intl";
import getBySection from "@/src/app/[locale]/api/topSale/getBySection";
import Link from "next/link";
import addToCartApi from "@/src/app/[locale]/api/cart/addToCartApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import LoginAPI from "@/src/app/[locale]/api/auth/login.api";
import VerificationLoginCode from "@/src/app/[locale]/api/auth/VerificationLogin.api";
const Section1 = () => {
  useEffect(() => {
    getAllProductsBySection();
  }, []);
  const { push } = useRouter();
  const t = useTranslations("sectionOne");
  const [bySection, setBySection] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);
  const [emailOrPhone, setemailOrPhone] = useState("");
  const [code, setCode] = useState("");

  const getAllProductsBySection = () => {
    getBySection(setLoading, setError, setBySection, "topSale");
  };
  const lang = window.localStorage.getItem("translation");
  const user_token = window.localStorage.getItem("user");
  const addToCart = (productId) => {
    if (user_token) {
      const data = {
        quantity: 1,
      };
      addToCartApi(setCartLoading, setError, productId, data);
    } else {
      setLogin(true);
    }
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
    document.querySelector(".phone_way").style.display = "flex";
    document.querySelector(".login_ways").style.display = "none";
    document.querySelector(".login_ways_p").style.display = "none";
  };
  const handleOpenemail = () => {
    document.querySelector(".email_way").style.display = "flex";
    document.querySelector(".login_ways").style.display = "none";
    document.querySelector(".login_ways_p").style.display = "none";
  };

  return (
    <section className="section1">
      <div className="section1_container">
        <h2>{t("title")}</h2>
        <div className="section1_list">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {bySection?.map((item) => {
              return (
                <SwiperSlide key={item._id}>
                  <div className="section1_item">
                    <Link href={`/${lang}/details/${item._id}`}>
                      <Image
                        src={item?.images[0]}
                        width={200}
                        height={200}
                        alt="product image"
                      />
                    </Link>
                    <div className="item_content">
                      <h3>{item?.name}</h3>
                      <div className="price">
                        <p>{item?.price} ريال</p>
                        <div className="cart_btn">
                          <button
                            onClick={() => addToCart(item._id)}
                            className="cart_btn_button"
                          >
                            أضف الي السلة
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
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
              <button onClick={handleLogin} className="login_btn_way">
                {Loading ? <span class="loader"></span> : "ارسال رمز التحقق"}
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
              <button onClick={handleLogin} className="login_btn_way">
                {Loading ? <span class="loader"></span> : "ارسال رمز التحقق"}
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
                {Loading ? <span class="loader"></span> : "دخول"}
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

      <div>
        <Image
          src="/images/banner1.jpg"
          width={1500}
          height={1500}
          alt="banner image"
        />
      </div>
    </section>
  );
};

export default Section1;
