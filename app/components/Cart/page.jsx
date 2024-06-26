"use client";
import React, { useState } from "react";
import NavbarTop from "../Navbartop/Navbar";
import "./Cart.css";
import Image from "next/image";

const Cart = () => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(100); // Initial price for one item
  const itemPrice = 100; // Price of one item

  const incrementCount = () => {
    setCount(count + 1);
    setPrice((count + 1) * itemPrice);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setPrice((count - 1) * itemPrice);
    }
  };

  return (
    <>
      <NavbarTop />
      <section className="cart mt-28">
        <div className="cart_container">
          <h1 className="text-white">Your Cart</h1>
          <div className="cart_list">
            <div className="cart_item">
              <Image
                src="/images/product.jpeg"
                width={100}
                height={100}
                alt="cart product"
              />
              <div className="cart_info">
                <h3>product Name here</h3>
                <p>20 SAR</p>
                <span>0.5 kgm</span>
              </div>
            </div>
          </div>
          <div className="cart_Check">
            <button>Check Out Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
