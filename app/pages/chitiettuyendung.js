import React, { useState, useEffect } from "react";
import axios from "axios";
import { GroupArr } from "../public/untils";
import ModalCreate from "../component/modal/modalRegister";
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";
import API from "../axios/Api";
import { Url } from "../public/untils";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Alert from "../component/modal/alert";
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

export default function ChitietTuyendung() {
  const [dataRecruit, setDataRecruit] = useState();
  const [detail, setDetail] = useState();
  const { query } = useRouter();
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState();
  const [alert, setAlert] = useState(false);
  const [loader, setLoader] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  // lay thong tin chi tiet cua 1 tin tuyen dung
  useEffect(() => {
    if (query.id) {
      getDetail(query.id);
    }
  }, [query.id]);

  const getDetail = async (id) => {
    try {
      const res = await API.RecutDetail(id);
      if (res.status === 200 || res.status === 201) {
        setDetail(res.data.data.attributes);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };

  // lay danh sach tin tuyen dung
  useEffect(() => {
    getAllRecruit();
  }, []);
  const getAllRecruit = async () => {
    try {
      const res = await API.getAllRecruit();
      if (res.status === 200 || res.status === 201) {
        setDataRecruit(GroupArr(res.data.data, 3));
      }
    } catch (err) {
      console.log("this error", err);
    }
  };
  // ham dem seconds . neu thoi gian qua 1 tuan thi > 1 tuan = false  va nguoc lai

  const TimeNow = (dateTime) => {
    const start = new Date(dateTime);
    const millis = Date.now() - start;
    const countSeconds = Math.floor(millis / 1000);
    if (countSeconds > 691200) return false;
    return true;
  };

  const submitRecuilt = async (DataCandidate, event) => {
    event.preventDefault();
    setLoader(true);
    var data = new FormData();
    data.append("files.cv_candidate", file);
    data.append("data", JSON.stringify(DataCandidate));
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_APP_API}/candidates`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setAlert(true);
        setLoader(false);
        setIsOpen(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (alert) {
      const time = setTimeout(() => {
        setAlert(false);
      }, 2000);
      return () => clearTimeout(time);
    }
  });

  return (
    <div className="detail-td">
      <div className="mt-150">
        <div className="container">
          <div className="border-h">
            <ul className="breadcrumb">
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="tuyendung">Tuyển dụng</a>
              </li>
              <li className="color-red-800s">{detail?.title}</li>
            </ul>
          </div>
        </div>
      </div>
      {alert ? <Alert title="Ứng tuyển thành công" /> : null}
      <section
        id="faqs-1"
        className="wide-100 pt-50 faqs-section division bg-05"
      >
        <div className="container detail-txt">
          <div className="row">
            <div className="col-xl-8 mx-auto ">
              <div id="accordion" role="tablist">
                <div className="card wow fadeInUp" data-wow-delay="0.2s">
                  <div className="card-header" role="tab" id="headingOne">
                    <h5 className="h5-sm new-font-f custom-text-">
                      {detail?.title}
                    </h5>
                  </div>
                  <div>
                    <div
                      className="d-flex align-items-center mb-2"
                      style={{ color: "gray", fontStyle: "italic" }}
                    >
                      <i class="fa-regular fa-clock mr-2"></i>
                      <p className="mb-0">
                        Thời gian ứng tuyển:{" "}
                        {dayjs(detail?.over_date).format("DD-MM-YYYY")}
                      </p>
                    </div>
                    <div className="">
                      {/* card-body */}
                      <div className="d-flex flex-wrap">
                        <ModalCreate
                          loader={loader}
                          alert={alert}
                          file={file}
                          setFile={setFile}
                          register={register}
                          submitRecuilt={submitRecuilt}
                          handleSubmit={handleSubmit}
                          modalIsOpen={modalIsOpen}
                          setIsOpen={setIsOpen}
                        />
                        {/* <a className="viethoa color-red-800s border-all-red font-13px px-3 py-2 ml-3 rounded">
                          ♡ Lưu tin
                        </a>
                        <a className="viethoa color-red-800s border-all-red font-13px px-3 py-2 ml-3 mobi rounded">
                          {" "}
                          <span className="font-weight-bold text-lowercase ">
                            ｆ
                          </span>
                          share
                        </a> */}
                      </div>
                      {detail ? (
                        <div className="mt-5 text-custom custom-ul-li-initial">
                          <div
                            key={2}
                            dangerouslySetInnerHTML={{
                              __html: detail?.content,
                            }}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto section-title mb-30">
              <h3 className="h3-lg-2 font-w-400 color-red-800s viethoa new-font-f">
                Các vị trí cần tuyển
              </h3>
            </div>
          </div>
          <div className="box-ung-tuyen" id="banner-show-tuyen-dung">
            <Slider {...string}>
              {dataRecruit?.map((row, idx) => (
                <div className="row d-flex flex-wrap" key={idx}>
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
                                    item?.attributes?.image?.data.attributes.url
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
                              shera
                            </a>
                          </div> */}

                          <h5 className="h5-sm mt-4">
                            <a href={`chitiettuyendung?id=${item?.id}`}>
                              {item?.attributes?.title}
                            </a>
                          </h5>
                          <p className="time-line">
                            Ngày đăng:{" "}
                            {dayjs(item?.created_at).format("YYYY-MM-DD")}
                          </p>
                          <p className="time-line">
                            Hạn ứng tuyển: {item?.attributes?.over_date}
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
    </div>
  );
}
