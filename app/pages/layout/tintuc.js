import { Url } from "../../public/untils";
import Slider from "react-slick";
var setTings = {
  speed: 800,
  autoplay: true,
  slidesToShow: 3,
  dots: true,
  arrows: true,
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
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 648,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
};
export default function Tintuc({ article }) {
  return (
    <>
      <section
        id="blog-1-tin-tin"
        className="wide-60 blog-section division bg-03 "
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              <a href="tintuc">
                <h3
                  className="h3-lg-2 font-w-400 color-orgen-800 viethoa"
                  style={{
                    fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                  }}
                >
                  Tin tức
                </h3>
              </a>
            </div>
          </div>
          {article?.data?.length <= 2 ? (
            <div className="row">
              {article?.data?.map((item) => (
                <div
                  className="col-md-4 col-lg-4 mb-50"
                  key={item?.attributes?.id}
                >
                  <a href={`/chitiettintuc?id=${item?.id}`}>
                    <div
                      className="blog-post mb-0 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div
                        className="blog-post-img mb-25 h-450 position-relative"
                        style={{ height: "280px" }}
                      >
                        <img
                          className="img-fluid w-100 border-all h-100 cover"
                          src={Url(
                            item?.attributes?.image?.data?.attributes?.url
                          )}
                          alt="blog-post-image"
                        />
                      </div>
                    </div>
                    <div className="blog-post-txt text-white">
                      <p className="text-two " style={{ fontWeight: "600" }}>
                        {item?.attributes.title}
                      </p>
                      <div
                        className="text-left color-orgen-800"
                        style={{
                          fontWeight: "600",
                          borderBottom: "1px solid #E5C3A1",
                          width: "90px",
                        }}
                      >
                        Xem thêm
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="baner-show-4">
              <Slider {...setTings}>
                {article?.data?.map((item) => (
                  <div
                    className="col-md-12 col-lg-12 mb-50"
                    key={item?.attributes?.id}
                  >
                    <a href={`/chitiettintuc?id=${item?.id}`}>
                      <div
                        className="blog-post mb-0 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div
                          className="blog-post-img mb-25 h-450 position-relative"
                          style={{ height: "280px" }}
                        >
                          <img
                            className="img-fluid w-100 border-all h-100 cover"
                            src={Url(
                              item?.attributes?.image?.data?.attributes?.url
                            )}
                            alt="blog-post-image"
                          />
                        </div>
                      </div>
                      <div className="blog-post-txt text-white">
                        <p className="text-two " style={{ fontWeight: "600" }}>
                          {item?.attributes.title}
                        </p>
                        <div
                          className="text-left color-orgen-800"
                          style={{
                            fontWeight: "600",
                            borderBottom: "1px solid #E5C3A1",
                            width: "100px",
                          }}
                        >
                          Xem thêm
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
