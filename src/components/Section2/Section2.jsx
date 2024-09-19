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
import addToCartApi from "@/src/app/[locale]/api/cart/addToCartApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Section2 = () => {
  useEffect(() => {
    getAllProductsSection();
  }, []);
  const { push } = useRouter();

  const t = useTranslations("sectionTwo");
  const [bySection, setBySection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);

  const getAllProductsSection = () => {
    getBySection(setLoading, setError, setBySection, "offers");
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
      document.querySelector(".cart_notLogin").style.display = "flex";
      setTimeout(() => {
        document.querySelector(".cart_notLogin").style.display = "none";
      }, 4000);
    }
  };
  const closeCartPopup = () => {
    document.querySelector(".cart_popop").style.display = "none";
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
                              onClick={() => addToCart(item._id)}
                            >
                              <button className="cart_btn_button">
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
