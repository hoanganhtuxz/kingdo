import React, { useState, useEffect } from "react";
import { GroupArr, Url } from "../../public/untils";
import Slider from "react-slick";

var string = {
  centerMode: false,
  speed: 800,
  slidesToShow: 5,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 5,
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
        slidesToShow: 2,
      },
    },
  ],
};

export default function Doitac({ partner }) {
  return (
    <div id="doitac">
      <section id="media-1" className="wide-60 media-section division">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              <h3
                className="h3-lg font-w-400 color-red-800s"
                style={{
                  fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                }}
              >
                ĐỐI TÁC
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 col-md-10 offset-xl-1 auto-mx">
              <div id="show-doitac">
                <Slider {...string}>
                  {partner?.map((perent) => (
                    <div
                      className="col-lg-12 px-0 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      {perent?.map((childrenItem) => (
                        <div
                          className="brand-logo img-out wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <a href={childrenItem?.link} className>
                            <img
                              className="img-fluid"
                              src={Url(
                                childrenItem?.attributes?.image?.data
                                  ?.attributes?.url
                              )}
                              alt="brand-logo"
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
