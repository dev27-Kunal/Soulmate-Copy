import React from "react";
import "./LoveJournalBanner.css";
import SearchIcon from "@mui/icons-material/Search";

function LoveJournalBanner() {
  return (
    <div className="love-journal tw-bg-loveJournalCover tw-bg-cover sw768:tw-h-[100vh] sw552:tw-h-[640px] tw-h-[400px]">
      <div className="tw-bg-loveJournalLinearGradient sw768:tw-h-[100vh] sw552:tw-h-[640px] tw-h-[400px] ">
        <div className="tw-w-[80.7%] tw-mx-auto sw768:tw-h-[100vh] sw552:tw-h-[640px] tw-h-[400px] tw-flex tw-flex-col tw-justify-end tw-items-center sw768:tw-pb-[11.6vh] sw552:tw-pb-[80px] tw-pb-[50px] sw768:tw-gap-11 sw552:tw-gap-7 tw-gap-4">
          <h1 className="tw-font-playfairDisplay sw1024:tw-text-[64px]/[85.31px] sw768:tw-text-5xl/[64.31px] sw552:tw-text-[34px]/[50.31px] tw-text-[28px]/[36.31px] tw-font-bold tw-text-white tw-capitalize">
            <span>
              “Lost in your eyes, <br /> Found in your soul.”
            </span>
            <span>
              “Two souls,
              <br /> one journey.”
            </span>
            <span>
              You’re my - <br />
              “once in a lifetime.”
            </span>
          </h1>
          <div className="tw-bg-white sw768:tw-h-[94px] sw552:tw-h-[64px] tw-h-[48px] sw768:tw-w-[70%] sw552:tw-w-[80%] tw-w-[90%] tw-flex tw-items-center sw768:tw-px-8 sw552:tw-px-5 tw-px-4 sw768:tw-gap-8 sw552:tw-gap-4 tw-gap-3 sw552:tw-rounded-2xl tw-rounded-lg">
            <img
              src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741594500/SoulmateX/qa18qqczjsz3mokavqcm.svg"
              alt=""
              className="sw768:tw-w-9 sw552:tw-w-5 tw-w-4 sw768:tw-h-9 sw552:tw-h-5 tw-h-4"
            />
            <input
              type="text"
              className="sw552:tw-h-full tw-w-full focus:tw-outline-none placeholder:sw768:tw-text-[28px] placeholder:sw552:tw-text-[20px] placeholder:tw-text-[14px] placeholder:tw-text-[#777777] placeholder:tw-font-medium sw768:tw-text-[28px] sw552:tw-text-[20px] tw-text-[14px]"
              placeholder="Search Blogs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveJournalBanner;
