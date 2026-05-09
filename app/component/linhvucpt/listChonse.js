export default function ListChonse({ active }) {
  return (
    <div className="row mt-3 chonse-menu">
      <div className="col-lg-3 mb-custom text-center">
        <a
          href="linhvucphattrien"
          className={`font-13px new-font-wf ${
            active === "dautupt" ? "color-active" : "un-active"
          }`}
        >
          ĐẦU TƯ VÀ PHÁT TRIỂN <br /> BẤT ĐỘNG SẢN
        </a>
        <div
          className={`${active === "dautupt" ? "line-1-acitve " : ""} mt-2`}
        />
      </div>
      <div className="col-lg-3 mb-custom text-center">
        <a
          href="quanlivanhangtoanha"
          className={`font-13px new-font-wf ${
            active === "quanly" ? "color-active" : "un-active"
          }`}
        >
          QUẢN LÝ VẬN HÀNH <br /> TOÀ NHÀ
        </a>
        <div
          className={`${active === "quanly" ? "line-1-acitve " : ""} mt-2`}
        />
      </div>
      <div className="col-lg-3 mb-custom text-center">
        <a
          href="khaithachkinhdoanhthuongmai"
          className={`font-13px new-font-wf ${
            active === "khaithac" ? "color-active" : "un-active"
          }`}
        >
          KHAI THÁC KINH DOANH <br /> TT THƯƠNG MẠI VÀ VĂN PHÒNG
        </a>
        <div
          className={`${active === "khaithac" ? "line-1-acitve " : ""} mt-2`}
        />
      </div>
    </div>
  );
}
