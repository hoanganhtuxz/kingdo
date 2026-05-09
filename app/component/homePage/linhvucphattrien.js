import { Url } from "../../public/untils";
import Slider from "react-slick";
import { useState, useEffect } from "react";
var string = {
  centerMode: true,
  speed: 800,
  slidesToShow: 3,
  dots: true,
  arrows: false,
  // autoplay: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 648,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
};

export default function LinhvucPt({ dev_fields }) {
  const [limit, setLimit] = useState();
  useEffect(() => {
    if (dev_fields) {
      return FilterHighLight(dev_fields?.data);
    }
  }, [dev_fields]);

  const FilterHighLight = (data) => {
    let newData = [...data, data[0]];
    newData.shift();
    newData.length = 6;
    setLimit(newData);
  };

  return (
    <section
      id="blog-2"
      className="dautupt-new bg-image-new wide-60 pt-50 blog-section division"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title mb-4">
            <h3
              className="h3-lg font-w-400 color-orgen-800 viethoa"
              style={{
                fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
              }}
            >
              Các lĩnh vực phát triển
            </h3>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-lg-3">
            <a href="linhvucphattrien">
              <div className="blog-post-txt  box-pt-new  text-center cusotm-h5">
                <p className>
                  <img className="img-30 " src="images/Icon-12.png" alt="" />
                </p>
                <p
                  className="post-meta text-center mt-1 color-orgen-800"
                  style={{ textDecoration: "none" }}
                >
                  ĐẦU TƯ VÀ PHÁT TRIỂN <br /> BẨT ĐỘNG SẢN
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 ">
            <a href="quanlivanhangtoanha">
              <div className="blog-post-txt box-pt-new text-center cusotm-h5">
                <p className="text-center">
                  <img className="img-30" src="images/Icon-09.png" alt="" />
                </p>
                <div className="mt-1 mb-4">
                  <p
                    className="post-meta text-center color-orgen-800"
                    style={{ textDecoration: "none" }}
                  >
                    QUẢN LÝ <br /> VẬN HÀNH TOÀ NHÀ
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="khaithachkinhdoanhthuongmai">
              <div className="blog-post-txt  box-pt-new  text-center cusotm-h5">
                <p className="text-center">
                  <img className="img-30 " src="images/Icon-10.png" alt="" />
                </p>
                <div className="mt-1 mb-4">
                  <p
                    className="post-meta text-center mt-1 color-orgen-800"
                    style={{ textDecoration: "none" }}
                  >
                    KHAI THÁC KINH DOANH TT
                    <br />
                    THƯƠNG MẠI VÀ VĂN PHÒNG
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-10 offset-lg-1 section-title mb-4">
            <h3
              className="h3-lg font-w-400 color-orgen-800 viethoa"
              style={{
                fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
              }}
            >
              các dự án tiêu biểu
            </h3>
          </div>
        </div>
        <div
          className="justify-content-center center"
          id="banner-show-phattrien"
        >
          <Slider {...string}>
            {limit?.map((results, idx) => (
              <div key={idx} className="review-1">
                <div className="blog-post ">
                  <div
                    className={`blog-post-img mb-25 position-relative hover-link ${
                      limit?.length <= 3 ? "zoom" : ""
                    } ${limit?.length <= 3 ? (idx === 1 ? "zoom2" : "") : ""}`}
                  >
                    <img
                      className="img-fluid border-2 w-100"
                      style={{ height: "325px", objectFit: "cover" }}
                      src={Url(
                        results?.attributes?.banner?.data?.attributes?.url
                      )}
                      alt="banner"
                    />
                    <div className="position-absolute hover-show-3 w-100 d-flex justify-content-center ">
                      <a
                        href={`chitiet?pk=${results?.id}&role=1`}
                        className="color-orgen-800 bg-red-800s un-text px-3 text-center rounded py-1"
                      >
                        XEM CHI TIẾT
                      </a>
                    </div>
                  </div>
                  <h5 className="h4-sm color-orgen-80 w-50 mx-auto  mt-3 text-center show">
                    <a
                      href={`chitiet?pk=${results?.id}&role=1`}
                      className="color-orgen-800 text-center un-text font-19"
                      style={{
                        fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                        textTransform: "uppercase",
                      }}
                    >
                      {results?.attributes?.title}
                    </a>
                  </h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
