import API from "../axios/Api";
import React, { useState, useEffect } from "react";
import { Url } from "../public/untils";
export default function Cocautochuc() {
  const [data, setData] = useState();
  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    try {
      const res = await API.getrOganizationalStructures();
      if (res.status === 200 || res.status === 201) {
        setData(res.data.data.attributes);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };
  const defauTitle = "không có dữ liệu";
  return (
    <div className="cocautochuc">
      <div className="mt-150">
        <div className="container">
          <div className="border-h">
            <ul className="breadcrumb">
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="/#gioithieu">Giới thiệu</a>
              </li>
              <li className="color-red-800s">Cơ cấu tổ chức</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="wide-60 pt-60 mb-pt">
        <div className="container">
          <div className="mb-40 row">
            <div className="col-lg-8 mx-auto ">
              <h3
                className="h3-lg-2 mb-3 font-w-400 text-center color-red-800s viethoa new-font-f"
                style={{
                  fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                }}
              >
                cơ cấu tổ chức
              </h3>
              <p
                className="cocautochuc-gioithieu hover-cocau"
                style={{ textAlign: "justify" }}
              >
                {data ? data?.description : defauTitle}
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-100"
              src={
                data
                  ? Url(data?.img?.data?.attributes?.url)
                  : "./images/cocautochuc.png"
              }
              alt="ảnh cơ cấu"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
