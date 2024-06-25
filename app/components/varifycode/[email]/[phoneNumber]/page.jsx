"use client";
import { useState } from "react";
import Image from "next/image";
import "./code.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import verificationLoginCode from "../../../../api/auth/verificationLogin.api";
const VerifyCodePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const params = useParams();
  let { email, phoneNumber } = params;
  email = decodeURIComponent(email);
  const { push } = useRouter();
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [code5, setCode5] = useState("");
  const [code6, setCode6] = useState("");
  const hendleVerifyCode = () => {
    if (
      code1 == "" ||
      code2 == "" ||
      code3 == "" ||
      code4 == "" ||
      code5 == "" ||
      code6 == ""
    ) {
      setError("Please enter the verification code");
    } else {
      const code = code1 + code2 + code3 + code4 + code5 + code6;
      const data = {
        phoneNumber: phoneNumber != "VerifyAccount" ? phoneNumber : undefined,
        email: email != "VerifyAccount" ? email : undefined,
        code,
      };
      verificationLoginCode(setLoading, setError, data, push);
    }
  };

  return (
    <main>
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
            <h2 className="text-center">Verify Code</h2>
            <h4 className="text-slate-300">Check Your Email Or SMS Message</h4>
            <div className="code_inputs">
              <input
                type="text"
                maxLength="1"
                value={code1}
                onChange={(e) => setCode1(e.target.value)}
              />
              <input
                type="text"
                maxLength="1"
                value={code2}
                onChange={(e) => setCode2(e.target.value)}
              />
              <input
                type="text"
                maxLength="1"
                value={code3}
                onChange={(e) => setCode3(e.target.value)}
              />
              <input
                type="text"
                maxLength="1"
                value={code4}
                onChange={(e) => setCode4(e.target.value)}
              />
              <input
                type="text"
                maxLength="1"
                value={code5}
                onChange={(e) => setCode5(e.target.value)}
              />
              <input
                type="text"
                maxLength="1"
                value={code6}
                onChange={(e) => setCode6(e.target.value)}
              />
            </div>
            {error}
            <button className="submit_btn active" onClick={hendleVerifyCode}>
              {loading ? <span class="loader"></span> : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyCodePage;
