import DetailsProject from "../component/detailsProject";
import React, { useState, useEffect } from "react";
import API from "../axios/Api";
import { useRouter } from "next/router";

export default function ChiTiet() {
  const [data, setData] = useState();
  const { query } = useRouter();

  useEffect(() => {
    if (query.role !== 0) {
      if (query.role == 1) {
        return getDetail1(query?.pk);
      }
      if (query.role == 2) {
        return getDetail2(query?.pk);
      }
      if (query.role == 3) {
        return getDetail3(query?.pk);
      }
    }
  }, [query.pk, query.role]);

  const getDetail1 = async (pk) => {
    try {
      const res = await API.getDetail1(pk);
      if (res.status === 200 || res.status === 201) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log("this error", error);
    }
  };

  const getDetail2 = async (pk) => {
    try {
      const res = await API.getDetail2(pk);
      if (res.status === 200 || res.status === 201) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log("this error", error);
    }
  };

  const getDetail3 = async (pk) => {
    try {
      const res = await API.getDetail3(pk);
      if (res.status === 200 || res.status === 201) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log("this error", error);
    }
  };
  return <DetailsProject data={data} />;
}
