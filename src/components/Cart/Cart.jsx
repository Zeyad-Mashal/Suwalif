"use client";
import React, { useState, useEffect } from "react";
import NavbarTop from "../Navbartop/Navbar";
import "./Cart.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import getToCartApi from "@/src/app/[locale]/api/cart/getToCartApi";
import updateToCartApi from "@/src/app/[locale]/api/cart/updateToCartApi";
import removeToCartApi from "@/src/app/[locale]/api/cart/removeToCartApi";
const Cart = ({ removeCart }) => {
  useEffect(() => {
    getToCart();
  }, []);

  const t = useTranslations("cart");
  const [allCart, setAllCart] = useState([]);
  const [cartNumber, setCartNumber] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);
  const [totalCart, setTotalCart] = useState(0);

  const incrementCount = (quantity, productId) => {
    quantity += 1;
    updateToCart(quantity, productId);
  };

  const decrementCount = (quantity, productId) => {
    if (quantity > 1) {
      quantity -= 1;
    }
    updateToCart(quantity, productId);
  };
  const getToCart = () => {
    getToCartApi(setloading, setError, setAllCart, setCartNumber, setTotalCart);
  };
  const updateToCart = (quantity, productId) => {
    const data = {
      quantity: quantity,
    };
    updateToCartApi(
      setCartLoading,
      setError,
      productId,
      data,
      setAllCart,
      setCartNumber
    );
  };
  const deleteFromCart = (productId) => {
    removeToCartApi(setError, setAllCart, setCartNumber, setloading, productId);
  };
  const lang = window.localStorage.getItem("translation");
  const user_token = window.localStorage.getItem("user");
  return (
    <>
      <section className="cart mt-28">
        <div className="cart_container">
          <h1 className="text-white">{t("title")}</h1>
          <div className="cart_list">
            {loading ? (
              <span class="loader"></span>
            ) : allCart.length >= 1 ? (
              allCart.map((item) => {
                return (
                  <div className="cart_item" key={item._id}>
                    <div className="cart_info">
                      <Image
                        src={item.product.images[0]}
                        width={200}
                        height={200}
                        alt="cart product"
                      />
                      <div className="info_content">
                        <h3>{item.product.name}</h3>
                        <h4>
                          {item.product.price} {lang == "ar" ? "ريال" : "SAR"}
                        </h4>
                        <p>
                          {lang == "ar" ? "اجمالي" : "Total"}: {item.price}{" "}
                          {lang == "ar" ? "ريال" : "SAR"}
                        </p>
                      </div>
                    </div>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      onClick={() =>
                        removeCart(
                          setError,
                          setAllCart,
                          setCartNumber,
                          setloading,
                          item.product._id
                        )
                      }
                    />
                    <div className="quantity">
                      <button
                        onClick={() =>
                          decrementCount(item.quantity, item.product._id)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          incrementCount(item.quantity, item.product._id)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="empty_cart">
                {lang == "ar" ? "السلة فارغة" : "Cart Is Empty"}
              </p>
            )}
          </div>
          <div className="cart_Check">
            {allCart.length >= 1 ? (
              <button>
                <Link href={`/${lang}/order`}>{t("check")}</Link>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
