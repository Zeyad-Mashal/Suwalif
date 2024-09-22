"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbartop/Navbar";
import NavbarMenu from "../Navbarmenu/NavbarMenu";
import Hero from "../Hero/Hero";
import Section1 from "../section1/Section1";
import Section2 from "../Section2/Section2";
import Footer from "../Footer/Footer";
import Reviews from "../reviwes/Reviwes";
import Image from "next/image";
import "./Home.css";
import { useLocale } from "next-intl";
import { type Locale } from "@/src/lib/locales";
import addToCartApi from "@/src/app/[locale]/api/cart/addToCartApi";
interface HomeProps { }
const Home: React.FC<HomeProps> = () => {
  const locale = useLocale() as Locale
  const [modelLoading, setModelLoading] = useState(false);
  const lang = locale
  const [cartLoading, setCartLoading] = useState(false);
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);
  const [totalCart, setTotalCart] = useState(0)
  const user_token = window.localStorage.getItem("user");

  useEffect(() => {
    setModelLoading(true);
    setTimeout(() => {
      setModelLoading(false);
    }, 2800);
  }, []);
  window.localStorage.setItem("translation", lang)
  const addToCart = (productId: string) => {
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
    <div>
      {
        modelLoading ? <div className="model">
          <Image src={"/images/logo.png"} width={5000} height={5000} alt="loading image" />
        </div>
          : null
      }
      <Navbar totalCart={totalCart} setTotalCart={setTotalCart} />
      <NavbarMenu />
      <Hero />
      <Section1 onAddToCart={addToCart} login={login} setLogin={setLogin} />
      <Section2 onAddToCart={addToCart} login={login} setLogin={setLogin} />
      <Reviews />
      <Footer />

    </div>
  );
};

export default Home;
