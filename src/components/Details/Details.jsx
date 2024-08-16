"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Details.css";
import NavbarTop from "../Navbartop/Navbar";
import Stars from "../Stars/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Details = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(100); // Initial price for one item
  const itemPrice = 100; // Price of one item

  const incrementCount = () => {
    setCount(count + 1);
    setPrice((count + 1) * itemPrice);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrice((count - 1) * itemPrice);
    }
  };
  return (
    <>
      <NavbarTop />
      <div className="details">
        <div className="details_container">
          <div className="details_item">
            <div className="item_image">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src="/images/product.jpeg"
                    width={1000}
                    height={1000}
                    alt="product details page"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/product.jpeg"
                    width={1000}
                    height={1000}
                    alt="product details page"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/product.jpeg"
                    width={1000}
                    height={1000}
                    alt="product details page"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="item_content">
              <h3>Product Name here</h3>
              <span>100 pice</span>
              <h4>100 SAR</h4>
              <div className="leaves_rating">
                <div className="leaves_rating_leaves">
                  <FontAwesomeIcon icon={faLeaf} width={30} />
                  <FontAwesomeIcon icon={faLeaf} width={30} />
                  <FontAwesomeIcon icon={faLeaf} width={30} />
                  <FontAwesomeIcon icon={faLeaf} width={30} />
                  <FontAwesomeIcon icon={faLeaf} width={30} />
                </div>
                <div className="leaves_rating_word">
                  <p>قوي و مكثف</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                ut quidem temporibus beatae iste consequatur fuga debitis, id
                incidunt necessitatibus sit minima distinctio velit odio at
                asperiores eaque illo aperiam!
              </p>

              <div className="price_quantity">
                <div className="qunatity_container">
                  <p>Quantity*</p>
                  <div className="quantity">
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>+</button>
                  </div>
                </div>
                <div className="price">
                  <span>Price:</span>
                  <span>{price} SAR</span>
                </div>
                <div className="cart_done">
                  <button>Add To Cart</button>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </div>
          </div>
          <div className="relatedProducts">
            <h2>Related Products</h2>
            <div className="relatedProductsList">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                loop={true}
                navigation={true}
                pagination={true}
                keyboard={true}
                modules={[Navigation, Pagination, Keyboard]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="relatedProducts_item">
                    <Image
                      src="/images/product.jpeg"
                      width={1000}
                      height={1000}
                      alt="related product"
                    />
                    <h3>name Here</h3>
                    <h4>100 SAR</h4>
                    <button>Add To Cart</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relatedProducts_item">
                    <Image
                      src="/images/product.jpeg"
                      width={1000}
                      height={1000}
                      alt="related product"
                    />
                    <h3>name Here</h3>
                    <h4>100 SAR</h4>
                    <button>Add To Cart</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relatedProducts_item">
                    <Image
                      src="/images/product.jpeg"
                      width={1000}
                      height={1000}
                      alt="related product"
                    />
                    <h3>name Here</h3>
                    <h4>100 SAR</h4>
                    <button>Add To Cart</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relatedProducts_item">
                    <Image
                      src="/images/product.jpeg"
                      width={1000}
                      height={1000}
                      alt="related product"
                    />
                    <h3>name Here</h3>
                    <h4>100 SAR</h4>
                    <button>Add To Cart</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relatedProducts_item">
                    <Image
                      src="/images/product.jpeg"
                      width={1000}
                      height={1000}
                      alt="related product"
                    />
                    <h3>name Here</h3>
                    <h4>100 SAR</h4>
                    <button>Add To Cart</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relatedProducts_item">
                    <Image
                      src="/images/product.jpeg"
                      width={1000}
                      height={1000}
                      alt="related product"
                    />
                    <h3>name Here</h3>
                    <h4>100 SAR</h4>
                    <button>Add To Cart</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
