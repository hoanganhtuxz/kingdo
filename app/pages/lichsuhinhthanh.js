import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { GroupArr, Url } from "../public/untils";
import API from "../axios/Api";
import ModalShowImages from "../component/modal/modalShowImage";

export default function LichSuhinhthanh() {
  const [data, setData] = useState();
  useEffect(() => {
    handleLog();
  }, []);
  const handleLog = async () => {
    try {
      const res = await API.LogHistory();
      if (res.status === 200 || res.status === 201) {
        // setData(GroupArr(res.data, 6));
        setData(res?.data?.data.attributes.image.data.attributes);
      }
    } catch (err) {
      console.log("this err", err);
    }
  };
  return (
    <div>
      <div className="mt-150">
        <div className="container">
          <div className="pb-10">
            <ul className="breadcrumb">
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="/#gioithieu">Giới thiệu</a>
              </li>
              <li className="color-red-800s">Lịch sử hình thành</li>
            </ul>
          </div>
        </div>
      </div>
      <section id="blog-1" className="wide-60 pt-40 mb-pt ">
        {/* bg-05/ */}
        <div className="container">
          <div className="mb-30">
            <h3
              className="h3-lg-2 text-center font-w-400 color-red-800s viethoa new-font-f"
              style={{
                fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
              }}
            >
              các cột mốc phát triển
            </h3>
          </div>
          <div className="tt position-relative">
            <div style={{ cursor: "pointer" }}>
              {/* <img
                className="w-100"
                src={Url(data?.url)}
                alt="anh lich su hinh thanh"
              /> */}
              <ModalShowImages file={Url(data?.url)} />
            </div>
            {/* <Slider {...setTings}>
              {data?.map((row) => (
                <section class="ps-timeline-sec">
                  <div class="container">
                    <ol class="ps-timeline">
                      {row?.map((item, idx) =>
                        idx % 2 === 0 ? (
                          <ItemTop data={item} key={idx} />
                        ) : (
                          <ItemBot data={item} key={idx} />
                        )
                      )}
                    </ol>
                  </div>
                </section>
              ))}
            </Slider> */}
          </div>
        </div>
      </section>
    </div>
  );
}
