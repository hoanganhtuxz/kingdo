import Slider from "react-slick";
import { useState, useEffect } from "react";
import API from "../../axios/Api";
import { Url } from "../../public/untils";
var string = {
  centerMode: false,
  speed: 800,
  slidesToShow: 1,
  dots: false,
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
var stringChildren = {
  slidesToShow: 1,
  speed: 1000,
  dots: true,
};

export default function HinhAnh() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [image, setImage] = useState();
  const [image2, setImage2] = useState();

  useEffect(() => {
    logImage();
  }, []);

  const logImage = async () => {
    try {
      const res = await API.getImageHomePage();
      if (res.status === 200 || res.status === 201) {
        setImage(res?.data.data);
        const newArr = [...res.data.data.slice(1), res.data.data[0]];
        setImage2(newArr);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };
  return (
    <section
      id="thuvien"
      className="bg-01  hero-section division position-relative pt-70"
    >
      <div className="row">
        <div className="col-lg-8 offset-lg-1 text-right  mb-10">
          <a
            target="_blank"
            href="https://drive.google.com/drive/u/0/folders/1bvWlXllKjOOkdICrEughjY-LXcyy2mLh"
          >
            <h3
              className="h3-lg mr5 font-w-400 mb-4 color-red-800s"
              style={{
                fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
              }}
            >
              HÌNH ẢNH
            </h3>
          </a>
        </div>
      </div>
      <div className="row ">
        <div className="mb-90 col-md-9 mobile-none ">
          <div className="baner-show-2">
            <Slider
              {...string}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
              {image?.map((item, idx) => (
                <div key={idx} className="carousel-item h-600">
                  <img
                    className="w-100"
                    src={Url(item?.attributes?.image?.data?.attributes?.url)}
                    alt="ảnh silider"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="screenshots-wrap col-md-3 align-self-end new-px">
          <div className="thumbnail_slider-1">
            <Slider
              {...stringChildren}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              swipeToSlide={true}
              focusOnSelect={true}
              dots={true}
            >
              {image2?.map((item, idx) => (
                <div key={idx} className="carousel-item h-210">
                  <img
                    className="w-100 h-100"
                    src={Url(item?.attributes?.image?.data?.attributes?.url)}
                    alt="ảnh silider"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
