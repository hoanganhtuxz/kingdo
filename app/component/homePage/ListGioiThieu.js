import { Url } from "../../public/untils";

export default function ListGioiThieu(layoutHomePage) {
  return (
    <section className="mt-40  blog-section division bor-b">
      <div className="row mobile-pading">
        <div className="col-md-6 col-lg-3 px-0 ">
          <div className=" wow fadeInUp post-hover" data-wow-delay="0.1s">
            <a href="lichsuhinhthanh">
              <div className="blog-post-img position-relative hover-page-show">
                <img
                  className="img-fluid img-custom-h w-100"
                  src={
                    layoutHomePage?.layoutHomePage?.attributes
                      ?.background_history_begin
                      ? Url(
                          layoutHomePage?.layoutHomePage?.attributes
                            ?.background_history_begin?.data?.attributes?.url
                        )
                      : "https://icon-library.com/images/img-icon/img-icon-0.jpg"
                  }
                  alt="blog-post-image"
                />
              </div>
              <div className="blog-post-txt text-center position-absolute blog-page1 w-100 h-100">
                <div className="mt-50s">
                  <p>
                    <img
                      className
                      src={Url(
                        layoutHomePage?.layoutHomePage?.attributes
                          ?.icon_history_begin?.data?.attributes?.url
                      )}
                      alt=""
                    />
                  </p>
                  <div className="line-w" />
                  <p
                    className="post-meta text-white mt-3"
                    style={{
                      fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                    }}
                  >
                    LỊCH SỬ HÌNH THÀNH
                  </p>
                </div>
              </div>
            </a>
            <div className="blog-post-txt hover-show text-center position-absolute  w-100 h-100">
              <a href="lichsuhinhthanh"></a>
              <a
                href="lichsuhinhthanh"
                className=" color-orgen-800 bg-red-800s p-2 px-4 rounded un-text"
              >
                XEM THÊM
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 px-0 ">
          <div className=" wow fadeInUp post-hover2" data-wow-delay="0.2s">
            <a href="thungo">
              <div className="blog-post-img position-relative hover-page-show">
                <img
                  className="img-fluid img-custom-h w-100"
                  src={
                    layoutHomePage?.layoutHomePage?.attributes
                      ?.background_open_letter
                      ? Url(
                          layoutHomePage?.layoutHomePage?.attributes
                            ?.background_open_letter?.data?.attributes?.url
                        )
                      : "https://icon-library.com/images/img-icon/img-icon-0.jpg"
                  }
                  alt="blog-post-image"
                />
              </div>
              <div className="blog-post-txt text-center position-absolute blog-page2 w-100 h-100">
                <div className="mt-50s">
                  <p>
                    <img
                      src={Url(
                        layoutHomePage?.layoutHomePage?.attributes
                          ?.icon_open_letter?.data?.attributes?.url
                      )}
                      alt=""
                    />
                  </p>
                  <div className="line-w" />
                  <p
                    className="post-meta text-white mt-3"
                    style={{
                      fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                    }}
                  >
                    THƯ NGỎ
                  </p>
                </div>
              </div>
            </a>
            <div className="blog-post-txt hover-show2 text-center position-absolute  w-100 h-100">
              <a href="thungo"></a>
              <a
                href="thungo"
                className=" color-orgen-800 bg-red-800s p-2 px-4 rounded un-text"
              >
                XEM THÊM
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 px-0 ">
          <div className=" wow fadeInUp post-hover3" data-wow-delay="0.3s">
            <a href="tamnhinsumenh">
              <div className="blog-post-img position-relative hover-page-show">
                <img
                  className="img-fluid img-custom-h w-100"
                  src={
                    layoutHomePage?.layoutHomePage?.attributes
                      ?.background_vision_mission_corporate_culture
                      ? Url(
                          layoutHomePage?.layoutHomePage?.attributes
                            ?.background_vision_mission_corporate_culture?.data
                            ?.attributes?.url
                        )
                      : "https://icon-library.com/images/img-icon/img-icon-0.jpg"
                  }
                  alt="blog-post-image"
                />
              </div>
              <div className="blog-post-txt text-center position-absolute blog-page3 w-100 h-100">
                <div className="mt-50s">
                  <p>
                    <img
                      src={Url(
                        layoutHomePage?.layoutHomePage?.attributes
                          ?.icon_vision_mission_corporate_culture?.data
                          ?.attributes?.url
                      )}
                      alt=""
                    />
                  </p>
                  <div className="line-w" />
                  <p
                    className="post-meta text-white mt-3"
                    style={{
                      fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                    }}
                  >
                    TẦM NHÌN - SỨ MỆNH <br /> VĂN HÓA DOANH NGHIỆP
                  </p>
                </div>
              </div>
            </a>
            <div className="blog-post-txt hover-show3 text-center position-absolute  w-100 h-100">
              <a href="tamnhinsumenh"></a>
              <a
                href="tamnhinsumenh"
                className=" color-orgen-800 bg-red-800s p-2 px-4 rounded un-text"
              >
                XEM THÊM
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 px-0">
          <div className=" wow fadeInUp  post-hover4" data-wow-delay="0.4s">
            <a href="cocautochuc">
              <div className="blog-post-img position-relative hover-page-show">
                <img
                  className="img-fluid img-custom-h w-100"
                  src={
                    layoutHomePage?.layoutHomePage?.attributes
                      ?.background_organizational_structure?.data
                      ? Url(
                          layoutHomePage?.layoutHomePage?.attributes
                            ?.background_organizational_structure?.data
                            ?.attributes?.url
                        )
                      : "https://icon-library.com/images/img-icon/img-icon-0.jpg"
                  }
                  alt="blog-post-image"
                />
              </div>
              <div className="blog-post-txt text-center position-absolute blog-page4 w-100 h-100">
                <div className="mt-50s">
                  <p>
                    <img
                      src={Url(
                        layoutHomePage?.layoutHomePage?.attributes
                          ?.icon_organizational_structure?.data?.attributes?.url
                      )}
                      alt=""
                    />
                  </p>
                  <div className="line-w" />
                  <p
                    className="post-meta text-white mt-3"
                    style={{
                      fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                    }}
                  >
                    CƠ CẤU TỔ CHỨC
                  </p>
                </div>
              </div>
            </a>
            <div className="blog-post-txt hover-show4 text-center position-absolute  w-100 h-100">
              <a href="cocautochuc"></a>
              <a
                href="cocautochuc"
                className=" color-orgen-800 bg-red-800s p-2 px-4 rounded un-text"
              >
                XEM THÊM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
