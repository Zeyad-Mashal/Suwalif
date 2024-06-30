import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSnapchat,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
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
          <div className="google_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927758.0370464314!2d47.4820571629815!3d24.724997748455824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1719141319086!5m2!1sar!2seg"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              className="map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
