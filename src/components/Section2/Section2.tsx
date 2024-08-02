"use client";
import React from "react";
import "./Section2.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { type Locale } from "../../lib/locales";
const Section2 = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations("sectionTwo");
  return (
    <section className="section2">
      <div className="section2_container">
        <h2>{t("title")}</h2>
        <div className="section2_list">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            mousewheel={true}
            cssMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="section2_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <p>20 SAR</p>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section2_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <p>20 SAR</p>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section2_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <p>20 SAR</p>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section2_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <p>20 SAR</p>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section2_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <p>20 SAR</p>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="shapes">
        <Image src="/images/shape-1.png" width={250} height={100} alt="shape" />
      </div>
      <div className="shapes2">
        <Image src="/images/shape-2.png" width={250} height={100} alt="shape" />
      </div>
    </section>
  );
};

export default Section2;
