"use client";

import Image from "next/image";
import "../register/register.css";
import LoginAPI from "../../app/[locale]/api/auth/login.api";
import { useRouter } from "next/navigation";
import { useState } from "react";
const LoginPage = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const choiseLoginEmail = () => {
    document.querySelector(".email_input").classList.replace("hidden", "block");
    document.querySelector(".phone_input").classList.replace("block", "hidden");
    document
      .querySelector(".login_email_btn")
      .classList.replace("block", "hidden");
    document
      .querySelector(".login_phone_btn")
      .classList.replace("hidden", "block");
    setPhoneNumber("");
  };
  const choiseLoginPhone = () => {
    document.querySelector(".email_input").classList.replace("block", "hidden");
    document.querySelector(".phone_input").classList.replace("hidden", "block");
    document
      .querySelector(".login_email_btn")
      .classList.replace("hidden", "block");
    document
      .querySelector(".login_phone_btn")
      .classList.replace("block", "hidden");
    setEmail("");
  };

  const handleLogin = () => {
    if (phoneNumber == "" && email == "") {
      setError("Please enter your email or phone number");
    } else {
      const data = {
        phoneNumber: phoneNumber ? phoneNumber : undefined,
        email: email ? email : undefined,
      };

      LoginAPI(setLoading, setError, data, push);
    }
  };
  return (
    <main>
      <title>login page</title>
      <meta name="description" content="Verify Your Account" />
      <div className="register_conatiner">
        <div className="image_register">
          <Image
            src="/images/banner.webp"
            height={800}
            width={800}
            alt="login banner"
            loading="lazy"
            className="register_image"
          />
        </div>
        <div className="register_form">
          <Image
            src="/images/logo.png"
            height={150}
            width={150}
            alt="register banner"
            loading="lazy"
            className="register_image mb-3"
          />
          <div className="form_register">
            <h2 className="text-center">Login</h2>
            <input
              type="text"
              placeholder="رقم الهاتف"
              className="phone_input block"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="email_input hidden"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p
              onClick={choiseLoginEmail}
              className="login_email_btn block loginWay"
            >
              Login With Email
            </p>
            <p
              onClick={choiseLoginPhone}
              className="login_phone_btn hidden loginWay"
            >
              Login With Phone
            </p>
            {error}
            <button className="submit_btn active" onClick={handleLogin}>
              {loading ? <span class="loader"></span> : "Send Code"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
