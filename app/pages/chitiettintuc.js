import Tintuc from "../component/tintuc";
import React, { useEffect, useState } from "react";
import API from "../axios/Api";
import { useRouter } from "next/router";

export default function Chitiettintuc() {
  const [detail, setDetail] = useState();
  const { query } = useRouter();

  useEffect(() => {
    if (query?.id) {
      getDetail(query?.id);
    }
  }, [query?.id]);

  const getDetail = async (id) => {
    try {
      const res = await API.getArticeleDetail(id);
      if (res.status === 200 || res.status === 201) {
        setDetail(res.data.data);
      }
    } catch (err) {
      console.log("this err", err);
    }
  };
  return <Tintuc detail={detail} />;
}
