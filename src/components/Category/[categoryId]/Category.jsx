"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../Navbartop/Navbar";
import "./Category.css";
import Image from "next/image";
import Footer from "../../Footer/Footer";
import { useParams } from "next/navigation";
import getByCategoryApi from "@/src/app/[locale]/api/category/getByCategoryApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import addToCartApi from "@/src/app/[locale]/api/cart/addToCartApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Category = ({ onAddToCart }) => {
  useEffect(() => {
    getAllproductsByCategory();
  }, []);
  const params = useParams();
  const { categoryId } = params;
  const { push } = useRouter();

  const [allProductsByCategory, setAllProductsByCategory] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);
  const getAllproductsByCategory = () => {
    getByCategoryApi(
      setloading,
      setError,
      setAllProductsByCategory,
      categoryId
    );
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
    <>
      <div className="category">
        <h1>{allProductsByCategory[0]?.category}</h1>
        <div className="category_list">
          {loading ? (
            <span class="loader"></span>
          ) : (
            allProductsByCategory.map((item) => {
              return (
                <div className="category_item" key={item._id}>
                  <Link href={`/${lang}/details/${item._id}`}>
                    <Image
                      src={item.images[0]}
                      width={1000}
                      height={1000}
                      alt="category product"
                    />
                  </Link>
                  <div className="category_content">
                    <h3>{item.name}</h3>
                    <div className="category_content_info">
                      <p>
                        {item.price} {lang == "ar" ? "ريال" : "SAR"}
                      </p>
                      <button onClick={() => onAddToCart(item._id)}>
                        {lang == "ar" ? "أضف الي السلة" : "Add To Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
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
      </div>
      <Footer />
    </>
  );
};

export default Category;
