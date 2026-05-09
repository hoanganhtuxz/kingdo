import { Url } from "../../public/untils";

const defaults = "Không có dữ liệu";
export default function Tuyendung({ rescuit }) {
  return (
    <section
      id="info-1"
      className="info-1-row info-section division bg-red-800s"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 ">
            <div
              className="txt-block mb-40 mr-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h3
                className="h3-lg-2 mb-30 mt-40 text-center font-w-400 color-orgen-800 viethoa"
                style={{
                  fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                }}
              >
                Tuyển dụng
              </h3>
              <div className="txt-list text-white">
                <p className="text-justify">
                  {rescuit ? rescuit?.attributes?.Description : defaults}
                </p>
              </div>
              <div className="d-flex justify-content-center mb-50 mt-45">
                <a
                  href="tuyendung"
                  className="un-text2 color-red-800s bg-orgen-800 text-center rounded py-1 px-3 "
                >
                  TÌM HIỂU THÊM
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 padding-custom">
            <div
              className="img-block  wow fadeInUp customer-css-image"
              data-wow-duration="1.5s"
              data-wow-delay="0.8s"
            >
              <img
                className="h-100 cover"
                style={{ maxWidth: "113%" }}
                src={
                  rescuit
                    ? Url(rescuit?.attributes?.image?.data?.attributes?.url)
                    : null
                }
                alt="info-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
