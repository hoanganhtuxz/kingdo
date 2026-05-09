// import component
import BannerSliderShow from "./bannerSliderShow";
import GioiThieu from "./gioithieu";
import ListGioiThieu from "./ListGioiThieu";
import LinhvucPt from "./linhvucphattrien";
import Tuyendung from "./tuyendung";
import Doitac from "./doitac";
import HinhAnh from "./hinhanh";
import Video from "./video";

export default function HomPage({ layoutHomePage }) {
  return (
    <div>
      <BannerSliderShow header={layoutHomePage?.header} />
      <GioiThieu introduce={layoutHomePage?.introduce} />
      <ListGioiThieu layoutHomePage={layoutHomePage?.layouManagements} />
      <LinhvucPt dev_fields={layoutHomePage?.dev_fields} />
      <Doitac partner={layoutHomePage?.partner} />
      <Tuyendung rescuit={layoutHomePage?.rescuit} />
      <HinhAnh />
      <Video />
    </div>
  );
}
