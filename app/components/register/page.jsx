"use client";
import Image from "next/image";
import { useState } from "react";
import "./register.css";
import { useRouter } from "next/navigation";
import RegisterAPI from "../../api/auth/register.api";
const RegisterPage = () => {
  const [loading, setloading] = useState(false);
  const [Error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const { push } = useRouter();

  const handleRegister = () => {
    if (userName == "" || Phone == "" || Email == "") {
      setError("Please fill all the fields");
    } else {
      const data = {
        userName,
        phoneNumber: Phone,
        email: Email,
      };
      RegisterAPI(setloading, setError, data, push);
    }
  };

  return (
    <main>
      <title>Register Page</title>
      <meta name="description" content="This project Created By Next" />
      <div className="register_conatiner">
        <div className="image_register">
          <Image
            src="/images/banner.webp"
            height={800}
            width={800}
            alt="register banner"
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
            <h2 className="text-center">Register</h2>
            <input
              type="text"
              placeholder="أسمك"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="رقم الهاتف"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {Error}
            <button className="submit_btn active" onClick={handleRegister}>
              {loading ? <span class="loader"></span> : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
