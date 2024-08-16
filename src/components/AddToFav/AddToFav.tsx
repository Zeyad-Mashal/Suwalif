'use client'
import Navbar from "../Navbartop/Navbar";
import Image from "next/image";
import "./addToFav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useLocale } from "next-intl";
import { type Locale } from "../../lib/locales";
const AddToFav = () => {
  const locale = useLocale() as Locale;
  const deleteFav = () => {
    document.querySelector(".item_item")?.remove();
  }
  return (
    <>
      <Navbar />
      <section className="addToFav">
        <div className="fav_container">
          <h2>منتاجاتك المفضلة</h2>
          <div className="list_fav">
            <Link href={`/${locale}/details`}>
              <div className="item_item">
                <Image src={"/images/product.jpeg"} width={500} height={500} alt="fav product" />
                <div className="content_fav">
                  <h3>أوراق شاي كاملة علبة معدنية</h3>
                  <div className="content_bottom_fav">
                    <p>100 ريال</p>
                    <FontAwesomeIcon icon={faHeart} width={50} onClick={deleteFav} />
                  </div>
                </div>
              </div>
            </Link>

            <div className="item_item">
              <Image src={"/images/product.jpeg"} width={500} height={500} alt="fav product" />
              <div className="content_fav">
                <h3>أوراق شاي كاملة علبة معدنية</h3>
                <div className="content_bottom_fav">
                  <p>100 ريال</p>
                  <FontAwesomeIcon icon={faHeart} width={50} onClick={deleteFav} />
                </div>
              </div>
            </div>
            <div className="item_item">
              <Image src={"/images/product.jpeg"} width={500} height={500} alt="fav product" />
              <div className="content_fav">
                <h3>أوراق شاي كاملة علبة معدنية</h3>
                <div className="content_bottom_fav">
                  <p>100 ريال</p>
                  <FontAwesomeIcon icon={faHeart} width={50} onClick={deleteFav} />
                </div>
              </div>
            </div>
            <div className="item_item">
              <Image src={"/images/product.jpeg"} width={500} height={500} alt="fav product" />
              <div className="content_fav">
                <h3>أوراق شاي كاملة علبة معدنية</h3>
                <div className="content_bottom_fav">
                  <p>100 ريال</p>
                  <FontAwesomeIcon icon={faHeart} width={50} onClick={deleteFav} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToFav;
