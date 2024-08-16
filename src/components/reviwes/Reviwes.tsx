"use client";
import React, { useState } from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faX } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";
const Reviwes = () => {
  const t = useTranslations("sectionFour");
  const [openModel, setOpenModel] = useState(false)
  return (
    <section className="review">
      <div className="review_container">
        <h2>{t("title")}</h2>
        <div className="review_list">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
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
      <button className="reviwes_btn" onClick={() => setOpenModel(true)}>شاركنا رأيك</button>
      {
        openModel ?
          <div className="reviwe_model">
            <h3>شاركنا برأيك</h3>
            <FontAwesomeIcon icon={faX} width={30} className="close_icon" onClick={() => setOpenModel(false)} />
            <div className="reviwe_model_content">
              <div className="stars">
                <FontAwesomeIcon icon={faStar} width={30} />
                <FontAwesomeIcon icon={faStar} width={30} />
                <FontAwesomeIcon icon={faStar} width={30} />
                <FontAwesomeIcon icon={faStar} width={30} />
                <FontAwesomeIcon icon={faStar} width={30} />
              </div>
              <input type="text" placeholder="الاسم" />
              <textarea placeholder="رسالتك لنا"></textarea>
              <button className="reviwes_btn">ارسال</button>
            </div>
          </div>
          :
          ''
      }

    </section>
  );
};

export default Reviwes;
