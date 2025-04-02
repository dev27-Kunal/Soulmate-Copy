import React, { useEffect, useState } from "react";
import "./LoveJournal.css";
import EnvelopeCard from "../../../components/EnvelopeCard/EnvelopeCard";
import BtnRound from "../../../components/BtnRound/BtnRound";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router";

function LoveJournal() {
  const [width, setWidth] = useState(window.innerWidth);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  const cardContent = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674629/SoulmateX/fawf7jqaqtwh0zi7ixgr.svg",
      heading: "Here’s How You Can Date Safely Online.",
      date: "12/06/2025",
      author: "- By Lorem Ipsum",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674631/SoulmateX/suyx4jbk5dzrvnbg04th.svg",
      heading: "Here’s How You Can Date Safely Online.",
      date: "12/06/2025",
      author: "- By Lorem Ipsum",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674632/SoulmateX/sanrsntvlj9lrz27oewr.svg",
      heading: "Here’s How You Can Date Safely Online.",
      date: "12/06/2025",
      author: "- By Lorem Ipsum",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674633/SoulmateX/gx4wuhmzh0vxya60zyue.svg",
      heading: "Here’s How You Can Date Safely Online.",
      date: "12/06/2025",
      author: "- By Lorem Ipsum",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674634/SoulmateX/zjfes3dpas0phccayzwb.svg",
      heading: "Here’s How You Can Date Safely Online.",
      date: "12/06/2025",
      author: "- By Lorem Ipsum",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674635/SoulmateX/bzc19ic7bj9jb8030ojb.svg",
      heading: "Here’s How You Can Date Safely Online.",
      date: "12/06/2025",
      author: "- By Lorem Ipsum",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePaginationChange = (event, value) => {
    if (swiperInstance) {
      // Since Pagination is 1-indexed and Swiper is 0-indexed
      swiperInstance.slideTo(value - 1);
    }
  };

  return (
    <div className="landing-love-journal">
      <div className="landing-love-journal-inner-container">
        <div className="landing-love-journal-heading-card-container">
          <div className="tw-flex tw-flex-col tw-gap-2">
            <h1 className="landing-love-journal-heading">The Love Journal</h1>
            <span className="landing-love-journal-subheading">
              "Discover Expert Dating Advice, Real Love Stories, And{" "}
              {width > 540 && <br />}
              Astrological Insights – All In One Place!"
            </span>
          </div>
          {width > 654 ? (
            <div className="cards-container">
              {cardContent.map((item) => (
                <EnvelopeCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="tw-flex tw-flex-col tw-items-center">
              <Swiper
                modules={[Navigation]}
                className="loveJournalSwiper"
                spaceBetween={30}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                loop
              >
                {cardContent.map((item) => (
                  <SwiperSlide key={item.id}>
                    <EnvelopeCard key={item.id} item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <Pagination
                count={cardContent.length}
                siblingCount={0}
                shape="rounded"
                variant="outlined"
                page={currentSlide + 1}
                onChange={handlePaginationChange}
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
                    sx={[
                      item.type === "end-ellipsis" ||
                      item.type === "start-ellipsis"
                        ? {
                            fontSize: width > 1024 ? "30px" : "24px",
                            fontWeight: "700",
                            width: width > 1024 ? "64px" : "48px",
                            fontFamily: "Roboto",
                            border: "1px solid red",
                            height: width > 1024 ? "68px" : "52px",
                            borderRadius: "10px",
                          }
                        : {
                            fontSize:
                              width > 1024
                                ? "30px"
                                : width > 768
                                ? "24px"
                                : "18px",
                            fontWeight: "700",
                            width:
                              width > 1024
                                ? "64px"
                                : width > 768
                                ? "48px"
                                : "36px",
                            fontFamily: "Roboto",
                            height:
                              width > 1024
                                ? "68px"
                                : width > 768
                                ? "52px"
                                : "40px",
                            borderRadius: "10px",
                            "&.Mui-selected": {
                              backgroundColor: "#ED1B24",
                              color: "#fff",
                            },
                          },
                    ]}
                  />
                )}
              /> */}

              <div className="tw-flex tw-gap-4">
                <button
                  className="tw-px-2 tw-py-3 tw-rounded-lg tw-border tw-border-[#B0AFB4]"
                  aria-label="Previous button"
                  onClick={() => swiperInstance && swiperInstance.slidePrev()}
                  onMouseDown={(e) => {
                    e.currentTarget.style.backgroundColor = "#ED1B24";
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.color = "#fff";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.color = "#B0AFB4";
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.backgroundColor = "#ED1B24";
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.color = "#fff";
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.color = "#B0AFB4";
                  }}
                >
                  <ArrowBackIosNewIcon style={{ color: "#B0AFB4" }} />
                </button>
                <button
                  className="tw-px-2 tw-py-3 tw-rounded-lg tw-border tw-border-[#B0AFB4]"
                  aria-label="Next button"
                  onClick={() => swiperInstance && swiperInstance.slideNext()}
                  onMouseDown={(e) => {
                    e.currentTarget.style.backgroundColor = "#ED1B24";
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.color = "#fff";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.color = "#B0AFB4";
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.backgroundColor = "#ED1B24";
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.color = "#fff";
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.color = "#B0AFB4";
                  }}
                >
                  <ArrowForwardIosIcon style={{ color: "#B0AFB4" }} />
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
          className="love-journal-btn"
        >
          <BtnRound
            text="Explore The Love Journal"
            customClass="landing-love-journal-hover-btn"
            onClick={() => navigate("/loveJournal")}
          />
        </div>
      </div>
    </div>
  );
}

export default LoveJournal;
