import React, { useState, useEffect } from "react";
import { GroupArr, Url } from "../public/untils";
import API from "../axios/Api";
import dayjs from "dayjs";
import Head from "next/head";
import Slider from "react-slick";

var setTings = {
  speed: 800,
  // autoplay: true,
  slidesToShow: 1,
  dots: true,
  arrows: false,
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
export default function Tintuc() {
  const [article, setArticle] = useState();
  const [articleLike, setArticleLike] = useState();
  useEffect(() => {
    getArticele();
  }, []);
  const getArticele = async () => {
    const res = await API.getArticele();
    try {
      if (res.status === 200 || res.status === 201) {
        setArticle(res.data);
        FilterHighlisht(res.data.data);
        console.log("ressss", res.data.data);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };

  const FilterHighlisht = (data) => {
    const total = data.filter((item) => item.attributes.highlight === true);
    if (total.length !== 0) {
      setArticleLike(GroupArr(total, 2));
    }
  };
  const configDate = (data) => {
    if (data) {
      const a = new Date(data);
      return a;
    }
  };
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="mt-150">
        <div className="container">
          <div className="border-h">
            <ul className="breadcrumb">
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li className="color-red-800s">Tin tức</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mb-100 wide-100 pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="mb-5">
                <h3
                  className="h3-lg-2 font-w-400  color-red-800s text-center new-font-f"
                  style={{ fontSize: "38px" }}
                >
                  Tin tức nổi bật
                </h3>
              </div>
              <div className="tt">
                <Slider {...setTings}>
                  {articleLike?.map((row, idx) => (
                    <div key={idx} className="new-box-tin">
                      {row?.map((item, idx) => (
                        <div className="mb-100 " key={idx}>
                          <div className="blog-post  position-relative">
                            <div className="blog-post-img mb-25 h-450">
                              <a href={`/chitiettintuc?id=${item?.id}`}>
                                <img
                                  className="img-fluid w-100 border-all h-100 cover"
                                  src={Url(
                                    item?.attributes?.image?.data?.attributes
                                      ?.url
                                  )}
                                  alt="blog-post-image"
                                />
                              </a>
                            </div>
                            <div className="position-absolute border-l-red child-box">
                              <h5
                                className="h5-sm"
                                style={{ fontSize: "15px", color: "#7C1315" }}
                              >
                                {item?.time}
                              </h5>
                              <a href={`/chitiettintuc?id=${item?.id}`}>
                                <p className="text-two2">
                                  {item?.attributes?.title}
                                </p>
                              </a>
                              <div className="text-right">
                                <a
                                  href={`/chitiettintuc?id=${item?.id}`}
                                  className="text-right un-text2 color-red-800s pb-1 border-b-red"
                                  style={{
                                    color: "#7C1315",
                                    fontWeight: "500",
                                  }}
                                >
                                  Xem thêm
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 mobi-top">
              <div className="mb-5">
                <h3
                  className="h3-lg-2 font-w-400 color-red-800s text-center new-font-f"
                  style={{ fontSize: "38px" }}
                >
                  Tin tức & bài viết
                </h3>
              </div>
              <div className="croll-tintuc">
                {article?.data?.map((item) => (
                  <div className="row">
                    <div className="fbox-2">
                      <div className="col-lg-5 ">
                        <a href={`/chitiettintuc?id=${item?.id}`}>
                          <img
                            className="w-100"
                            style={{ border: "3px solid #E5C3A1" }}
                            src={Url(
                              item?.attributes?.image?.data?.attributes?.url
                            )}
                            alt="feature-icon"
                          />
                        </a>
                      </div>
                      <div className="fbox-2-txt col-lg-7">
                        <h5
                          className="h5-sm"
                          style={{ fontSize: "15px", color: "#7C1315" }}
                        >
                          {dayjs(configDate(item?.attributes?.publishedAt)).get(
                            "date"
                          )}{" "}
                          tháng{" "}
                          {dayjs(item?.attributes?.publishedAt).get("month") +
                            1}
                          ,{" "}
                          {dayjs(configDate(item?.attributes?.publishedAt)).get(
                            "year"
                          )}
                        </h5>
                        <a href={`/chitiettintuc?id=${item?.id}`}>
                          <p
                            className="text-two2"
                            style={{ textAlign: "justify" }}
                          >
                            {item?.attributes?.title}
                          </p>
                        </a>

                        <div className="mt-3">
                          <a
                            href={`/chitiettintuc?id=${item?.id}`}
                            style={{ color: "#7C1315", fontWeight: "500" }}
                            className=" un-text2 color-red-800s  border-b-red"
                          >
                            Xem thêm
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
