import { Url } from "../../public/untils";
import ReactMarkdown from "react-markdown";

export default function Details({ data }) {
  // detail
  function createMarkup(render) {
    return { __html: render };
  }

  return (
    <div className="overviewPage">
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
              <li>
                <a href="linhvucphattrien">Các lĩnh vực phát triển</a>
              </li>
              <li className="color-red-800s">
                Đầu tư và phát triển bất động sản
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section
        id="info-1"
        className="info-1-row bg-red-800s info-section division "
      >
        <div className="container">
          <div className="row d-flex align-items-center  new-py">
            <div className="col-md-5  wow fadeInUp " data-wow-delay="0.3s">
              <div className="txt-block mb-40 wow fadeInUp">
                <div style={{ width: "180px" }}>
                  <img
                    className="w-100"
                    src={Url(data?.attributes?.logo?.data?.attributes?.url)}
                    alt=""
                  />
                </div>
              </div>
              <div className="txt-block mb-20">
                <h3
                  className="text-white font-40 viethoa"
                  style={{
                    fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                  }}
                >
                  {data?.attributes?.name}
                </h3>
              </div>
              <div className="line-3" />
              <div className="txt-block mb-40 mt-30">
                <h3 className="color-orgen-800 font-30 viethoa">
                  <ReactMarkdown children={data?.attributes?.Introduce_title} />
                </h3>
              </div>
            </div>
            <div className="col-md-7 ">
              <div className="info-10-img wow fadeInUp h-500 border-l-5px">
                <img
                  className="img-fluid h-100 chitietimge-qq"
                  src={Url(data?.attributes?.banner?.data?.attributes?.url)}
                  alt="info-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="blog-1"
        className="wide-80 blog-section division overview-details"
      >
        <div className="container">
          <div className="row " style={{ textAlign: "justify" }}>
            <div
              className="col-lg-10 offset-lg-1 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h3 className="new-font-f text-center h3-lg-2 font-w-400 color-red-800s">
                TỔNG QUAN
              </h3>
              <div className="ul-revert">
                <div
                  key={1}
                  dangerouslySetInnerHTML={createMarkup(
                    data?.attributes?.overview
                  )}
                />
              </div>
            </div>
          </div>
          {/* data-wow-duration="1.5s" data-wow-delay="0.8s" */}
          <div className="col-lg-10 offset-lg-1  wow fadeInUp ">
            <div className="row align-items-center new-bg border-b-white ">
              <div className="col-md-1  text-center ">
                <img width={25} height={25} src="images/Icon-01.png" alt="" />
              </div>
              <div className="col-md-11 px-5 py-4 new-bg-2">
                <div className="text-left font-15px">
                  <ReactMarkdown
                    className="mb-0-p"
                    children={data?.attributes?.company}
                  />
                </div>
              </div>
            </div>
            {data?.attributes?.address ? (
              <div className="row align-items-center new-bg border-b-white">
                <div className="col-md-1  text-center ">
                  <img
                    width={25}
                    height={25}
                    src="images/Icon-04(1).png"
                    alt=""
                  />
                </div>
                <div className="col-md-11 px-5 py-4 new-bg-2">
                  <div className="text-left font-15px">
                    {data?.attributes?.address}
                  </div>
                </div>
              </div>
            ) : null}
            {data?.attributes?.area ? (
              <div className="row align-items-center new-bg border-b-white">
                <div className="col-md-1  text-center ">
                  <img
                    width={25}
                    height={25}
                    src="images/Icon-03(1).png"
                    alt=""
                  />
                </div>
                <div className="col-md-11 px-5 py-4 new-bg-2">
                  <div className="text-left font-15px">
                    <ReactMarkdown
                      className="mb-0-p"
                      children={data?.attributes?.area}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            {data?.attributes?.scale ? (
              <div className="row align-items-center new-bg border-b-white">
                <div className="col-md-1  text-center ">
                  <img width={25} height={25} src="images/Icon-02.png" alt="" />
                </div>
                <div className="col-md-11 px-5 py-4 new-bg-2">
                  <div className="text-left font-15px">
                    <ReactMarkdown
                      className="mb-0-p"
                      children={data?.attributes?.scale}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            {data?.attributes?.utilities ? (
              <div className="row align-items-center new-bg border-b-white">
                <div className="col-md-1  text-center ">
                  <img width={25} height={25} src="images/add.png" alt="" />
                </div>
                <div className="col-md-11 px-5 py-4 new-bg-2">
                  <div className="text-left font-15px">
                    <ReactMarkdown
                      className="mb-0-p"
                      children={data?.attributes?.utilities}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            {data?.attributes?.elements ? (
              <div className="row align-items-center new-bg border-b-white">
                <div className="col-md-1  text-center ">
                  <img width={25} height={25} src="images/Icon-05.png" alt="" />
                </div>
                <div className="col-md-11 px-5 py-4 new-bg-2">
                  <div className="text-left font-15px"></div>
                  <div className="text-left font-15px">
                    <ReactMarkdown
                      className="mb-0-p"
                      children={data?.attributes?.elements}
                    />
                  </div>
                </div>
              </div>
            ) : null}

            {data?.attributes?.unit && data?.attributes?.unit !== " " ? (
              <div className="row align-items-center new-bg border-b-white">
                <div className="col-md-1  text-center ">
                  <img
                    width={25}
                    height={25}
                    src="images/icon-may.png"
                    alt=""
                  />
                </div>
                <div className="col-md-11 px-5 py-4 new-bg-2">
                  <div className="text-left font-15px">
                    <ReactMarkdown
                      className="mb-0-p"
                      children={data?.attributes?.unit}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            {data?.attributes?.handover_year &&
            data?.attributes?.unit !== " " ? (
              <div className="row align-items-center new-bg border-b-white">
                <div className="col-md-1  text-center ">
                  <img width={25} height={25} src="images/dong-ho.png" alt="" />
                </div>
                <div className="col-md-11 px-5 py-4 new-bg-2">
                  <div className="text-left font-15px">
                    <ReactMarkdown
                      className="mb-0-p"
                      children={data?.attributes?.handover_year}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {data?.attributes?.images?.data?.length !== 0 ? (
        <section id="blog-1" className="wide-60 pt-0 new-pt">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-10 offset-lg-1 section-title mb-5 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <h3 className="new-font-f h3-lg-2  font-w-400 color-red-800s">
                  HÌNH ẢNH
                </h3>
              </div>
            </div>
            <div className="row">
              {data?.attributes.images?.data?.map((results, idx) =>
                (idx + 1) % 3 !== 0 ? (
                  <div
                    className="col-md-6 py-2 px-2   wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <img
                      className="img-fluid h315 cover w-100"
                      src={Url(results?.attributes?.url)}
                      alt=""
                    />
                  </div>
                ) : (
                  <div
                    className="col-md-12 py-1  px-2 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <img
                      className="img-fluid w-100 cover h460"
                      height={460}
                      src={Url(results?.attributes?.url)}
                      alt=""
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
