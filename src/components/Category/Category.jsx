import React from "react";
import Navbar from "../Navbartop/Navbar";
import "./Category.css";
import Image from "next/image";
import Footer from "../Footer/Footer";
const Category = () => {
  return (
    <>
      <Navbar />
      <div className="category">
        <h1>الشاي الاسود</h1>
        <div className="category_list">
          <div className="category_item">
            <Image
              src={"/images/product.jpeg"}
              width={1000}
              height={1000}
              alt="category product"
            />
            <div className="category_content">
              <h3>شاي اسود سيريلاني</h3>
              <div className="category_content_info">
                <p>15 ريال</p>
                <button>اضف الي السلة</button>
              </div>
            </div>
          </div>
          <div className="category_item">
            <Image
              src={"/images/product.jpeg"}
              width={1000}
              height={1000}
              alt="category product"
            />
            <div className="category_content">
              <h3>شاي اسود سيريلاني</h3>
              <div className="category_content_info">
                <p>15 ريال</p>
                <button>اضف الي السلة</button>
              </div>
            </div>
          </div>
          <div className="category_item">
            <Image
              src={"/images/product.jpeg"}
              width={1000}
              height={1000}
              alt="category product"
            />
            <div className="category_content">
              <h3>شاي اسود سيريلاني</h3>
              <div className="category_content_info">
                <p>15 ريال</p>
                <button>اضف الي السلة</button>
              </div>
            </div>
          </div>
          <div className="category_item">
            <Image
              src={"/images/product.jpeg"}
              width={1000}
              height={1000}
              alt="category product"
            />
            <div className="category_content">
              <h3>شاي اسود سيريلاني</h3>
              <div className="category_content_info">
                <p>15 ريال</p>
                <button>اضف الي السلة</button>
              </div>
            </div>
          </div>
          <div className="category_item">
            <Image
              src={"/images/product.jpeg"}
              width={1000}
              height={1000}
              alt="category product"
            />
            <div className="category_content">
              <h3>شاي اسود سيريلاني</h3>
              <div className="category_content_info">
                <p>15 ريال</p>
                <button>اضف الي السلة</button>
              </div>
            </div>
          </div>
          <div className="category_item">
            <Image
              src={"/images/product.jpeg"}
              width={1000}
              height={1000}
              alt="category product"
            />
            <div className="category_content">
              <h3>شاي اسود سيريلاني</h3>
              <div className="category_content_info">
                <p>15 ريال</p>
                <button>اضف الي السلة</button>
              </div>
            </div>
          </div>
          <div className="category_item">
            <Image
              src={"/images/product.jpeg"}
              width={1000}
              height={1000}
              alt="category product"
            />
            <div className="category_content">
              <h3>شاي اسود سيريلاني</h3>
              <div className="category_content_info">
                <p>15 ريال</p>
                <button>اضف الي السلة</button>
              </div>
            </div>
          </div>
          <div className="category_item">
            <Image
              src={"/images/product.jpeg"}
              width={1000}
              height={1000}
              alt="category product"
            />
            <div className="category_content">
              <h3>شاي اسود سيريلاني</h3>
              <div className="category_content_info">
                <p>15 ريال</p>
                <button>اضف الي السلة</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
