"use client";
import React, { useState } from "react";
import Category from "../../../../components/Category/[categoryId]/Category";
import Navbar from "@/src/components/Navbartop/Navbar";
import addToCartApi from "../../api/cart/addToCartApi";
const CategoryPage = () => {
  const user_token = window.localStorage.getItem("user");
  const [cartLoading, setCartLoading] = useState(false);
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);
  const [totalCart, setTotalCart] = useState(0);
  const addToCart = (productId) => {
    if (user_token) {
      const data = {
        quantity: 1,
      };
      addToCartApi(setCartLoading, setError, productId, data, setTotalCart);
    } else {
      setLogin(true);
    }
  };

  return (
    <>
      <Navbar totalCart={totalCart} setTotalCart={setTotalCart} />
      <Category onAddToCart={addToCart} />
    </>
  );
};

export default CategoryPage;
