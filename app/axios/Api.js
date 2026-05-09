import axiosConfig from "./axiosConfig";
import axiosConfigFormdata from "./axiosConfigFormdata";

const API = {
  getBannerHomePage: () => {
    const url = "/banner-home-page?populate=*";
    return axiosConfig.get(url);
  },
  getLogo: () => {
    const url = "/logo-home-page?populate=*";
    return axiosConfig.get(url);
  },
  getIntroduce: () => {
    const url = "/introduce-home-page?populate=*";
    return axiosConfig.get(url);
  },
  getDevFields: () => {
    const url = "/real-estate-investments?populate=*&sort=rank:asc";
    return axiosConfig.get(url);
  },
  getDevFieldsRank: () => {
    const url = "/real-estate-investments?populate=*&sort=rank:asc";
    return axiosConfig.get(url);
  },
  getPartner: () => {
    const url = "/partners?populate=*&sort=id:ASC";
    return axiosConfig.get(url);
  },
  getArticele: (query) => {
    if (query === "true") {
      const url = "/articles?populate=*&sort=rank:asc";
      return axiosConfig.get(url);
    } else {
      const url = "/articles?populate=*&sort=createdAt:DESC";
      return axiosConfig.get(url);
    }
  },
  getArticeleDetail: (id) => {
    const url = `/articles/${id}?populate=*`;
    return axiosConfig.get(url);
  },
  getRecuitHomePage: () => {
    const url = "/recruit-home-page?populate=*";
    return axiosConfig.get(url);
  },
  getAllRecruit: () => {
    const url = "/recruits?populate=*&sort=createdAt:DESC";
    return axiosConfig.get(url);
  },
  RecutDetail: (id) => {
    const url = `/recruits/${id}?populate=*`;
    return axiosConfig.get(url);
  },
  upload: (data) => {
    const url = "/candidates?populate=*";
    return axiosConfigFormdata.post(url, data);
  },
  getThungoPage: () => {
    const url = "/letter?populate=*";
    return axiosConfig.get(url);
  },
  getrOganizationalStructures: () => {
    const url = "/organizational-structure?populate=*";
    return axiosConfig.get(url);
  },
  getVmison: () => {
    const url = "/vision-misson?populate=*";
    return axiosConfig.get(url);
  },
  developmentFields: () => {
    const url = "/real-estate-investments?populate=*&sort=rank:asc";
    return axiosConfig.get(url);
  },
  getDetail1: (id) => {
    const url = `/real-estate-investments/${id}?populate=*`;
    return axiosConfig.get(url);
  },
  getDetail2: (id) => {
    const url = `/manage-buildings/${id}?populate=*`;
    return axiosConfig.get(url);
  },
  getDetail3: (id) => {
    const url = `/khai-thac-kinh-doanh-thuong-mais/${id}?populate=*`;
    return axiosConfig.get(url);
  },
  getManageBuildings: () => {
    const url = "/manage-buildings?populate=*&sort=rank:asc";
    return axiosConfig.get(url);
  },
  getCommercialBusiness: () => {
    const url = "/khai-thac-kinh-doanh-thuong-mais?populate=*&sort=rank:asc";
    return axiosConfig.get(url);
  },
  LogHistory: () => {
    const url = "/history-begin?populate=*";
    return axiosConfig.get(url);
  },
  getImageHomePage: () => {
    const url = "/homepage-slider-images?populate=*";
    return axiosConfig.get(url);
  },
  getVideoHomage: () => {
    const url = "/homepage-slider-videos?populate=*";
    return axiosConfig.get(url);
  },
  getLayoutManagement: () => {
    const url = "/layout-management?populate=*";
    return axiosConfig.get(url);
  },
};

export default API;
