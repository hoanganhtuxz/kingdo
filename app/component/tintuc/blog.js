import React, { useState, useEffect } from "react";
// import JsxParser from "react-jsx-parser";
import dayjs from "dayjs";
import parse from "html-react-parser";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Url } from "../../public/untils";

export default function Blog({ detail }) {
  const [content, setContent] = useState();
  const configDate = (data) => {
    if (data) {
      const a = new Date(data);
      return a;
    }
  };

  useEffect(() => {
    setContent(detail?.attributes?.content);
  }, [detail?.attributes?.content]);

  function createMarkup(render) {
    return { __html: render };
  }
  return (
    <div className="">
      <div className="mt-150">
        <div className="container">
          <div className="pb-10 border-h">
            <ul className="breadcrumb">
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="tintuc">Tin tức</a>
              </li>
              <li className="color-red-800s myDIV">
                {detail?.attributes?.title}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section id="blog-1" className="wide-50 blog-section division">
        <div className="container">
          <div
            style={{
              textAlign: "center",
              fontSize: "1.25rem",
              paddingBottom: "30px",
              width: "65%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="font-w-400 color-red-800s viethoa new-font-f"
          >
            {detail?.attributes?.title}
          </div>
          <div>
            <h5
              style={{
                fontSize: "15px",
                color: "#999999",
                paddingLeft: "200px",
                paddingBottom: "50px",
                display: "flex",
              }}
            >
              <i
                className="far fa-clock"
                style={{ fontSize: "15px", marginRight: "10px", width: "15px" }}
              ></i>
              {dayjs(configDate(detail?.attributes?.publishedAt)).get("date")}{" "}
              tháng {dayjs(detail?.attributes?.publishedAt).get("month") + 1},{" "}
              {dayjs(configDate(detail?.attributes?.publishedAt)).get("year")}
            </h5>
          </div>
          <div className="row">
            <div
              id="customSetImage"
              className="col-lg-10 offset-lg-1 custom-image-tintuc wow fadeInUp"
              data-wow-delay="0.3s"
            >
              {/* {renderHTML(detail?.attributes?.content)} */}
              {/* <JsxParser jsx={content} /> */}
              <div key={1} dangerouslySetInnerHTML={createMarkup(content)} />
              {/* {parse(content !== "" ? content : null)} */}
              {/* <ReactMarkdown
                children={content}
                transformImageUri={(uri) =>
                  uri.startsWith("http") ? uri : `${Url(uri)}`
                }
              /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
