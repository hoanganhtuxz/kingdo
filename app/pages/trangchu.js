import HomPage from "../component/homePage";
// import react
import React, { useState, useEffect, use } from "react";
// import Api
import API from "../axios/Api";
import { GroupArr } from "../public/untils";
// until

export default function TrangChu() {
  const [header, setHeader] = useState();
  const [introduce, setIntroduce] = useState();
  const [devFields, setDevFields] = useState();
  const [partner, setPartner] = useState();
  const [rescuit, setRecuit] = useState();
  const [layoutManagement, setLayoutManagement] = useState();
  useEffect(() => {
    getBanner();
    getIntroduce();
    getDevFields();
    getPartner();
    getRecuit();
    layouManagement();
  }, []);

  const getBanner = async () => {
    try {
      const res = await API.getBannerHomePage();
      if (res.status === 201 || res.status === 200) {
        setHeader(res?.data?.data?.attributes?.images?.data);
      }
    } catch (err) {
      console.log("this err", err.message);
    }
  };
  const getIntroduce = async () => {
    try {
      const res = await API.getIntroduce();
      if (res.status === 200 || res.status === 201) {
        setIntroduce(res.data.data.attributes);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getDevFields = async () => {
    try {
      const res = await API.getDevFieldsRank();
      if (res.status === 200 || res.status === 201) {
        setDevFields(res.data);
      }
    } catch (error) {
      console.log("this errr", error);
    }
  };

  const getPartner = async () => {
    try {
      const res = await API.getPartner();
      if (res.status === 200 || res.status === 201) {
        const newPartner = res.data.data;
        setPartner(GroupArr(newPartner, 4));
      }
    } catch (err) {
      console.log("this err", err);
    }
  };

  const getRecuit = async () => {
    try {
      const res = await API.getRecuitHomePage();
      if (res.status === 200 || res.status === 201) {
        setRecuit(res.data.data);
      }
    } catch (err) {
      console.log("this err", err);
    }
  };
  const layouManagement = async () => {
    try {
      const res = await API.getLayoutManagement();
      if (res.status === 200 || res.status === 201) {
        setLayoutManagement(res.data.data);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };

  const layoutHomePage = {
    header: header,
    introduce: introduce,
    dev_fields: devFields,
    partner: partner,
    rescuit: rescuit,
    layouManagements: layoutManagement,
  };
  return <HomPage layoutHomePage={layoutHomePage} />;
}
