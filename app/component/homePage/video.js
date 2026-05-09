import { useState, useEffect } from "react";
import Slider from "react-slick";
import API from "../../axios/Api";
import { Url } from "../../public/untils";
import ModalPlayVideo from "../modal/modeVideo";

const string = {
  centerMode: false,
  speed: 800,
  slidesToShow: 1,
  dots: false,
  arrows: false,
  autoplay: false,
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
var thumbnail_slider = {
  slidesToShow: 1,
  speed: 1000,
  asNavFor: ".baner-show-3",
  dots: true,
};
export default function Video() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [video, setVideo] = useState();
  const [video2, setVideo2] = useState();

  useEffect(() => {
    logVideo();
  }, []);

  const logVideo = async () => {
    try {
      const res = await API.getVideoHomage();
      if (res.status === 200 || res.status === 201) {
        setVideo(res?.data?.data);
        const newArr = [...res.data?.data?.slice(1), res.data.data[0]];
        setVideo2(newArr);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };

  return (
    <section
      id="slider-2"
      className="bg-02 pb-50 hero-section division position-relative"
    >
      <div className="row">
        <div className="col-lg-6 mx-auto ml-5 offset-lg-1 text-left">
          <a href="https://www.youtube.com/@kinhogroup4883" target="_blank">
            <h3
              className="h3-lg  font-w-400 color-red-800s"
              style={{
                fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                cursor: "pointer",
              }}
            >
              VIDEO
            </h3>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="mb-50  col-md-3 new-px align-self-end">
          <div className="thumbnail_slider-2">
            <Slider
              {...thumbnail_slider}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              swipeToSlide={true}
              focusOnSelect={true}
              dots={true}
            >
              {video?.map((item, idx) => (
                <div key={idx} className="carousel-item ">
                  <img
                    className="w-100 h-210"
                    // src={Url(item?.image?.url)}
                    src={Url(item?.attributes?.image?.data?.attributes?.url)}
                    alt="ảnh silider"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        zIndex: "1031",
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <div style={{ margin: "auto", cursor: "pointer" }}>
                        {innerWidth < 768 ? (
                          <a href={item?.Url} target="_blank">
                            <img
                              src="./images/playVideo.png"
                              className="img-play-video2"
                            />
                          </a>
                        ) : (
                          <img
                            src="./images/playVideo.png"
                            className="img-play-video2"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="col-md-9 px-3 pr-4 mobile-none">
          <div className="baner-show-3">
            <Slider
              {...string}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
              {video2?.map((item, idx) => (
                <div
                  key={idx}
                  className="carousel-item video-container h-600 "
                  style={{ position: "relative" }}
                >
                  <img
                    className="w-100 h-100"
                    // src={Url(item?.image?.url)}
                    src={Url(item?.attributes?.image?.data?.attributes?.url)}
                    alt="ảnh silider"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <ModalPlayVideo url={item?.attributes?.url} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
