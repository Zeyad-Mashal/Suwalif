import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSnapchat,
  faXTwitter,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo">
          <Image src="/images/logo.png" width={200} height={200} alt="logo" />
        </div>
        <div className="footer_social">
          <Link href="https://www.instagram.com/suwaliftea/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <FontAwesomeIcon icon={faSnapchat} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faTiktok} />
          <Link href="https://suwaliftea.com/" target="_blank">
            <FontAwesomeIcon icon={faEarthAmericas} />
          </Link>
        </div>
        <div className="footer_list">
          <div className="footer_form">
            <form>
              <h3>تواصل معنا</h3>
              <input type="text" placeholder="اسمك" />
              <input type="text" placeholder="رقم الهاتف" />
              <textarea placeholder="رسالتك"></textarea>
              <button>ارسال</button>
            </form>
          </div>
          <div className="imp_links">
            <h2>روابط هامة</h2>
            <ul>
              <li>
                <Link href="/components/transport">سياسة الشحن </Link>
              </li>
              <li>
                <Link href="/components/usage">سياسة الاستخدمات والخصوصة </Link>
              </li>
              <li>
                <Link href="/components/receive">
                  سياسة الاسترجاع والاستبدال
                </Link>
              </li>
              <li>
                <Link href="tel:+966566277936">
                  مبيعات الجملة
                  <FontAwesomeIcon icon={faWhatsapp} className="whatsapp" />
                </Link>
              </li>
              <li>
                <Link href="mailto:support@suwalif-products.com">
                  البريد الألكتروني
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; كل الحقوق محفوظة لدى شاي السوالف | شركة جينيس</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
