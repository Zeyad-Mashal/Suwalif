"use client";
import "./Navbar.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faXmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const NavbarTop = () => {
  const openMobileNavbar = () => {
    document
      .querySelector(".navbar_bottom_mobile")
      .classList.replace("d-none", "d-flex");
  };
  const closeMobileNavbar = () => {
    document
      .querySelector(".navbar_bottom_mobile")
      .classList.replace("d-flex", "d-none");
  };

  return (
    <>
      <div className="navbar_top">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            width={110}
            height={110}
            alt="logo"
            loading="lazy"
            className="logo_image mr-5"
          />
        </Link>

        <div className="search">
          <input type="text" placeholder="بحث" />
        </div>

        <div className="nav_icons">
          <Link href="/components/Cart">
            <FontAwesomeIcon icon={faCartShopping} width={30} />
          </Link>
          <span className="cart_count">1</span>
          <Link href="/components/register">
            <FontAwesomeIcon icon={faUser} width={30} />
          </Link>
          <Link href={"/"}>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Image
            src="/images/saudi-arabia.png"
            width={40}
            height={40}
            style={{ cursor: "auto" }}
          />
        </div>
      </div>

      <div className="navbar_top mobile">
        <div className="logo_icons">
          <Image
            src="/images/logo.png"
            width={110}
            height={110}
            alt="logo"
            loading="lazy"
            className="logo_image mr-5"
          />
          <div className="nav_icons">
            <Link href="/components/Cart">
              <FontAwesomeIcon icon={faCartShopping} width={30} />
            </Link>
            <span className="cart_count">1</span>
            <Link href="/components/register">
              <FontAwesomeIcon icon={faUser} width={30} />
            </Link>
            <Link href={"/"}>
              <FontAwesomeIcon icon={faHeart} width={30} />
            </Link>

            <FontAwesomeIcon
              icon={faBars}
              width={30}
              onClick={openMobileNavbar}
            />
          </div>
        </div>

        <div className="search">
          <input type="text" placeholder="بحث" />
        </div>
      </div>

      <nav className="navbar_bottom_mobile d-none">
        <FontAwesomeIcon icon={faXmark} onClick={closeMobileNavbar} />
        <ul>
          <li>
            <Link href="/">الصفحة الرئيسية</Link>
          </li>
          <li>
            <Link href="/">عروضنا</Link>
          </li>
          <li>
            <Link href="/">الشاي الاسود</Link>
          </li>
          <li>
            <Link href="/">الشاي الاخضر</Link>
          </li>
          <li>
            <Link href="/">الشاي المنكه</Link>
          </li>
          <li>
            <Link href="/">ادوات الشاي</Link>
          </li>
          <li>
            <Link href="/">مجموعات توفير</Link>
          </li>
          <li>
            <Link href="/">مع شاي سوالف</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarTop;
