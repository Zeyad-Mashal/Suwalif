"use client";
import React, { useState } from "react";
import Navbar from "@/src/components/Navbartop/Navbar";
import "./Order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import createOrderApi from "@/src/app/[locale]/api/order/createOrderApi";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
const Order = () => {
  const closeOrder = () => {
    document.querySelector(".order_created").style.display = "none";
  };
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({});
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [copoun, setCopoun] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const createOrder = () => {
    const orderData = {
      userName: name,
      userPhone: phone,
      couponCode: copoun ? copoun : undefined,
      city,
      address,
      paymentWay: "Cash on Delivery",
    };
    if (city == "" || address == "") {
      setError("يجب ملئ البيانات المطلوبة اولا");
    }
    createOrderApi(setloading, setError, setOrder, setUser, orderData);
  };
  const saudiCities = [
    // منطقة الرياض (Riyadh Region)
    "الرياض / Riyadh",
    "الدرعية / Diriyah",
    "الخرج / Al-Kharj",
    "الدوادمي / Al-Dawadmi",
    "المجمعة / Al-Majma'ah",
    "وادي الدواسر / Wadi Al-Dawasir",
    "الزلفي / Al-Zulfi",
    "شقراء / Shaqra",
    "الأفلاج / Al-Aflaj",
    "عفيف / Afif",
    "الغاط / Al-Ghat",
    "الحريق / Al-Hariq",
    "مرات / Marat",
    "السليل / As-Sulayyil",
    "ضرما / Durma",
    "رماح / Rumah",
    "المزاحمية / Al-Muzahmiyah",
    "حريملاء / Huraymila",
    "ثادق / Thadiq",
    "الرين / Ar-Rayn",
    "الحوطة / Al-Houta",

    // منطقة مكة المكرمة (Makkah Region)
    "مكة المكرمة / Makkah",
    "جدة / Jeddah",
    "الطائف / Taif",
    "رابغ / Rabigh",
    "الليث / Al-Lith",
    "القنفذة / Al-Qunfudhah",
    "خليص / Khulais",
    "الكامل / Al-Kamil",
    "الجموم / Al-Jumum",
    "الخرمة / Al-Khurmah",
    "تربة / Turabah",
    "المويه / Al-Muwayh",
    "رنية / Ranyah",
    "العرضيات / Al-Ardiyat",
    "بحرة / Bahrah",
    "المظيلف / Al-Muzaylif",
    "نمرة / Namrah",

    // المنطقة الشرقية (Eastern Province)
    "الدمام / Dammam",
    "الظهران / Dhahran",
    "الخبر / Al-Khobar",
    "الأحساء / Al-Ahsa",
    "حفر الباطن / Hafar Al-Batin",
    "الجبيل / Al-Jubail",
    "القطيف / Al-Qatif",
    "النعيرية / An-Nu'ayriyah",
    "رأس تنورة / Ras Tanura",
    "الخفجي / Al-Khafji",
    "بقيق / Buqayq",
    "قرية العليا / Qaryat Al Ulya",
    "العيون / Al-Uyun",
    "سلوى / Salwa",
    "عين دار / Ain Dar",
    "الخفوس / Al-Khafus",

    // منطقة المدينة المنورة (Al Madinah Region)
    "المدينة المنورة / Madinah",
    "ينبع / Yanbu",
    "بدر / Badr",
    "الحناكية / Al-Hanakiyah",
    "العيص / Al-'Is",
    "العلا / AlUla",
    "خيبر / Khaybar",
    "مهد الذهب / Mahd Adh Dhahab",
    "وادي الفرع / Wadi Al-Far’",
    "المهد / Al-Mahd",

    // منطقة القصيم (Qassim Region)
    "بريدة / Buraydah",
    "عنيزة / Unayzah",
    "الرس / Ar-Rass",
    "المذنب / Al-Mithnab",
    "البكيرية / Al-Bukayriyah",
    "البدائع / Al-Bada'i",
    "رياض الخبراء / Riyadh Al-Khabra",
    "عيون الجواء / Uyun Al-Jawa",
    "الشماسية / Ash-Shamasiyah",
    "عقلة الصقور / Oqlat Al-Suqoor",
    "ضريه / Dharya",
    "دخنة / Dukhna",

    // منطقة عسير (Asir Region)
    "أبها / Abha",
    "خميس مشيط / Khamis Mushait",
    "بيشة / Bisha",
    "أحد رفيدة / Ahad Rafidah",
    "محايل عسير / Muhayil Asir",
    "النماص / An-Namas",
    "ظهران الجنوب / Dhahran Al Janub",
    "سراة عبيدة / Sarat Abidah",
    "رجال ألمع / Rijal Almaa",
    "البرك / Al-Birk",
    "الحرجة / Al-Harajah",
    "خميس البحر / Khamis Al-Bahr",

    // منطقة جازان (Jazan Region)
    "جازان / Jazan",
    "صبيا / Sabya",
    "أبو عريش / Abu Arish",
    "صامطة / Samtah",
    "فرسان / Farasan",
    "الدرب / Ad-Darb",
    "العارضة / Al-Aridah",
    "فيفا / Fayfa",
    "الريث / Ar-Raith",
    "الدائر / Addayer",
    "ضمد / Dhamad",

    // منطقة تبوك (Tabuk Region)
    "تبوك / Tabuk",
    "الوجه / Al-Wajh",
    "ضباء / Duba",
    "تيماء / Tayma",
    "أملج / Umluj",
    "حقل / Haql",
    "البدع / Al-Bad'",
    "أبو راكة / Abu Rakah",
    "الحوية / Al-Hawiyah",
    "الخريبة / Al-Khuraybah",

    // منطقة حائل (Hail Region)
    "حائل / Hail",
    "بقعاء / Bukea",
    "الشنان / Ash-Shinan",
    "الغزالة / Al-Ghazalah",
    "موقق / Muqaq",
    "الحائط / Al-Ha'it",
    "الشملي / Ash-Shamli",
    "السليمي / As-Sulaimi",
    "الحليفة السفلى / Al-Halifa As-Sufla",

    // منطقة الحدود الشمالية (Northern Borders Region)
    "عرعر / Arar",
    "رفحاء / Rafha",
    "طريف / Turayf",
    "العويقيلة / Al-'Uwayqilah",
    "الشعبة / Ash-Shu'ba",

    // منطقة الجوف (Al-Jouf Region)
    "سكاكا / Sakaka",
    "القريات / Al-Qurayyat",
    "دومة الجندل / Dumat Al-Jandal",
    "صوير / Suwayr",
    "طبرجل / Tabarjal",

    // منطقة نجران (Najran Region)
    "نجران / Najran",
    "شرورة / Sharurah",
    "حبونا / Habouna",
    "خباش / Khabash",

    // منطقة الباحة (Al Baha Region)
    "الباحة / Al-Baha",
    "بلجرشي / Baljurashi",
    "المندق / Al-Mandaq",
    "القرى / Al-Qura",
    "العقيق / Al-Aqiq",
    "الشعراء / Ash-Sha'ra",
  ];

  const [inputValue, setInputValue] = useState("");
  const [handleCoupon, setHandleCoupon] = useState(true);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Navbar />

      <section className="order">
        <div className="order_container">
          <h2>أهلا بك في تفاصيل الطلب</h2>
          <p>يرجي ملئ البيانات لأستلام الطلب</p>
          <div className="order_menu">
            <Disclosure>
              <div className="details_container_order">
                <div className="details_container_order_info">
                  <DisclosurePanel className="text-gray-500">
                    <p className="order_totalPrice">
                      ملخص السلة:{" "}
                      <span className="order_totalPrice_span">100 ريال</span>
                    </p>
                  </DisclosurePanel>
                  <DisclosurePanel className="text-gray-500">
                    <p className="order_totalPrice">
                      اجمالي الضريبة المضافة 15%{" "}
                      <span className="order_totalPrice_span">15 ريال</span>
                    </p>
                  </DisclosurePanel>
                </div>
                <p className="order_totalPrice totalPrice">
                  الاجمالي : <span> 115 ريال</span>
                </p>
                <span
                  className="coupon_btn"
                  onClick={() => setHandleCoupon(!handleCoupon)}
                >
                  لديك كوبون خصم ؟ *
                </span>
                {handleCoupon ? (
                  <div className="coupon_discount">
                    <input
                      type="text"
                      placeholder="ادخل كود الكوبون"
                      value={inputValue}
                      onChange={handleChange}
                    />
                    <button className={inputValue ? "active" : ""}>
                      تطبيق
                    </button>
                  </div>
                ) : null}
              </div>
              <DisclosureButton className="py-2">
                تفاصيل الفاتورة
              </DisclosureButton>
            </Disclosure>
          </div>
          <div className="order_content">
            <h3>بيانات الطلب</h3>
            <div className="order_content_row">
              <div className="order_input">
                <label htmlFor="city">
                  الاسم: <span>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="order_input">
                <label htmlFor="city">
                  رقم الجوال: <span>*</span>
                </label>
                <div className="phone_div">
                  <span>+966</span>
                  <input
                    type="text"
                    name="city"
                    placeholder="512345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="order_content_row">
              <div className="order_input">
                <label htmlFor="city">
                  المنطقة: <span>*</span>
                </label>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="أختر المنطقة">أختر المنطقة</option>
                  {saudiCities.map((city) => {
                    return (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="order_input">
                <label htmlFor="address">الحي:</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="order_content_row">
              <div className="order_input">
                <label htmlFor="address">الشارع:</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="order_input">
                <label htmlFor="copoun">الكوبون:</label>
                <input
                  type="text"
                  name="copoun"
                  value={copoun}
                  onChange={(e) => setCopoun(e.target.value)}
                />
              </div>
            </div>

            <div className="order_btn">
              {error}
              <button onClick={createOrder}>
                {loading ? <span class="loader"></span> : "ارسال الطلب"}
              </button>
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
                <strong>الاسم</strong>: {order.userName}
              </p>
              <p>
                <strong>رقم الهاتف</strong>: {order.userPhone}
              </p>
              <p>
                <strong>الايميل</strong>: {user.email}
              </p>
              <p>
                <strong>المنطقة</strong>: {order.city}
              </p>
              <p>
                <strong>العنوان</strong>: {order.address}
              </p>
              <p>
                <strong>الكوبون</strong>:{" "}
                {copoun ? copoun : "لم يتم استخدام اي كوبون"}
              </p>
              <p>
                <strong>اجمالي المبلغ</strong>: {order.totalAmount} ريال
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
