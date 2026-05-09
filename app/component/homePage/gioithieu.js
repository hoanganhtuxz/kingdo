import { Url } from "../../public/untils";

export default function GioiThieu({ introduce }) {
  const defaultDescription =
    "Trải qua hành trình dài vươn mình phát triển, Kinh Do Group ngày càng lớn mạnh, khẳng định thương hiệu trên thị trường bất động sản với những sản phẩm cao cấp, tiên phong cho phong cách sống sang trọng và hiện đại. Kinh Do Group luôn nỗ lực đưa ra những dịch vụ và giải pháp hiệu quả, tuân theo chuẩn mực cao nhất về đạo đức kinh doanh và trách nhiệm xã hội, mang lại giá trị cho khách hàng.";
  return (
    <div id="gioithieu">
      <section
        id="info-1"
        className="info-1-row info-section division wow fadeInUp"
        data-wow-delay="0.3s"
        data-wow-duration="1.5s"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div
                className="mb-40 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.8s"
              >
                <h3
                  className="h3-lg mb-20 color-red-800s font-w-400"
                  style={{
                    fontFamily: '"Letters_from_Sweden_ExemplarPro_Regular"',
                  }}
                >
                  GIỚI THIỆU
                </h3>
                <div
                  className="txt-list mb-35 color-red-800s hover-gth"
                  style={{ textAlign: "justify" }}
                >
                  <p className="scroll-y-gioithieu">
                    {introduce ? introduce?.description : defaultDescription}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="img-block mb-40 wow fadeInUp text-right"
                data-wow-duration="1.5s"
                data-wow-delay="1s"
              >
                <img
                  className="img-fluid new-img-w-100"
                  src={
                    introduce
                      ? Url(introduce?.images?.data?.attributes?.url)
                      : "images/Asset 1.png"
                  }
                  alt="info-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
