import React from "react";
import './TestimonialCard.css'
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import TestimonialAuthor from "../../assets/TestimonialAuthor.svg";

function TestimonialCard({item}) {
  return (
    <div className="testimonial-card tw-flex tw-flex-col tw-gap-[22px] tw-min-h-[479px] tw-h-[100%] sw851:tw-w-full sw731:tw-w-[280px] tw-w-full hover:tw-cursor-pointer">
      <div className="tw-relative sw552:tw-h-[303px] tw-h-[240px] tw-bg-[#FFFFFF] tw-rounded-xl tw-overflow-hidden">
        <img
          src={item.cardVideo}
          alt=""
          className="tw-w-full tw-h-full tw-object-contain tw-object-center"
        />
        <div className="testimonial-video-div tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-mx-auto tw-my-auto tw-flex tw-justify-center tw-items-center tw-rounded-full tw-border-[3px] tw-border-white">
          <PlayArrowIcon sx={{ fontSize: 42, color: "#ffffff" }} />
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-4">
        <div className="tw-flex tw-gap-4">
          <img
            src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076373/SoulmateX/o8fouqlcpvjra9esybix.svg"
            alt=""
          />
          <div className="tw-flex tw-flex-col tw-justify-center tw-gap-1">
            <h6 className="testimonial-author-name tw-text-xl/[28.13px] tw-font-bold tw-font-roboto tw-mb-0">
              Jane Cooper
            </h6>
            <span className="testimonial-card-text tw-text-base/[18.75px] tw-font-medium tw-font-roboto">
              Co-Founder & CEO
            </span>
          </div>
        </div>
        <div className="tw-flex tw-items-start tw-gap-2">
          <h6 className="testimonial-card-text tw-text-[64px]/[85.31px] tw-font-playfairDisplay tw-font-normal tw-mb-0 tw-leading-none tw-relative -tw-top-4">
            “
          </h6>
          <span className="testimonial-card-text tw-font-normal tw-font-roboto sw552:tw-text-base/[18.75px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
