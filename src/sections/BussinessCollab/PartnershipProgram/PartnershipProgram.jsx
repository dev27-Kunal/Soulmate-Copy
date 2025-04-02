import React, { useEffect, useState } from "react";
import "./PartnershipProgram.css";
import { Button } from "react-bootstrap";
import BtnSquare from "../../../components/BtnSquare/BtnSquare";

function PartnershipProgram() {
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
    <div
      className="business-partnership-program tw-h-full tw-min-h-[1102px]"
      id="partnership-form"
    >
      <div className="business-partnership-program-blue-cover sw768:tw-h-100vh tw-h-full sw768:tw-py-0 tw-py-16 sw768:tw-px-0 tw-px-8 tw-min-h-[1102px] tw-w-full tw-flex">
        <div className="tw-h-[90%] tw-min-h-[960px] tw-pt-5 tw-min-w-[65.85%] tw-rounded-[10px] tw-bg-white tw-mx-auto tw-my-auto tw-px-9">
          <img
            src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076359/SoulmateX/l52nutxefiio25y2z46s.svg"
            alt=""
            className="tw-w-[178px]"
          />
          <h1 className="sw768:tw-text-[40px]/[54px] sw552:tw-text-[32px]/[46px] tw-text-[22px]/[32px] tw-font-bold tw-font-playfairDisplay tw-text-[#0059A9] tw-mb-7">
            Submit Your Application for the {width > 768 && <br />} Partnership
            Program
          </h1>
          <form className="tw-flex tw-flex-col tw-gap-12 tw-pb-20">
            <div className="tw-flex tw-flex-col tw-gap-7">
              <div className="tw-flex tw-justify-between sw768:tw-flex-nowrap tw-flex-wrap">
                <div className="tw-flex tw-flex-col sw768:tw-w-[48.5%] tw-w-full tw-gap-3 sw768:tw-mb-0 tw-mb-7">
                  <label className="tw-text-[#717171] tw-font-medium tw-font-roboto sw552:tw-text-xl tw-text-base">
                    First Name<span className="tw-text-[#ED1B24]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="sw552:tw-h-[74px] tw-h-12 sw552:tw-px-5 tw-px-3 tw-border tw-border-[#E1E1E1] tw-rounded-lg sw552:tw-text-xl tw-text-sm placeholder:tw-text-[#D2D2D2] placeholder:tw-font-roboto placeholder:tw-font-normal tw-font-roboto "
                  />
                </div>
                <div className="tw-flex tw-flex-col sw768:tw-w-[48.5%] tw-w-full tw-gap-3">
                  <label className="tw-text-[#717171] tw-font-medium tw-font-roboto sw552:tw-text-xl tw-text-base">
                    Last Name<span className="tw-text-[#ED1B24]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="sw552:tw-h-[74px] tw-h-12 sw552:tw-px-5 tw-px-3 tw-border tw-border-[#E1E1E1] tw-rounded-lg sw552:tw-text-xl tw-text-sm placeholder:tw-text-[#D2D2D2] placeholder:tw-font-roboto placeholder:tw-font-normal tw-font-roboto"
                  />
                </div>
              </div>
              <div className="tw-flex tw-flex-col tw-w-[100%] tw-gap-3">
                <label className="tw-text-[#717171] tw-font-medium tw-font-roboto sw552:tw-text-xl tw-text-base">
                  Email<span className="tw-text-[#ED1B24]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="sw552:tw-h-[74px] tw-h-12 sw552:tw-px-5 tw-px-3 tw-border tw-border-[#E1E1E1] tw-rounded-lg sw552:tw-text-xl tw-text-sm placeholder:tw-text-[#D2D2D2] placeholder:tw-font-roboto placeholder:tw-font-normal tw-font-roboto"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-w-[100%] tw-gap-3">
                <label className="tw-text-[#717171] tw-font-medium tw-font-roboto sw552:tw-text-xl tw-text-base">
                  Company Name<span className="tw-text-[#ED1B24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Company Name"
                  className="sw552:tw-h-[74px] tw-h-12 sw552:tw-px-5 tw-px-3 tw-border tw-border-[#E1E1E1] tw-rounded-lg sw552:tw-text-xl tw-text-sm placeholder:tw-text-[#D2D2D2] placeholder:tw-font-roboto placeholder:tw-font-normal tw-font-roboto"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-w-[100%] tw-gap-3">
                <label className="tw-text-[#717171] tw-font-medium tw-font-roboto sw552:tw-text-xl tw-text-base">
                  What Type of Partnership Are You Looking For?
                  <span className="tw-text-[#ED1B24]">*</span>
                </label>
                <select className="sw552:tw-h-[74px] tw-h-12 sw552:tw-px-5 tw-px-3 tw-border tw-border-[#E1E1E1] tw-rounded-lg sw552:tw-text-xl tw-text-sm placeholder:tw-text-[#D2D2D2] placeholder:tw-font-roboto placeholder:tw-font-normal tw-font-roboto tw-appearance-none sw552:tw-bg-16 tw-bg-8 tw-bg-customDropdown tw-bg-no-repeat tw-bg-[center_right_1.25rem] tw-text-[#414141] tw-capitalize">
                  <option value="">Select Partnership Type</option>
                  <option value="">Collaboration</option>
                </select>
              </div>
            </div>
            <div className="tw-flex tw-justify-center">
              <button className="partnership-program-btn tw-bg-[#0059A9] tw-text-white tw-font-bold tw-font-roboto sw768:tw-text-4xl sw552:tw-text-2xl tw-text-lg tw-w-[90%] tw-py-5 tw-px-4 tw-rounded-[10px] tw-relative tw-z-10 tw-overflow-hidden">
                Let’s Build Something Great Together !
                <div className="partnership-program-btn-linear-gradient tw-absolute -tw-z-10 tw-overflow-hidden tw-h-full tw-top-0 tw-right-0"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PartnershipProgram;
