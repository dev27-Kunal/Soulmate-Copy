import React from "react";

function UpgradePremium({ componentScreen, children }) {
  return (
    <div className="tw-w-full tw-bg-black ">
      <div className="sw768:tw-min-h-[1067px] sw552:tw-min-h-[680px] tw-min-h-[450px] tw-py-9 tw-w-[80.7%] tw-mx-auto tw-flex tw-flex-col tw-items-center tw-justify-evenly">
        <div className="tw-text-center">{children}</div>
        <div className="tw-w-full tw-max-w-6xl tw-flex tw-flex-row tw-justify-center tw-items-center sw552:tw-gap-6 tw-gap-4">
          <div className="sw768:tw-w-1/3 tw-w-[30%] tw-bg-gray-200 tw-rounded-[15px] sw768:tw-h-[550px] sw552:tw-h-[300px] tw-h-[180px]"></div>

          <div className="sw768:tw-w-2/5 tw-w-[40%] tw-bg-gray-200 tw-rounded-[15px] sw768:tw-h-[650px] sw552:tw-h-[400px] tw-h-[240px] tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-p-6">
            <p className="tw-text-gray-800 tw-font-medium sw768:tw-text-lg sw552:tw-text-xl tw-text-sm">
              Mobile App Screenshots,
              <br />
              Highlighting {componentScreen}
              <br />
              Features
            </p>
          </div>

          <div className="sw768:tw-w-1/3 tw-w-[30%] tw-bg-gray-200 tw-rounded-[15px] sw768:tw-h-[550px] sw552:tw-h-[300px] tw-h-[180px]"></div>
        </div>
      </div>
    </div>
  );
}

export default UpgradePremium;
