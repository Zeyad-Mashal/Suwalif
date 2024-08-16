"use client";
import React, { useState } from "react";
import NavbarTop from "../Navbartop/Navbar";
import "./Cart.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
const Cart = () => {
  const t = useTranslations("cart");
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

  const removeProduct = () => {
    document.querySelector(".cart_list .cart_item").remove();
  };

  return (
    <>
      <NavbarTop />
      <section className="cart mt-28">
        <div className="cart_container">
          <h1 className="text-white">{t("title")}</h1>
          <div className="cart_list">
            <div className="cart_item">
              <div className="cart_info">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="cart product"
                />
                <div className="info_content">
                  <h3>product Name here</h3>
                  <h4>100 SAR</h4>
                  <span>Weight: 0.5 kgm</span>
                  <p>Total: {price} SAR</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faCircleXmark} onClick={removeProduct} />
              <div className="quantity">
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
              </div>
            </div>
            <div className="cart_item">
              <div className="cart_info">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="cart product"
                />
                <div className="info_content">
                  <h3>product Name here</h3>
                  <h4>100 SAR</h4>
                  <span>Weight: 0.5 kgm</span>
                  <p>Total: {price} SAR</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faCircleXmark} onClick={removeProduct} />
              <div className="quantity">
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
              </div>
            </div>
            <div className="cart_item">
              <div className="cart_info">
                <Image
                  src="/images/product.jpeg"
                  width={200}
                  height={200}
                  alt="cart product"
                />
                <div className="info_content">
                  <h3>product Name here</h3>
                  <h4>100 SAR</h4>
                  <span>Weight: 0.5 kgm</span>
                  <p>Total: {price} SAR</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faCircleXmark} onClick={removeProduct} />
              <div className="quantity">
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
              </div>
            </div>
          </div>
          <div className="cart_Check">
            <button>{t("check")}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
