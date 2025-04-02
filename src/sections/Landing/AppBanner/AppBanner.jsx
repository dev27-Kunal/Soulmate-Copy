import React from "react";
import "./AppBanner.css";
// import MobileImage from '../../../assets/MobileImage.svg'
// import AppStore from '../../../assets/AppStoreBadge.svg'
// import PlayStore from '../../../assets/PlayStoreBadge.svg'

function AppBanner() {
  return (
    <div className="landing-app-banner tw-flex tw-justify-center tw-flex-wrap-reverse tw-px-6">
      <div className="sm1048:tw-w-[45%] sm1048:tw-max-w-[40.35%] tw-w-[100%] tw-h-full landing-app-banner-first-half sw1024:tw-py-12 tw-pt-12 tw-flex tw-flex-col tw-justify-normal sm1048:tw-justify-around sm1048:tw-items-start tw-items-center tw-gap-8">
        <h1 className="tw-font-playfairDisplay sm1048:tw-text-[64px] sw598:tw-text-[54px] tw-text-[42px] tw-font-bold sm1048:tw-text-left tw-text-center">
          "Your Match,
          <br /> Anytime, Anywhere"
        </h1>
        <div className="tw-flex tw-flex-col tw-gap-3">
          <h2 className="tw-font-roboto sw484:tw-text-[40px] tw-text-[32px] tw-font-bold tw-text-[#ED1B24] tw-mb-0 tw-text-center sm1048:tw-text-left">
            A 98% MATCH IS WAITING
            <br /> FOR YOU!
          </h2>
          <h3 className="tw-font-roboto sw484:tw-text-[24px] tw-text-[16px] tw-font-bold tw-text-[#ED1B24] tw-text-center sm1048:tw-text-left">
            DOWNLOAD & SEE WHO’S WAITING??
          </h3>
          <div className="tw-flex tw-gap-3 sm1048:tw-justify-start tw-justify-center">
            <img
              src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076349/SoulmateX/ynlh04rsd9ghv8lmj7z3.svg"
              alt=""
              className="sw598:tw-w-[200px] sw484:tw-w-[200px] sw364:tw-w-[150px] tw-w-[120px]"
            />
            <img
              src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076364/SoulmateX/nqnna5walr5mh5t7xqrh.svg"
              alt=""
              className="sw598:tw-w-[222px] sw484:tw-w-[222px] sw364:tw-w-[168px] tw-w-[140px]"
            />
          </div>
        </div>
      </div>
      <div className="sm1048:tw-max-w-[40.35%] tw-h-full landing-app-banner-first-half tw-flex tw-justify-center tw-items-center ">
        <img
          src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076361/SoulmateX/tyq5gkmlj8m26kr7qdce.svg"
          alt=""
          className="sw690:tw-w-[100%] sm1048:tw-w-[100%]"
        />
      </div>
    </div>
  );
}

export default AppBanner;
