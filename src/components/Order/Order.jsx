"use client";
import React from "react";
import Navbar from "@/src/components/Navbartop/Navbar";
import "./Order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
const Order = () => {
  const closeOrder = () => {
    document.querySelector(".order_created").style.display = "none";
  };
  return (
    <>
      <Navbar />
      <section className="order">
        <div className="order_container">
          <h2>أهلا بك في تفاصيل الطلب</h2>
          <p>يرجي ملئ البيانات لأستلام الطلب</p>
          <div className="order_content">
            <h3>بيانات الطلب</h3>
            <div className="order_input">
              <label htmlFor="city">المنطقة:</label>
              <input type="text" name="city" />
            </div>
            <div className="order_input">
              <label htmlFor="address">العنوان سيتم الشحن اليه:</label>
              <input type="text" name="address" />
            </div>
            <div className="order_input">
              <label htmlFor="copoun">الكوبون:</label>
              <input type="text" name="copoun" />
            </div>
            <div className="order_btn">
              <button>ارسال الطلب</button>
            </div>
          </div>
          <div className="order_created">
            <FontAwesomeIcon
              icon={faX}
              className="close"
              onClick={closeOrder}
            />
            <h3>تم استلام الطلب بنجاح</h3>
            <FontAwesomeIcon icon={faCheck} className="checked" />
            <div className="order_details">
              <h4>تفاصيل الطلب يرجي اخذ لقطة شاشة</h4>
              <p>
                <strong>الاسم</strong>: زياد احمد مشعل
              </p>
              <p>
                <strong>رقم الهاتف</strong>: 01205222331
              </p>
              <p>
                <strong>الايميل</strong>: exapmle10@gmail.com
              </p>
              <p>
                <strong>المنطقة</strong>: الاسكندرية
              </p>
              <p>
                <strong>العنوان</strong>: سيدي بشر ش 15
              </p>
              <p>
                <strong>الكوبون</strong>: انا10كوبون50
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
