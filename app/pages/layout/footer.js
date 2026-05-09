import { Url } from "../../public/untils";
export default function Footer({ logo, data }) {
  return (
    <div className="">
      <footer id="footer" className="pb-4 pt-20 bg-bottom footer division">
        <div className="container center-mobile">
          <div className="col-md-8 col-lg-8 mx-auto text-center">
            <div className="footer-info mb-40">
              <img
                className="footer-logo"
                src={Url(logo?.url)}
                width={120}
                height={30}
                alt="footer-logo"
              />
            </div>
            <div>
              <h5
                className="h5-sm color-orgen-800 font-17px"
                style={{ fontFamily: '"Montserrat-SemiBold"' }}
              >
                {data?.title ? data?.title : " TẬP ĐOÀN ĐẦU TƯ KINH ĐÔ"}
              </h5>
              <p className="text-white font-15px">
                <i
                  className="fa-solid fa-location-dot mr-1"
                  style={{ width: "15px", height: "15px" }}
                />
                {data?.location
                  ? data?.location
                  : "  93 Lò Đúc, quận Hai Bà Trưng, Hà Nội"}
              </p>
              <p className="text-white font-15px">
                <img
                  style={{ width: "15px", height: "15px" }}
                  className="mr-1"
                  src="images/iphone.png"
                  alt=""
                />
                {data?.contact
                  ? data?.contact
                  : "(+84) 439 72 19 38 - CSKH (+84) 439 72 19 38 - Kinh Doanh (+84) 439 72 19 38"}
              </p>
            </div>
            {/* <div>
              <h5
                className="h5-sm color-orgen-800 font-17px"
                style={{ fontFamily: '"Montserrat-SemiBold"' }}
              >
                TẬP ĐOÀN ĐẦU TƯ KINH ĐÔ"
              </h5>
              <p className="text-white font-15px">
                <i
                  className="fa-solid fa-location-dot mr-1"
                  style={{ width: "15px", height: "15px" }}
                />
                93 Lò Đúc, quận Hai Bà Trưng, Hà Nội
              </p>
              <p className="text-white font-15px">
                <img
                  style={{ width: "15px", height: "15px" }}
                  className="mr-1"
                  src="images/iphone.png"
                  alt=""
                />
                (+84) 439 72 19 38 - CSKH (+84) 439 72 19 38 - Kinh Doanh (+84)
                439 72 19 38"
              </p>
            </div> */}
          </div>
          <div
            className="row justify-content-center mt-5"
            style={{ paddingBottom: "6rem" }}
          >
            <div className="col-md-2   border-right  col-lg-2">
              <div className="footer-links ">
                <ul className="foo-links clearfix">
                  <li>
                    <p>
                      <a href="/">Trang chủ</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="/#gioithieu">Giới thiệu</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="/#blog-2">Dự án</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-lg-3  border-right">
              <div className="footer-links d-flex">
                <ul className="foo-links clearfix mx-auto">
                  <li>
                    <p>
                      <a href="/#doitac">Đối tác</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="tuyendung">Tuyển dụng</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="/#thuvien">Thư viện</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 d-flex col-lg-2 justify-content-end  f-mobi">
              <div className="footer-links">
                <ul className="foo-links clearfix text-white">
                  <li>
                    <p>
                      <a href="/tintuc">Tin tức</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#footer">Liên hệ</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Chính sách</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="bottom-footer pb-5 -mt-new"
        style={{ backgroundColor: "#7C1315" }}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="footer-copyright text-white text-center">
              <p className="p-sm">
                © Bản quyền thuộc về Tập đoàn Đầu tư Kinh Đô
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
