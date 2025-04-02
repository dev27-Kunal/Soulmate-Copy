import React, { useEffect, useState } from "react";
import "./RealPeople.css";
import { Link } from "react-router";
import LoveCard from "../../../components/LoveCard/LoveCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
// import RealPeopleFirst from "../../../assets/RealPeopleFirst.svg";
// import RealPeopleSecond from "../../../assets/RealPeopleSecond.svg";
// import RealPeopleThird from "../../../assets/RealPeopleThird.svg";

function RealPeople() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const People = [
    {
      id: 1,
      name: "Jane and Julie",
      subheading: "Leo and Aries",
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741081623/SoulmateX/kycqaypwmhw8uasdcfsf.svg",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati error quibusdam quae voluptatem sunt facere corrupti magni earum vel. Possimus, aliquam. Incidunt voluptas voluptatibus earum soluta?",
    },
    {
      id: 2,
      name: "Jane and Julie",
      subheading: "Leo and Aries",
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741082325/SoulmateX/tc1pfynxrdbwum1t4ymu.svg",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati error quibusdam quae voluptatem sunt facere corrupti magni earum vel. Possimus, aliquam. Incidunt voluptas voluptatibus earum soluta?",
    },
    {
      id: 3,
      name: "Jane and Julie",
      subheading: "Leo and Aries",
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741082444/SoulmateX/hzdbkf4uez6fdtgfhh3x.svg",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati error quibusdam quae voluptatem sunt facere corrupti magni earum vel. Possimus, aliquam. Incidunt voluptas voluptatibus earum soluta?",
    },
  ];
  return (
    <div className="real-people">
      <div className="real-people-content-container tw-flex tw-flex-col tw-justify-evenly">
        <div className="tw-flex real-people-heading-subheading tw-items-end tw-flex-wrap">
          <h1 className="real-people-content-heading sw1024:tw-mb-2 tw-mb-0">
            Real <span style={{ color: "#ED1B24" }}>People.</span>
            <span style={{ color: "#ED1B24" }}>Stories.</span>
            <span style={{ color: "#ED1B24" }}>Love.</span>
          </h1>
          <Link className="underline text-white">
            <h2 className="sw1024:tw-text-[32px]/[37.5px] sw768:tw-text-[24px]/[28.5px] sw552:tw-text-[20px] tw-text-[3.5vw] sw552:tw-mb-4 tw-mb-0  tw-font-bold tw-font-roboto">
              Share Your Story
            </h2>
          </Link>
        </div>
        {width > 768 ? (
          <div className="tw-flex real-people-card-container">
            {People.map((item) => (
              <LoveCard item={item} id={item.id} />
            ))}
          </div>
        ) : (
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-12">
            <Swiper
              modules={[Navigation]}
              className="love-card-swiper"
              spaceBetween={30}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              loop
            >
              {People.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="tw-flex tw-justify-center">
                    <LoveCard item={item} id={item.id} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <Pagination
              count={People.length}
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
                          borderColor: "#F4F4F4",
                          color: "#ffffff",
                          "&.Mui-selected": {
                            border: "none",
                            backgroundColor: "#ED1B24",
                          },
                        },
                  ]}
                />
              )}
            /> */}
            <div className="tw-flex tw-gap-4">
              <button
                className="tw-px-2 tw-py-3 tw-rounded-lg tw-border tw-border-[#B0AFB4]"
                onClick={() => swiperInstance && swiperInstance.slidePrev()}
                aria-label="Previous button"
                onMouseDown={(e) => {
                  e.currentTarget.style.backgroundColor = "#ED1B24";
                  e.currentTarget.style.border = "none";
                  const icon = e.currentTarget.querySelector("svg");
                  if (icon) icon.style.color = "#fff";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.border = "1px solid #B0AFB4";
                  const icon = e.currentTarget.querySelector("svg");
                  if (icon) icon.style.color = "#B0AFB4";
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.backgroundColor = "#ED1B24";
                  e.currentTarget.style.border = "none";
                  const icon = e.currentTarget.querySelector("svg");
                  if (icon) icon.style.color = "#fff";
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.border = "1px solid #B0AFB4";
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
                  e.currentTarget.style.border = "none";
                  const icon = e.currentTarget.querySelector("svg");
                  if (icon) icon.style.color = "#fff";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.border = "1px solid #B0AFB4";
                  const icon = e.currentTarget.querySelector("svg");
                  if (icon) icon.style.color = "#B0AFB4";
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.backgroundColor = "#ED1B24";
                  e.currentTarget.style.border = "none";
                  const icon = e.currentTarget.querySelector("svg");
                  if (icon) icon.style.color = "#fff";
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.border = "1px solid #B0AFB4";
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
    </div>
  );
}

export default RealPeople;
