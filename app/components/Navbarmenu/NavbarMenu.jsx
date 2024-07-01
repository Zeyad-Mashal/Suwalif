import Link from "next/link";
import "./NavbarMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const NavbarMenu = () => {
  return (
    <>
      <nav className="navbar_bottom">
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

export default NavbarMenu;
