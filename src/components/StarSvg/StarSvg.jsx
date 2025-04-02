import React from "react";
import "./StarSvg.css";

function StarSvg({ top, left, width, height }) {
  console.log("Left: ", left);

  return (
    <div
      className={`tw-border tw-border-red-600 tw-border-solid svg-star tw-absolute tw-top-[${top}] tw-left-[${left}%]`}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.6518 37.7068L66 33.0263L40.6518 28.2932L47.1203 18.8271L37.7068 25.3482L33.0263 0L28.2932 25.3482L18.8271 18.8271L25.3482 28.2932L0 33.0263L25.3482 37.7068L18.8271 47.1203L28.2932 40.6518L33.0263 66L37.7068 40.6518L47.1203 47.1203L40.6518 37.7068Z"
          fill="#FEFEFE"
        />
      </svg>
    </div>
  );
}

export default StarSvg;
