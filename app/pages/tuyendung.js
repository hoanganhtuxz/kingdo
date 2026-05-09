import React, { useState, useEffect } from "react";
import { GroupArr, Url } from "../public/untils";
import API from "../axios/Api";
import Slider from "react-slick";
import dayjs from "dayjs";

var string = {
  speed: 800,
  slidesToShow: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
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
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
};

export default function Tuyendung() {
  const [dataRecruit, setDataRecruit] = useState();

  useEffect(() => {
    getAllRecruit();
  }, []);

  const getAllRecruit = async () => {
    try {
      const res = await API.getAllRecruit();
      if (res.status === 200 || res.status === 201) {
        setDataRecruit(GroupArr(res.data.data, 6));
      }
    } catch (err) {
      console.log("this error", err);
    }
  };
  const TimeNow = (dateTime) => {
    const start = new Date(dateTime);
    const millis = Date.now() - start;
    const countSeconds = Math.floor(millis / 1000);
    if (countSeconds > 691200) return false;
    return true;
  };

  return (
    <div id="tuyendung-id">
      <div className="mt-150">
        <div className="container">
          <div className="border-h">
            <ul className="breadcrumb">
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li className="color-red-800s">Tuyển dụng</li>
            </ul>
          </div>
        </div>
      </div>

      <section id="faqs-1" className="wide-100 faqs-section division">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto section-title mb-30">
              <h3 className="h3-lg-2 font-w-400 color-red-800s viethoa new-font-f">
                Các vị trí tuyển dụng
              </h3>
            </div>
          </div>
          <div className="box-ung-tuyen" id="banner-show-tuyen-dung">
            <Slider {...string}>
              {dataRecruit?.map((row, idx) => (
                <div className="row d-flex flex-wrap cusxtom" key={idx}>
                  {row?.map((item) => (
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div
                        className="blog-post wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div
                          className="blog-post-img mb-25 hover-show-td"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="img-fluid h-227px"
                            src={
                              item?.attributes?.image?.data
                                ? Url(
                                    item?.attributes?.image?.data?.attributes
                                      ?.url
                                  )
                                : "https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
                            }
                            alt="blog-post-image"
                          />

                          {item?.attributes?.hightlight ? (
                            <p className="box-new-post">Mới</p>
                          ) : null}

                          <div className=" hover-show text-center position-absolute  w-100 h-100">
                            <a
                              href={`chitiettuyendung?id=${item?.id}`}
                              className=" color-orgen-800 bg-red-800s p-2 px-4 rounded un-text"
                            >
                              XEM THÊM
                            </a>
                          </div>
                        </div>
                        <div className="blog-post-txt">
                          {/* <div className="d-flex flex-wrap custom-text-a">
                            <a className="viethoa color-red-800s border-all-red  font-13px px-3 py-1 rounded">
                              ♡ Lưu tin
                            </a>
                            <a className="viethoa color-red-800s border-all-red font-13px px-3 py-1 ml-3 rounded">
                              {" "}
                              <span className="font-weight-bold text-lowercase">
                                ｆ
                              </span>
                              share
                            </a>
                          </div> */}

                          <h5 className="h5-sm mt-4">
                            <a href={`chitiettuyendung?id=${item?.id}`}>
                              {item?.attributes?.title}
                            </a>
                          </h5>
                          <p className="time-line">
                            Ngày đăng:{" "}
                            {dayjs(item?.attributes?.createdAt).format(
                              "DD-MM-YYYY"
                            )}
                          </p>
                          <p className="time-line">
                            Hạn ứng tuyển:{" "}
                            {dayjs(item?.attributes?.over_date).format(
                              "DD-MM-YYYY"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4329047707524!2d105.85522341492924!3d21.01535759361152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf3ca65c3eb%3A0xfb37d4f4be478c30!2zOTMgUC4gTMOyIMSQw7pjLCBQaOG6oW0gxJDDrG5oIEjhu5UsIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1680843150471!5m2!1svi!2s"
            className="w-100"
            height={400}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.98038436799!2d105.81945407847769!3d21.02277876326611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1665731845064!5m2!1svi!2s"
            className="w-100"
            height={400}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          /> */}
        </div>
      </section>
    </div>
  );
}
