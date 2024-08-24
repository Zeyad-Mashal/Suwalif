"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../Navbartop/Navbar";
import "./Category.css";
import Image from "next/image";
import Footer from "../../Footer/Footer";
import { useParams } from "next/navigation";
import getByCategoryApi from "@/src/app/[locale]/api/category/getByCategoryApi";
const Category = () => {
  useEffect(() => {
    getAllproductsByCategory();
  }, []);
  const params = useParams();
  const { categoryId } = params;
  const [allProductsByCategory, setAllProductsByCategory] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const getAllproductsByCategory = () => {
    getByCategoryApi(
      setloading,
      setError,
      setAllProductsByCategory,
      categoryId
    );
  };
  return (
    <>
      <Navbar />
      <div className="category">
        <h1>{allProductsByCategory[0]?.category}</h1>
        <div className="category_list">
          {loading
            ? "Loading..."
            : allProductsByCategory.map((item) => {
                return (
                  <div className="category_item" key={item._id}>
                    <Image
                      src={item.images[0]}
                      width={1000}
                      height={1000}
                      alt="category product"
                    />
                    <div className="category_content">
                      <h3>{item.name}</h3>
                      <div className="category_content_info">
                        <p>{item.price} ريال</p>
                        <button>اضف الي السلة</button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
