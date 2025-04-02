import React, { useEffect, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import './PartnerNumbers.css'

function CountCards({ num, numHeading, title, image, currentWidth }) {
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
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-between sw1024:tw-gap-8 tw-gap-6">
      <div className="tw-bg-white tw-p-5 tw-rounded-xl">
        <img src={image} alt="" />
      </div>
      <div className="tw-flex tw-flex-col sw1024:tw-gap-4 sw768:tw-gap-3 sw552:tw-gap-2 tw-gap-1">
        <div className="tw-flex tw-items-center sw1024:tw-gap-4 sw768:tw-gap-3 sw552:tw-gap-2 tw-gap-1 tw-justify-center">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: index + 5,
            })}
            animateToNumber={num}
            fontStyle={{
              fontFamily: "Roboto",
              fontSize: width > 1024 ? "4.4vw" : width > 768 ? 48 : 34,
              color: "#0059A9",
              fontWeight: "700",
              lineHeight:
                width > 1024 ? "75px" : width > 768 ? "64.31px" : "50.31px",
            }}
          />
          <h3 className="tw-text-[#0059A9] tw-font-bold sw1024:tw-text-[4.4vw]/[85.31px] sw768:tw-text-5xl/[64.31px] tw-text-[34px]/[50.31px] tw-font-roboto tw-mb-0">
            +
          </h3>
          <h3 className="tw-text-[#0059A9] tw-font-bold sw1024:tw-text-[2.5vw]/[85.31px] sw768:tw-text-5xl/[64.31px] tw-text-[34px]/[50.31px] tw-font-roboto tw-mb-0">
            {numHeading}
          </h3>
        </div>
        <h6 className="tw-text-[#ED1B24] sw1024:tw-text-[28px]/[32.41px] sw768:tw-text-[26px]/[30.41px] tw-text-[24px]/[28.41px] tw-font-roboto tw-font-semibold tw-text-center">
          {title}
        </h6>
      </div>
    </div>
  );
}

function PartnerNumbers() {
  const [num, setNum] = useState(80);
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
    <div className="tw-h-[100%] tw-w-full tw-min-h-[1024px]">
      <div className="tw-h-full tw-min-h-[1024px] tw-w-full tw-py-12 tw-mx-auto tw-flex tw-flex-col tw-justify-evenly tw-gap-8">
        <div className="tw-flex tw-flex-col sw1024:tw-gap-8 sw552:tw-gap-6 tw-gap-4 tw-w-[80.7%] tw-mx-auto ">
          <div className="tw-flex tw-flex-col tw-gap-4">
            <h1 className="sw1024:tw-text-[64px]/[85.31px] sw768:tw-text-5xl/[64.31px] sw552:tw-text-[34px]/[50.31px] tw-text-[28px]/[36.31px] tw-text-[#0059A9] tw-font-playfairDisplay tw-font-bold tw-mb-0">
              Why Partner With{" "}
              <span className="tw-text-[#ED1B24]">Soulmate</span> X?
            </h1>
            <span className="tw-text-[#1F1D1E] sw1024:tw-text-[28px]/[32.41px] sw768:tw-text-[26px]/[30.41px] sw552:tw-text-[24px]/[28.41px] tw-text-[18px]/[26.41px] tw-font-roboto tw-font-semibold">
              Numbers Don’t Lie – See How Our Partnerships Flourish
            </span>
          </div>
          <span className="tw-text-[#979797] tw-font-medium tw-font-roboto sw1024:tw-text-2xl/[28.31px] sw768:tw-text-[23px]/[26.31px] sw552:tw-text-[21px]/[26.41px] tw-text-[14px]/[22.41px] ">
            “We believe in building partnerships that create tangible value. Our
            metrics showcase the {width > 1200 && <br />}success stories of our
            collaborators, driving growth and impactful engagement worldwide.”
          </span>
        </div>
        <div className="tw-w-[88%] tw-bg-[#F0F8FE] tw-min-h-[360px] tw-mx-auto tw-rounded-2xl tw-flex tw-flex-wrap tw-justify-evenly tw-items-center tw-py-8 tw-px-4 tw-gap-8">
          <CountCards
            image="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076373/SoulmateX/gudpda7f5gwaudnbcnv6.svg"
            numHeading={"Million"}
            title={"Revenue Generated"}
            num={80}
            currenWidth={width}
          />
          <CountCards
            image="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076374/SoulmateX/risbujgzcralxvf6lfqv.svg"
            numHeading={"Million"}
            title={"User’s Engaged"}
            num={80}
            currenWidth={width}
          />
          <CountCards
            image="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076363/SoulmateX/mikqn0t4evlqmfaxqxzp.svg"
            numHeading={"Thousand"}
            title={"Active Partners"}
            num={80}
            currenWidth={width}
          />
        </div>
        <div className="tw-mx-auto">
          <button
            className="partner-number-btn tw-bg-[#ED1B24] tw-text-white tw-font-bold tw-font-roboto sw768:tw-text-4xl sw552:tw-text-2xl tw-text-lg tw-py-6 tw-px-12 tw-rounded-[10px] tw-relative tw-z-10 tw-overflow-hidden"
            onClick={() => {
              const element = document.getElementById("partnership-form");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <div className="partner-number-btn-linear-gradient tw-absolute -tw-z-10 tw-overflow-hidden tw-h-full tw-top-0 tw-right-0"></div>
            Ready to Grow with Us?
          </button>
        </div>
      </div>
    </div>
  );
}

export default PartnerNumbers;
