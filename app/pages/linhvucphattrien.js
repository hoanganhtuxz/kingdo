import ListChonse from "../component/linhvucpt/listChonse";
import API from "../axios/Api";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Url } from "../public/untils";
export default function PhatTrien() {
  const [data, setData] = useState();

  useEffect(() => {
    get();
  }, []);
  const get = async () => {
    try {
      const res = await API.developmentFields();
      if (res.status === 200 || res.status === 201) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };

  return (
    <div>
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
              <li className="color-red-800s">Các lĩnh vực phát triển</li>
            </ul>
          </div>
          <ListChonse active="dautupt" />
        </div>
      </div>
      {data?.map((item, idx) =>
        idx % 2 === 0 ? (
          <>
            <section
              key={idx}
              id="info-1"
              className="info-1-row pt-90 info-section division"
            >
              <div className="container border-b-red">
                <div className="row d-flex align-items-center conver-flex-mb">
                  <div className="col-md-5">
                    <div
                      className="txt-block mb-40 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <h3 className="new-font-f font-fa">
                        <ReactMarkdown
                          children={item?.attributes?.Introduce_title}
                        />
                      </h3>

                      <ul className="txt-list mb-35 mt-5">
                        {item?.attributes?.company ? (
                          <li className="font-15pxt d-flex align-items-center mb-4">
                            <img
                              className="mr-4"
                              width={20}
                              height={20}
                              src="./images/Icon-01.png"
                              alt=""
                            />
                            <span className="font-15px">
                              <ReactMarkdown
                                children={item?.attributes?.company}
                              />
                            </span>
                          </li>
                        ) : null}
                        {item?.attributes?.address ? (
                          <li className="font-15pxt d-flex align-items-center mb-4">
                            <img
                              className="mr-4"
                              width={20}
                              height={20}
                              src="./images/Icon-04.png"
                              alt=""
                            />
                            <span className="font-15px">
                              {" "}
                              <ReactMarkdown
                                children={item?.attributes?.address}
                              />
                            </span>
                          </li>
                        ) : null}
                        {item?.attributes?.area ? (
                          <li className="font-15pxt d-flex align-items-center mb-4">
                            <img
                              className="mr-4"
                              width={20}
                              height={20}
                              src="./images/Icon-03.png"
                              alt=""
                            />
                            <span className="font-15px">
                              <ReactMarkdown
                                children={item?.attributes?.area}
                              />
                            </span>
                          </li>
                        ) : null}
                        {item?.attributes?.scale ? (
                          <li className="font-15pxt d-flex align-items-center">
                            <img
                              className="mr-4"
                              width={20}
                              height={20}
                              src="./images/Icon-02.png"
                              alt=""
                            />
                            <span className="font-15px">
                              <ReactMarkdown
                                children={item?.attributes?.scale}
                              />
                            </span>
                          </li>
                        ) : null}
                      </ul>
                      <div className="ml-5">
                        <a
                          // href={`chitiet?pk=${item?.id}`}
                          href={`chitiet?pk=${item?.id}&role=1`}
                          className="text-white py-1 px-4 bg-red-800s text-center rounded font-custom-mobile"
                        >
                          XEM THÊM
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="w-100 position-relative ">
                      <div
                        className="info-10-img mb-40 wow fadeInUp h-500"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.8s"
                      >
                        <img
                          className="img-fluid h-100"
                          src={Url(
                            item?.attributes?.banner?.data?.attributes?.url
                          )}
                          alt="banner"
                        />
                        <div className="position-absolute top-left-0 p-4 h-100 w-50 bg-linear-left">
                          <div style={{ width: "150px" }}>
                            <img
                              className="w-100"
                              src={Url(
                                item?.attributes?.logo?.data?.attributes?.url
                              )}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section
              key={idx}
              id="info-1"
              className="info-1-row px-20 max-w pt-40 info-section division max-1140"
            >
              <div className>
                <div className="row d-flex align-items-center ">
                  <div className="col-md-7 ">
                    <div className="w-100 position-relative ">
                      <div
                        className="info-10-img mb-40 wow fadeInUp h-500"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.8s"
                      >
                        <img
                          className="img-fluid h-100 w-100"
                          src={Url(
                            item?.attributes?.banner?.data?.attributes?.url
                          )}
                          alt="info-image"
                        />
                        <div className="position-absolute top-left-0 p-4 h-100 w-50 bg-linear-left">
                          <div style={{ width: "150px" }}>
                            <img
                              className="w-100"
                              src={Url(
                                item?.attributes?.logo?.data?.attributes?.url
                              )}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div
                      className="txt-block mb-40 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <h3 className="new-font-f font-fa">
                        <ReactMarkdown
                          children={item?.attributes?.Introduce_title}
                        />
                      </h3>

                      <ul className="txt-list mb-35 mt-5">
                        {item?.attributes?.company ? (
                          <li className="font-15pxt d-flex align-items-center mb-4">
                            <img
                              className="mr-4"
                              width={20}
                              height={20}
                              src="./images/Icon-01.png"
                              alt=""
                            />
                            <span className="font-15px">
                              <ReactMarkdown
                                children={item?.attributes?.company}
                              />
                            </span>
                          </li>
                        ) : null}
                        {item?.attributes?.address ? (
                          <li className="font-15pxt d-flex align-items-center mb-4">
                            <img
                              className="mr-4"
                              width={20}
                              height={20}
                              src="./images/Icon-04.png"
                              alt=""
                            />
                            <span className="font-15px">
                              <ReactMarkdown
                                children={item?.attributes?.address}
                              />
                            </span>
                          </li>
                        ) : null}
                        {item?.attributes?.area ? (
                          <li className="font-15pxt d-flex align-items-center mb-4">
                            <img
                              className="mr-4"
                              width={20}
                              height={20}
                              src="./images/Icon-03.png"
                              alt=""
                            />
                            <span className="font-15px">
                              <ReactMarkdown
                                children={item?.attributes?.area}
                              />
                            </span>
                          </li>
                        ) : null}
                        {item?.attributes?.scale ? (
                          <li className="font-15pxt d-flex align-items-center">
                            <img
                              className="mr-4"
                              width={20}
                              height={20}
                              src="./images/Icon-02.png"
                              alt=""
                            />
                            <span className="font-15px">
                              <ReactMarkdown
                                children={item?.attributes?.scale}
                              />
                            </span>
                          </li>
                        ) : null}
                      </ul>
                      <div className="ml-5">
                        <a
                          // href={`chitiet?pk=${item?.id}`}
                          href={`chitiet?pk=${item?.id}&role=1`}
                          className="text-white py-1 px-4 bg-red-800s text-center rounded font-custom-mobile"
                        >
                          XEM THÊM
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container line-w-full" />
            </section>
          </>
        )
      )}
    </div>
  );
}
