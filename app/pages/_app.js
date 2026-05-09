import "../styles/globals.css";
import "../styles/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.css";
import "../styles/css/animate.css";
import "../styles/css/flaticon.css";
// import "../styles/css/fontawesome.min.css";
import "../styles/css/magnific-popup.css";
import "../styles/css/owl.carousel.min.css";
import "../styles/css/owl.theme.default.min.css";
import "../styles/css/slick-theme.css";
import "../styles/css/slick.css";
import "../styles/css/spinner.css";
import "../styles/css/style.css";
import "../styles/css/responsive.css";
import "../styles/css/styleScss.scss";
import Header from "./layout/hedaer";
import Footer from "./layout/footer";
import Tintuc from "./layout/tintuc";
import FixedButon from "./layout/fixedButton";
import Script from "next/script";
import Head from "next/head";

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import API from "../axios/Api";

function MyApp({ Component, pageProps }) {
  let tintuc = useRouter();

  const [isLoarer, setIsloader] = useState(false);
  const [article, setArticle] = useState();
  useEffect(() => {
    setIsloader(true);
    setTimeout(() => {
      setIsloader(false);
    }, 900);
  }, [tintuc?.pathname]);

  const [logo, setLogo] = useState();
  const [layoutManagement, setLayoutManagement] = useState();
  useEffect(() => {
    getLogo();
    getArticele();
    getLayoutManagement();
  }, []);

  useEffect(() => {
    const WOW = require("wowjs");
    const swow = new WOW.WOW({
      live: false,
    });
    swow.init();
  }, []);

  const getLogo = async () => {
    try {
      const res = await API.getLogo();
      if (res.status === 200 || res.status === 201) {
        setLogo(res.data);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };
  const getArticele = async () => {
    const res = await API.getArticele("true");
    try {
      if (res.status === 200 || res.status === 201) {
        setArticle(res.data);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };
  const getLayoutManagement = async () => {
    try {
      const res = await API.getLayoutManagement();
      if (res.status === 200 || res.status === 201) {
        setLayoutManagement(res.data);
      }
    } catch (error) {
      console.log("this err", error);
    }
  };
  return (
    <div id="page" className="page">
      <Head>
        <title>Kinh Đô</title>
         <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
   
</Head>
  <Script 
  src="https://www.googletagmanager.com/gtag/js?id=G-3CQTLF62PP"
  strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3CQTLF62PP');
  `,
  }} />
      {isLoarer && (
        <div className="onLoader">
          <div className="mt-5">
            <img src="./loader.svg" alt="loader" />
          </div>
        </div>
      )}

      <>
        <FixedButon contactInfo={layoutManagement?.data?.attributes} />
        <Header logo={logo?.data?.attributes?.logo_light?.data?.attributes} />

        <Component {...pageProps} />
        {tintuc?.pathname !== "/tintuc" && tintuc?.route !== "/tintuc" && (
          <Tintuc article={article} />
        )}
        <Footer
          data={logo?.data?.attributes}
          logo={logo?.data?.attributes?.logo_dark?.data?.attributes}
        />
      </>

      <Script
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.0.0.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.0.0.js"
      ></Script>
      <Script strategy="beforeInteractive" src="js/bootstrap.min.js"></Script>
      <Script src="js/fontawesome.min.js"></Script>
      <Script strategy="beforeInteractive" src="js/jquery.easing.js"></Script>
      <Script strategy="beforeInteractive" src="js/jquery.scrollto.js"></Script>
      <Script src="js/imagesloaded.pkgd.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="js/jquery.stellar.min.js"
      ></Script>
      <Script src="js/modernizr.custom.js"></Script>
      <Script src="js/jquery.ajaxchimp.min.js"></Script>
      <Script src="js/wow.js"></Script>
      <Script src="js/custom.js"></Script>
    </div>
  );
}

export default MyApp;

