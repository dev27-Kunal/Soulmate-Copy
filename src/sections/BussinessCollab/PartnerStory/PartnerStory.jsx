import React from "react";
import "./PartnerStory.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
// import TestimonialImageFirst from "../../../assets/TestimonialImageFirst.svg";
// import TestimonialImageSecond from "../../../assets/TestimonialImageSecond.svg";
// import TestimonialImageThird from "../../../assets/TestimonialImageThird.svg"; 

function PartnerStory() {

  const cardContents = [
    {
      id: 1,
      cardVideo:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076373/SoulmateX/izmlfzkndqhferd8dym5.svg",
      author: "Jane Cooper",
      role: "Co-Founder & CEO",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      cardVideo:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076374/SoulmateX/egjpo0gpymnqfa3xtuu5.svg",
      author: "Jane Cooper",
      role: "Co-Founder & CEO",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 3,
      cardVideo:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076375/SoulmateX/txyupiyenhx54tkhupwz.svg",
      author: "Jane Cooper",
      role: "Co-Founder & CEO",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  return (
    <div className="tw-h-[100%] tw-w-full tw-min-h-[1067px] tw-bg-[#1F1D1E]">
      <div className="tw-h-full tw-min-h-[1067px] tw-max-w-[80.7%] tw-w-[90%] tw-py-12 tw-mx-auto tw-flex tw-flex-col tw-justify-evenly tw-gap-8">
        <div>
          <h1 className="sw1024:tw-text-[64px]/[85.31px] sw768:tw-text-5xl/[64.31px] sw552:tw-text-[34px]/[50.31px] tw-text-[23px]/[28.31px] tw-text-[#FFFFFF] tw-font-playfairDisplay tw-font-bold">
            “Hear From Our Partners”
          </h1>
          <h1 className="partner-story-animate-text sw1024:tw-text-[64px]/[85.31px] sw768:tw-text-5xl/[64.31px] sw552:tw-text-[34px]/[50.31px] tw-text-[23px]/[28.31px] tw-text-[#FFFFFF] tw-font-playfairDisplay tw-font-bold">
            Real <span style={{ color: "#0059A9" }}>Growth.</span>
            <span style={{ color: "#0059A9" }}>Stories.</span>
            <span style={{ color: "#0059A9" }}>Impact.</span>
          </h1>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-8">
          <div className="tw-flex tw-flex-col tw-gap-[6px]">
            <span className="sw552:tw-text-2xl/[28.13px] tw-text-[18px]/[24.13px] tw-font-roboto tw-text-white">
              Video testimonials
            </span>
            <div className="tw-w-16 tw-h-1 tw-bg-[#ED1B24]"></div>
          </div>
          <div className="sw851:tw-grid sw851:tw-grid-cols-[repeat(3,1fr)] tw-flex tw-flex-wrap tw-gap-8 tw-justify-evenly">
            {cardContents.map((item) => (
              <TestimonialCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerStory;
