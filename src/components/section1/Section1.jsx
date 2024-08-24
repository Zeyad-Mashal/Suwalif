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
const Section1 = () => {
  useEffect(() => {
    getAllProductsBySection();
  }, []);
  const t = useTranslations("sectionOne");
  const [bySection, setBySection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [error, setError] = useState("");
  const getAllProductsBySection = () => {
    getBySection(setLoading, setError, setBySection, "topSale");
  };
  const lang = window.localStorage.getItem("Lang");
  const addToCart = (productId) => {
    const data = {
      quantity: 1,
    };
    addToCartApi(setCartLoading, setError, productId, data);
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
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {loading
              ? "loading..."
              : bySection?.map((item) => {
                  return (
                    <SwiperSlide key={item._id}>
                      <div className="section1_item">
                        <Link href={`${lang}/details/${item._id}`}>
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
                          </div>
                        </div>
                        <div className="cart_btn">
                          <button
                            onClick={() => addToCart(item._id)}
                            className="cart_btn_button"
                          >
                            أضف الي السلة
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
          </Swiper>
        </div>
      </div>

      <div>
        <Image
          src="/images/banner1.jpg"
          width={1500}
          height={100}
          alt="banner image"
        />
      </div>

      <div className="shapes">
        <Image src="/images/shape-4.png" width={250} height={100} alt="shape" />
      </div>
      <div className="shapes2">
        <Image src="/images/shape-5.png" width={250} height={100} alt="shape" />
      </div>
    </section>
  );
};

export default Section1;
