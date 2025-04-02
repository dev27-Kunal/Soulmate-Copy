import React from "react";

function Features({icons, btnText}) {
  

  return (
    <>
      <div className="tw-w-full sw768:tw-py-[163px] sw552:tw-py-[120px] tw-py-[80px]">
        <div className="tw-w-[80.7%] tw-mx-auto">
          <div className="tw-flex tw-flex-col sw1024:tw-gap-[163px] sw552:tw-gap-[100px] tw-gap-[42px]">
            <div className="tw-flex tw-flex-col sw768:tw-gap-[98px] tw-gap-[54px]">
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  className="tw-items-start tw-flex tw-flex-col tw-gap-5"
                >
                  <div className="tw-bg-productFeature tw-mb-3 tw-w-[112px] tw-h-[112px] tw-rounded-[11px] tw-flex tw-justify-center tw-items-center ">
                    <img
                      src={icon.src}
                      alt={icon.title}
                      className="tw-w-[62px] tw-h-[62px] "
                    />
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <h2 className="tw-font-bold sw1024:tw-text-[64px]/[85.31px] sw768:tw-text-5xl/[64.31px] sw552:tw-text-[34px]/[50.31px] tw-text-[28px]/[36.31px] tw-text-[#000000] tw-font-playfairDisplay tw-leading-[100%] tw-tracking-[0%] tw-capitalize tw-mb-3">
                      {icon.title}
                    </h2>
                    <h2 className="tw-text-black sw1024:tw-text-[32px]/[38.41px] sw768:tw-text-[28px]/[32.41px] sw552:tw-text-[24px]/[30.41px] tw-text-[18px]/[26.41px] tw-font-normal tw-font-roboto tw-capitalize">
                      {icon.description}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <div className="tw-flex tw-justify-center">
              <button className="tw-bg-red-600 hover:tw-bg-redHover tw-text-white tw-font-bold sw552:tw-py-[26.5px] tw-py-[20.5px] sw552:tw-px-[35px] tw-px-[28px] tw-rounded-[10px] sw768:tw-text-[35.25px] sw552:tw-text-[24.25px] tw-text-[20.25px] tw-transition-colors tw-mt-6">
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
