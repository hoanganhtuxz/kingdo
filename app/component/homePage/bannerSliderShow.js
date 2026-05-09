import { Url } from "../../public/untils";
import Slider from "react-slick";
var string = {
  speed: 800,
  autoplay: true,
  slidesToShow: 1,
  dots: true,
  arrows: false,
  fade: true,
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
export default function BannerSliderShow({ header }) {
  return (
    <div>
      <section
        id="hero-9"
        className="bg-scroll hero-section division position-relative"
      >
        <div className="screenshots-wrap">
          <div className="baner-show">
            <Slider {...string}>
              {header?.map((item) => (
                <div className="carousel-item">
                  <img className="w-100" src={Url(item?.attributes?.url)} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
