"use client";
import React, { useState, useEffect } from "react";
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
import getBySection from "@/src/app/[locale]/api/topSale/getBySection";
import Link from "next/link";
const Section2 = () => {
  useEffect(() => {
    getAllProductsSection();
  }, []);
  const t = useTranslations("sectionTwo");
  const [bySection, setBySection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getAllProductsSection = () => {
    getBySection(setLoading, setError, setBySection, "offers");
  };
  const lang = window.localStorage.getItem("Lang");
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
                          <p>{item.price} ريال</p>
                        </div>
                        <div className="cart_btn">
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
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
