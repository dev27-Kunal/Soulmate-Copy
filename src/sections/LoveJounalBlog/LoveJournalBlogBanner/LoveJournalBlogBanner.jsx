import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import "./loveJournalBlogBanner.css";

function LoveJournalBlogBanner({ item }) {
  console.log("passedItem:", item);

  return (
    <div
      className="love-journal-blog-banner tw-h-full sw768:tw-min-h-[921px] sw552:tw-min-h-[700px] tw-min-h-[500px] tw-bg-no-repeat tw-bg-cover tw-flex"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="tw-h-full sw768:tw-min-h-[921px] sw552:tw-min-h-[700px] tw-min-h-[500px] tw-flex tw-w-full tw-bg-loveJournalBlogLinearGradient">
        <div className="sw768:tw-h-[611px] sw552:tw-h-[470px] tw-h-[350px] tw-mx-auto tw-my-auto tw-w-[80.7%] tw-flex tw-flex-col tw-justify-between">
          <Breadcrumbs
            separator=">>"
            aria-label="breadcrumb"
            sx={{
              "& .MuiBreadcrumbs-separator": {
                color: "#000000",
                marginInline: "12px",
              },
            }}
          >
            <span className="tw-font-roboto tw-font-medium sw768:tw-text-[20px] tw-text[18px] tw-capitalize tw-text-[#ED1B24]">
              Soulmate x
            </span>
            <span className="tw-font-roboto tw-font-medium sw768:tw-text-[20px] tw-text[18px] tw-capitalize tw-text-[#ED1B24]">
              Love Journal
            </span>
            <span className="tw-font-roboto tw-font-medium sw768:tw-text-[20px] tw-text[18px] tw-capitalize tw-text-[#000000]">
              {item.heading}
            </span>
          </Breadcrumbs>
          <div className="tw-flex tw-flex-col sw552:tw-gap-6 tw-gap-4">
            <button className="tw-bg-[#ED1B24] sw552:tw-text-2xl tw-text-base tw-font-roboto tw-font-medium tw-text-white sw552:tw-h-[48px] tw-h-[32px] sw552:tw-w-[193px] tw-w-[130px] tw-rounded-[5px]">
              Dating Tips
            </button>
            <h1 className="tw-text-white sw1024:tw-text-[64px]/[85.31px] sw768:tw-text-5xl/[64.31px] sw552:tw-text-[34px]/[50.31px] tw-text-[28px]/[36.31px] tw-font-playfairDisplay tw-font-bold tw-capitalize tw-w-full tw-max-w-[701px]">
              {item.heading}
            </h1>
            <div className="tw-flex sw552:tw-gap-28 tw-gap-14">
              <div className="tw-flex tw-items-center">
                <img
                  src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076350/SoulmateX/lwxrgnpra5l4wyzrd5wy.svg"
                  alt=""
                  className="tw-mr-2 sw768:tw-h-6 sw552:tw-h-5 tw-h-4 sw768:tw-w-6 sw552:tw-w-5 tw-w-4"
                />
                <span className="sw768:tw-text-2xl sw552:tw-text-xl tw-text-base tw-text-white tw-font-Lato">
                  {item.date}
                </span>
              </div>
              <span className="sw768:tw-text-2xl sw552:tw-text-xl tw-text-base tw-text-white tw-font-Lato">
                {item.author}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveJournalBlogBanner;
