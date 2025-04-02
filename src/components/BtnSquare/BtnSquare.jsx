import React from 'react'
import './BtnSquare.css'
import { Button } from "react-bootstrap";

function BtnSquare({ text, backgroundColor = "#E11B24", paddingInline, onClick, className }) {
  
  return (
    <Button
      style={{
        backgroundColor: backgroundColor,
        paddingInline: paddingInline ? paddingInline : "42px",
        transition: "background 0.3s ease-in-out !important",
      }}
      className={`btn-square tw-relative tw-z-10 `}
      onClick={onClick}
    >
      <div
        className={`${className} tw-absolute -tw-z-10 tw-h-full tw-top-0 tw-right-0`}
      ></div>
      {text}
    </Button>
  );
}

export default BtnSquare