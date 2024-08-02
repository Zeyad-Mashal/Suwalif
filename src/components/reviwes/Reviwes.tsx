"use client";
import React from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { type Locale } from "../../lib/locales";
const Reviwes = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations("sectionFour");
  return (
    <section className="review">
      <div className="review_container">
        <h2>{t("title")}</h2>
        <div className="review_list">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            // mousewheel={true}
            // cssMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="review_item">
                <h3 className="review_name">زياد احمد</h3>
                <div className="reviwes_stars">
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi mollitia repudiandae provident qui. Dolor laboriosam
                  ipsum adipisci explicabo placeat ipsa aliquam eos, consectetur
                  voluptate fugit minima nostrum eligendi, natus voluptatibus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review_item">
                <h3 className="review_name">زياد احمد</h3>
                <div className="reviwes_stars">
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi mollitia repudiandae provident qui. Dolor laboriosam
                  ipsum adipisci explicabo placeat ipsa aliquam eos, consectetur
                  voluptate fugit minima nostrum eligendi, natus voluptatibus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review_item">
                <h3 className="review_name">زياد احمد</h3>
                <div className="reviwes_stars">
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi mollitia repudiandae provident qui. Dolor laboriosam
                  ipsum adipisci explicabo placeat ipsa aliquam eos, consectetur
                  voluptate fugit minima nostrum eligendi, natus voluptatibus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review_item">
                <h3 className="review_name">زياد احمد</h3>
                <div className="reviwes_stars">
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi mollitia repudiandae provident qui. Dolor laboriosam
                  ipsum adipisci explicabo placeat ipsa aliquam eos, consectetur
                  voluptate fugit minima nostrum eligendi, natus voluptatibus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review_item">
                <h3 className="review_name">زياد احمد</h3>
                <div className="reviwes_stars">
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi mollitia repudiandae provident qui. Dolor laboriosam
                  ipsum adipisci explicabo placeat ipsa aliquam eos, consectetur
                  voluptate fugit minima nostrum eligendi, natus voluptatibus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review_item">
                <h3 className="review_name">زياد احمد</h3>
                <div className="reviwes_stars">
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                  <FontAwesomeIcon icon={faStar} width={20} />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi mollitia repudiandae provident qui. Dolor laboriosam
                  ipsum adipisci explicabo placeat ipsa aliquam eos, consectetur
                  voluptate fugit minima nostrum eligendi, natus voluptatibus.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviwes;
