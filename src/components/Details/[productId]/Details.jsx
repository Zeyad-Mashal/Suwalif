"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Details.css";
import NavbarTop from "../../Navbartop/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLeaf, faX } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import getProductByIdApi from "@/src/app/[locale]/api/product/getProductByIdApi";
import { useParams } from "next/navigation";
import addToFavoriteApi from "@/src/app/[locale]/api/favorite/addToFavoriteApi";
import addToCartApi from "@/src/app/[locale]/api/cart/addToCartApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
const Details = ({ onAddToCart }) => {
  useEffect(() => {
    getProductById();
  }, []);
  const { push } = useRouter();
  const t = useTranslations("related");
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState({});
  const [relatedProducts, setRelatedproducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);
  const param = useParams();
  const { productId } = param;
  const [originalPrice, setOriginalPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);
  const lang = window.localStorage.getItem("translation");
  const user_token = window.localStorage.getItem("user");
  const incrementCount = () => {
    setCount(count + 1);
    const productDetails = products;
    productDetails.price = originalPrice * (count + 1);
    setTotalPrice(productDetails.price);
    productDetails.price = originalPrice;
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      const productDetails = products;
      productDetails.price = originalPrice * (count - 1);
      setTotalPrice(productDetails.price);
      productDetails.price = originalPrice;
    }
  };
  const getProductById = () => {
    getProductByIdApi(
      setloading,
      setError,
      setProducts,
      setRelatedproducts,
      productId,
      setOriginalPrice
    );
  };
  const addToFavorite = () => {
    if (user_token) {
      addToFavoriteApi(setloading, setError, productId);
    } else {
      document.querySelector(".cart_notLogin").style.display = "flex";
      setTimeout(() => {
        document.querySelector(".cart_notLogin").style.display = "none";
      }, 4000);
    }
  };
  const addToCart = (productId) => {
    if (user_token) {
      const data = {
        quantity: count,
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
    <>
      <div className="details">
        <div className="details_container">
          <div className="details_item">
            <div className="item_image">
              <Swiper
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {products?.images?.map((item) => {
                  return (
                    <SwiperSlide key={item._id}>
                      <Image
                        src={item}
                        width={1000}
                        height={1000}
                        alt="product details page"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
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
            <div className="item_content">
              <h3>{products?.name}</h3>
              <span>{products?.packaging}</span>
              <h4>
                {products?.price} {lang == "ar" ? "ريال" : "SAR"}
              </h4>
              <div className="leaves_rating">
                <div className="leaves_rating_leaves">
                  <div className="leaves_static">
                    <FontAwesomeIcon icon={faLeaf} width={30} />
                    <FontAwesomeIcon icon={faLeaf} width={30} />
                    <FontAwesomeIcon icon={faLeaf} width={30} />
                    <FontAwesomeIcon icon={faLeaf} width={30} />
                    <FontAwesomeIcon icon={faLeaf} width={30} />
                  </div>
                  {(() => {
                    const leaves = [];

                    for (let i = 0; products?.flavorIntensity > i; i++) {
                      leaves.push(
                        <FontAwesomeIcon
                          icon={faLeaf}
                          width={30}
                          className="leaves"
                        />
                      );
                    }

                    return leaves;
                  })()}
                </div>
                <div className="leaves_rating_word">
                  <p>{products?.flavorDescription}</p>
                </div>
              </div>
              <p>{products?.description}</p>

              <div className="price_quantity">
                <div className="qunatity_container">
                  <p>{lang == "ar" ? "الكمية" : "Quantity"}*</p>
                  <div className="quantity">
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>+</button>
                  </div>
                </div>
                <div className="price">
                  <span>{lang == "ar" ? "السعر" : "Price"}:</span>
                  <span>
                    {totalPrice ? totalPrice : products?.price}{" "}
                    {lang == "ar" ? "ريال" : "SAR"}
                  </span>
                </div>
                <div className="cart_done cart_btn">
                  <button onClick={() => onAddToCart(products._id)}>
                    {lang == "ar" ? "أضف الي السلة" : "Add To Cart"}
                  </button>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fav_icon"
                    onClick={addToFavorite}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relatedProducts">
            <h2>{t("title")}</h2>
            <div className="relatedProductsList">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {loading ? (
                  <p className="details_loading">Suwalif...</p>
                ) : (
                  relatedProducts?.map((item) => {
                    return (
                      <SwiperSlide key={item._id}>
                        <Link href={`/${lang}/details/${item._id}`}>
                          <div className="relatedProducts_item">
                            <Image
                              src={item.images[0]}
                              width={1000}
                              height={1000}
                              alt="related product"
                            />
                            <h3>{item.name}</h3>
                            <h4>
                              {item.price} {lang == "ar" ? "ريال" : "SAR"}
                            </h4>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
