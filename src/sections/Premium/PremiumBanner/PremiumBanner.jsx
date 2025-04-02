import React, { useEffect, useState } from "react";
import "./PremiumBanner.css";

function PremiumBanner({
  backgroundImage,
  headingFirstText,
  headingSecondText,
  subHeadingFirstText,
  subHeadingSecondText,
  btnText,
  componentScreen,
}) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`${backgroundImage} tw-relative sw1024:tw-min-h-[931px] sw768:tw-min-h-[800px] sw552:tw-min-h-[600px] tw-min-h-[280px] premium-banner ${
          componentScreen === "Premium" ? `inverse-image` : `non-inverse-image`
        }`}
      >
        <div className="tw-w-full premium-linear-gradient sw1024:tw-min-h-[931px] sw768:tw-min-h-[800px] sw552:tw-min-h-[600px] tw-min-h-[280px] tw-flex tw-items-end sw1024:tw-pb-[122px] sw768:tw-pb-[100px] sw552:tw-pb-[80px] tw-pb-[30px]">
          <div
            className="tw-relative tw-z-10 tw-w-[80.7%] tw-mx-auto tw-flex tw-flex-col sw768:tw-gap-[60px] sw552:tw-gap-[36px] tw-gap-1"
            style={{
              transform: componentScreen === "Premium" ? "" : "",
            }}
          >
            <div className="tw-flex tw-flex-col sw768:tw-gap-6 sw552:tw-gap-4 tw-gap-2">
              <h1 className="sw1024:tw-text-[64px]/[85.31px] sw768:tw-text-5xl/[64.31px] sw552:tw-text-[34px]/[50.31px] tw-text-[16px]/[36.31px] tw-font-playfairDisplay tw-font-bold tw-capitalize tw-text-white tw-leading-tight tw-mb-0">
                {headingFirstText} <br />
                {headingSecondText}
              </h1>
              <p className="sw1024:tw-text-[28px]/[32.41px] sw768:tw-text-[24px]/[30.41px] sw552:tw-text-[20px]/[28.41px] tw-text-[10px]/[14.41px] tw-font-bold tw-font-roboto tw-text-white tw-capitalize">
                {subHeadingFirstText} {width > 320 && <br />}
                {subHeadingSecondText}
              </p>
            </div>
            <div>
              <button className="tw-bg-[#ED1B24] tw-text-white sw1024:tw-text-4xl sw768:tw-text-2xl sw552:tw-text-xl tw-text-[8px] sw768:tw-px-[35px] sw552:tw-px-[30px] tw-px-[16px] sw768:tw-py-[26.5px] sw552:tw-py-[20.5px] tw-py-[6px] sw552:tw-rounded-[10px] tw-rounded-md tw-font-roboto hover:tw-bg-redHover tw-transition tw-duration-300 tw-font-bold">
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Product2 />
      <Product3 /> */}
    </>
  );
}

export default PremiumBanner;
