import Link from "next/link";
import { Url } from "../../public/untils";

export default function Header({ logo }) {
  return (
    <header id="header" className="header">
      <nav className="navbar fixed-top navbar-expand-md hover-menu navbar-light bg-tra white-scroll">
        <div className="container">
          <a href="/" className="navbar-brand logo-black" id="logo-render">
            <img
              className="w-178-h-50"
              src={logo ? Url(logo?.url) : "./images/logo-red.png"}
              alt="header-logo"
            ></img>
          </a>
          <label
            htmlFor="tab-mobile"
            className="navbar-toggler mobile-on"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ width: "30px" }}
          >
            <span className="navbar-bar-icon">
              <i className="fa-solid fa-bars"></i>
            </span>
          </label>
          <div id="navbarContent" className="collapse pc-on navbar-collapse">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle color-red-800s"
                  id="DropdownMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Ngôn ngữ
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="DropdownMenu"
                  style={{ maxWidth: "100px", minWidth: "0px", left: "20px" }}
                >
                  <li>
                    <a className="dropdown-item" href="">
                      <img
                        style={{ width: "40px", borderRadius: "5px" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/250px-Flag_of_Vietnam.svg.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href=""
                      style={{ borderBottom: "none !important" }}
                    >
                      <img
                        style={{ width: "40px", borderRadius: "5px" }}
                        src="https://www.postalwar.info/_assets/img/en_icon.png"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item nl-simple color-red-800s custom-header"
                id="button-menu"
                style={{ cursor: "pointer" }}
              >
                <span
                  className="nav-link dropdown-toggle"
                  id="DropdownMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-bars " />
                </span>
                <ul className="dropdown-menu" aria-labelledby="DropdownMenu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#gioithieu">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#blog-2">
                      Dự án
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#doitac">
                      Đối tác
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="tuyendung">
                      Tuyển dụng
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#blog-1-tin-tin">
                      Tin tức
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#thuvien">
                      Thư viện
                    </a>
                  </li>
                  <li className="custom-border-none">
                    <a
                      className="dropdown-item"
                      style={{ borderBottom: "none" }}
                      href="#footer"
                    >
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <input
        type="checkbox"
        hidden
        id="tab-mobile"
        className="nav-input-mobile"
      />
      {/* overlay */}
      <label htmlFor="tab-mobile" className="overlay" />
      {/* nav mobile */}

      <nav className="mobile-menu mobile-on navbar  navbar-expand-md hover-menu navbar-dark">
        <ul className="navbar-nav ml-auto">
          <label
            htmlFor="tab-mobile"
            className="close-tab-moblie"
            style={{ position: "absolute", right: "20px", top: "30px" }}
          >
            <i style={{ fontSize: "30px" }} className="fa-solid fa-close"></i>
          </label>
          <li
            className="nav-item py-4 nl-simple "
            style={{ borderBottom: "0.1px solid gray" }}
          >
            <a className="new-mt" to="/about_us">
              Trang chủ
            </a>
          </li>
          <li
            className="nav-item py-4 nl-simple"
            style={{ borderBottom: "0.1px solid gray" }}
          >
            <a className="" href="/#gioithieu">
              Giới thiệu
            </a>
          </li>
          <li
            className="nav-item py-4 nl-simple"
            style={{ borderBottom: "0.1px solid gray" }}
          >
            <a className="" href="/#blog-2">
              Dự án
            </a>
          </li>
          <li
            className="nav-item py-4 nl-simple"
            style={{ borderBottom: "0.1px solid gray" }}
          >
            <a className="" href="/#doitac">
              Đối tác
            </a>
          </li>
          <li
            className="nav-item py-4 nl-simple"
            style={{ borderBottom: "0.1px solid gray" }}
          >
            <a className="" href="tuyendung">
              Tuyển dụng
            </a>
          </li>
          <li
            className="nav-item py-4 nl-simple"
            style={{ borderBottom: "0.1px solid gray" }}
          >
            <a className="" href="#blog-1-tin-tin">
              Tin tức
            </a>
          </li>

          <li
            className="nav-item py-4 nl-simple"
            style={{ borderBottom: "0.1px solid gray" }}
          >
            <a className="" href="/#thuvien">
              Thư viện
            </a>
          </li>
          <li
            className="nav-item py-4 nl-simple"
            style={{ borderBottom: "0.1px solid gray" }}
          >
            <a className="" href="#footer">
              Liên hệ
            </a>
          </li>
          <li className="nav-item py-4 dropdown">
            <div
              className=" dropdown-toggle"
              id="DropdownMenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Ngôn ngữ
            </div>
            <ul className="dropdown-menu ml-1" aria-labelledby="DropdownMenu">
              <li>
                <a className="dropdown-item">Tiếng Việt</a>
              </li>
              <li>
                <a to="/vnalert-province" className="dropdown-item">
                  Tiếng Anh
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
