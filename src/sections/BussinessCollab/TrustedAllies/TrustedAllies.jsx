import React from "react";
import "./TrustedAllies.css";
import Marquee from "react-fast-marquee";

function TrustedAllies() {
  const allies = Array.from({ length: 8 }, (_, index) => `Ally ${index + 1}`);

  return (
    <div className="tw-w-full">
      <div className="tw-py-12">
        <div className="tw-flex tw-items-center tw-flex-col tw-w-[80.7%] tw-m-auto tw-mb-10">
          <h1 className="tw-text-center tw-font-playfairDisplay tw-font-bold sw1024:tw-text-[64px]/[85.31px] sw768:tw-text-5xl/[64.31px] sw552:tw-text-[34px]/[50.31px] tw-text-[28px]/[36.31px] tw-text-[#0059A9]">
            “Our Trusted Allies”
          </h1>
          <span className="tw-text-center tw-font-roboto sw768:tw-text-2xl/[28.13px] sw552:tw-text-[22px]/[35.19px] tw-text-[18px]/[28.19px] tw-font-medium tw-text-[#1F1D1E]">
            Building success together with visionary partners
          </span>
        </div>
        <div className="tw-relative tw-overflow-hidden tw-flex tw-flex-col tw-gap-8">
          <div className="trusted-allies-list-section tw-absolute tw-w-full tw-h-full tw-z-10"></div>
          {/* <div className="tw-h-full tw-gap-8 trusted-allies-animate-first-row">
          </div> */}
          <Marquee direction="left" speed={200}>
            {allies.map(() => (
              <div className="tw-bg-[#e4f2fe] tw-w-[280px] tw-h-20 tw-rounded-lg tw-z-0 tw-mx-4"></div>
            ))}
          </Marquee>
          <Marquee direction="right" speed={200}>
            {allies.map(() => (
              <div className="tw-bg-[#e4f2fe] tw-w-[280px] tw-h-20 tw-rounded-lg tw-z-0 tw-mx-4"></div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default TrustedAllies;
