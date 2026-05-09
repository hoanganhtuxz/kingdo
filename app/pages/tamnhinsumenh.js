import API from "../axios/Api";
import React, { useState, useEffect, use } from "react";
import ReactMarkdown from "react-markdown";
import { Url } from "../public/untils";

function DefaultVMison() {
  return (
    <div className="questions-holder">
      <div className="question wow fadeInUp" data-wow-delay="0.3s">
        <div>
          <h5 className="h5-xs ">TẦM NHÌN</h5>
          <p>
            Khát vọng vươn lên, không ngừng phát triển để trở thành doanh nghiệp
            đầu tư và phát triển bất động sản hàng đầu Việt Nam.
          </p>
        </div>
      </div>
      <div className="question wow fadeInUp" data-wow-delay="0.5s">
        <h5 className="h5-xs ">SỨ MỆNH</h5>
        <p>
          Kiến tạo những không gian hoàn hảo với chất lượng vượt trội nhằm mạng
          lại giá trị gia tăng cho khách hàng.
        </p>
      </div>
    </div>
  );
}
function DefaultCvalue() {
  return (
    <div className="questions-holder">
      <div className="question wow fadeInUp" data-wow-delay="0.3s">
        <h5 className="h5-xs">CHẤT LƯỢNG AN TÂM- XỨNG TẦM ĐẲNG CẤP:</h5>
        <p>
          Chất lượng sản phẩm và sự hài lòng của khách hàng chính là yếu tố quan
          trọng dẫn đến sự thành công của chúng tôi.
        </p>
      </div>
      <div className="question wow fadeInUp" data-wow-delay="0.5s">
        <h5 className="h5-xs">ĐỒNG HÀNH TẬN TÂM - KHƠI NGUỒN CHẤT SỐNG:</h5>
        <p>
          Những đóng góp ý kiến, lời động viên, khích lệ của khách hàng là động
          lực xây dựng mọi sản phẩm và kế hoạch hoạt động.
        </p>
      </div>
      <div className="question wow fadeInUp" data-wow-delay="0.7s">
        <h5 className="h5-xs">ĐỔI MỚI SÁNG TẠO - VỮNG BƯỚC THÀNH CÔNG:</h5>
        <p style={{ textAlign: "justify" }}>
          Luôn nỗ lực để tìm ra những yếu tố mới, cách làm mới, dám nghĩ dám làm
          nhằm mang đến không gian lý tưởng nhất cho khách.
        </p>
      </div>
    </div>
  );
}
function Breadcrumb() {
  return (
    <div className="container">
      <div className="pb-10">
        <ul className="breadcrumb">
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li>
            <a href="/#gioithieu">Giới thiệu</a>
          </li>
          <li className="color-red-800s">Tầm nhìn sứ mệnh</li>
        </ul>
      </div>
    </div>
  );
}
export default function TamnhinSumenh() {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await API.getVmison();
      if (res.status === 200 || res.status === 201) {
        setData(res.data.data.attributes);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };
  return (
    <div className="mt-150" id="mission">
      <Breadcrumb />
      <section className="blog-2">
        <img
          className="w-100 "
          src={
            data
              ? Url(data?.img?.data.attributes.url)
              : "images/shutterstock_1025018239_huge_2.jpeg"
          }
        />
      </section>
      <section className=" bg-06">
        <div className="container mt-70">
          <div className="header" style={{ textAlign: "justify" }}>
            <div className="col-lg-10 offset-lg-1 ">
              <div className="row">
                <div className="col-lg-10 offset-lg-1 section-title ">
                  <h3
                    className="h3-lg color-red-800s"
                    style={{
                      fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                    }}
                  >
                    TẦM NHÌN - SỨ MỆNH
                  </h3>
                </div>
              </div>
              <div className="col-lg-10 offset-xl-1 mb-90">
                {data ? (
                  <ReactMarkdown
                    children={data?.Vision_misson}
                    transformImageUri={(uri) =>
                      uri.startsWith("http")
                        ? uri
                        : `${process.env.NEXT_PUBLIC_APP_API_IMG}${uri}`
                    }
                  />
                ) : (
                  <DefaultVMison />
                )}
              </div>
              <div className="row">
                <div className="col-lg-10 offset-lg-1 section-title">
                  <h3
                    className="h3-lg color-red-800s"
                    style={{
                      fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                    }}
                  >
                    GIÁ TRỊ CỐT LÕI
                  </h3>
                </div>
              </div>
              <div className="col-lg-10 offset-xl-1 mb-90">
                {data?.Core_value ? (
                  <ReactMarkdown
                    children={data?.Core_value}
                    transformImageUri={(uri) =>
                      uri.startsWith("http")
                        ? uri
                        : `https://demo-api-kinhdo.aivgroup.vn${uri}`
                    }
                  />
                ) : (
                  <DefaultCvalue />
                )}
              </div>
              <div className="row">
                <div className="col-lg-10 offset-lg-1 section-title">
                  <h3
                    className="h3-lg color-red-800s"
                    style={{
                      fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                    }}
                  >
                    VĂN HÓA DOANH NGHIỆP
                  </h3>
                </div>
              </div>
              <div className="col-lg-10 offset-xl-1 mb-50">
                <div className="questions-holder">
                  <div className="question wow fadeInUp" data-wow-delay="0.3s">
                    {data?.Corporate_culture ? (
                      <ReactMarkdown
                        children={data?.Corporate_culture}
                        transformImageUri={(uri) =>
                          uri.startsWith("http")
                            ? uri
                            : `https://demo-api-kinhdo.aivgroup.vn${uri}`
                        }
                      />
                    ) : (
                      <div>
                        <p style={{ textAlign: "justify" }}>
                          Mọi hoạt động của nhân viên công ty đều hướng đến tinh
                          thần chính trực, chuyên nghiệp. Cán bộ, nhân viên Kinh
                          Do Group luôn cố gắng, nỗ lực học hỏi, sáng tạo, hướng
                          đến mục tiêu mang lại những giá trị tốt nhất cho cộng
                          đồng, cho xã hội. Đoàn kết đồng lòng, tự hào là người
                          của Kinh Do Group.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
