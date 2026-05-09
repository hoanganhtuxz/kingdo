import API from "../axios/Api";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Url } from "../public/untils";

export default function Thungo() {
  const [data, setData] = useState();
  useEffect(() => {
    getThungo();
  }, []);
  const getThungo = async () => {
    try {
      const res = await API.getThungoPage();
      if (res.status === 200 || res.status === 201) {
        setData(res.data.data.attributes);
      }
    } catch (error) {
      console.log("this errr", error);
    }
  };

  function createMarkup(render) {
    return { __html: render };
  }
  return (
    <div>
      <div className="container" style={{ marginTop: "130px" }}>
        <ul className="breadcrumb">
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li>
            <a href="/#gioithieu">Giới thiệu</a>
          </li>
          <li className="color-red-800s">Thư ngỏ</li>
        </ul>
      </div>
      <section className="blog-2">
        <img
          className="w-100 "
          src={
            data
              ? Url(data?.img?.data?.attributes?.url)
              : "images/shutterstock_171336191_huge2.jpeg"
          }
        />
      </section>
      <section
        id="media-1"
        className="wide-60 media-section division bg-05 mt-5"
        style={{ textAlign: "justify !important" }}
      >
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-10 offset-lg-1 section-title">
              <h3
                className="h3-lg font-w-500 color-red-800s"
                style={{
                  fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                }}
              >
                THƯ NGỎ
              </h3>
            </div>
          </div>
          {data ? (
            <div
              className="row flex-wrap px-40 justify-content-center mx-0 wow fadeInUp w-100 gx-5"
              data-wow-delay="0.3s"
            >
              <div className="col-md-5 col-sm-12 ">
                <div
                  className="confix-text"
                  key={2}
                  dangerouslySetInnerHTML={createMarkup(data?.content)}
                />
              </div>
              <div className="col-md-5 col-sm-12 d-flex align-items-end flex-column">
                <div
                  className="confix-text"
                  key={3}
                  dangerouslySetInnerHTML={createMarkup(data?.content2)}
                />
                <p
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    fontWeight: "bold",
                  }}
                >
                  {data?.author}
                </p>
              </div>
            </div>
          ) : (
            <div
              className="row flex-wrap px-40 justify-content-center mx-0 wow fadeInUp w-100 gx-5"
              data-wow-delay="0.3s"
            >
              Không có nội dung
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
