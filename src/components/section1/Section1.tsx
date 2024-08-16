"use client";
import React, { useState } from "react";
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { type Locale } from "../../lib/locales";
import CartModel from "../CartModel/CartModel"
const Section1 = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations("sectionOne");
  const AddedToCart = () => {
    return (<CartModel />)
  }
  const [modelRendered, setModelRendered] = useState(false)
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
            <SwiperSlide>
              {/* <Link href={`/${locale}/details`}> */}
              <div className="section1_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <div className="price">
                    <p>20 SAR</p>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <div className="cart_btn">
                  <button onClick={() => setModelRendered(true)}>Add to Cart</button>

                </div>
              </div>
              {/* </Link> */}
            </SwiperSlide>
            <SwiperSlide>
              <div className="section1_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <div className="price">
                    <p>20 SAR</p>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section1_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <div className="price">
                    <p>20 SAR</p>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section1_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <div className="price">
                    <p>20 SAR</p>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section1_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <div className="price">
                    <p>20 SAR</p>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section1_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <div className="price">
                    <p>20 SAR</p>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="section1_item">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="product image"
                />
                <div className="item_content">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <div className="price">
                    <p>20 SAR</p>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <div className="cart_btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
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
      {modelRendered && AddedToCart()}
    </section>
  );
};

export default Section1;
