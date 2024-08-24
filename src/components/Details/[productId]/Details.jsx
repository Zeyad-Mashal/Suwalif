"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Details.css";
import NavbarTop from "../../Navbartop/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import getProductByIdApi from "@/src/app/[locale]/api/product/getProductByIdApi";
import { useParams } from "next/navigation";
import addToFavoriteApi from "@/src/app/[locale]/api/favorite/addToFavoriteApi";
import addToCartApi from "@/src/app/[locale]/api/cart/addToCartApi";
const Details = () => {
  useEffect(() => {
    getProductById();
  }, []);
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
    addToFavoriteApi(setloading, setError, productId);
  };
  const addToCart = (productId) => {
    const data = {
      quantity: count,
    };
    addToCartApi(setCartLoading, setError, productId, data);
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
            <div className="item_content">
              <h3>{products?.name}</h3>
              <span>{products?.stock} القطع</span>
              <h4>{products?.price} ريال</h4>
              <div className="leaves_rating">
                <div className="leaves_rating_leaves">
                  {(() => {
                    const leaves = [];

                    for (let i = 0; products?.flavorIntensity > i; i++) {
                      leaves.push(<FontAwesomeIcon icon={faLeaf} width={30} />);
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
                  <p>الكمية*</p>
                  <div className="quantity">
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>+</button>
                  </div>
                </div>
                <div className="price">
                  <span>السعر:</span>
                  <span>{totalPrice ? totalPrice : products?.price} ريال</span>
                </div>
                <div className="cart_done cart_btn">
                  <button onClick={() => addToCart(products._id)}>
                    أضف الي السلة
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
                {loading
                  ? "loading..."
                  : relatedProducts?.map((item) => {
                      return (
                        <SwiperSlide key={item._id}>
                          <div className="relatedProducts_item">
                            <Image
                              src={item.images[0]}
                              width={1000}
                              height={1000}
                              alt="related product"
                            />
                            <h3>{item.name}</h3>
                            <h4>{item.price} ريال</h4>
                            <button>Add To Cart</button>
                          </div>
                        </SwiperSlide>
                      );
                    })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
