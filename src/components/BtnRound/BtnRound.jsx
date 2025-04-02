import React from 'react'
import { Button } from 'react-bootstrap'
import './BtnRound.css'

function BtnRound({ text, backgroundColor = "#E11B24", customClass, onClick }) {
  return (
    <button
      // style={{ "--main-color": backgroundColor }}
      style={{ "--main-color": backgroundColor }}
      className={`btn-round tw-relative tw-z-10 ${customClass} tw-font-roboto`}
      onClick={onClick}
    >
      <div className='btn-round-gradient tw-absolute -tw-z-10 tw-bg-redHover tw-h-full tw-top-0 tw-right-0'></div>
      {text}
    </button>
  );
}

export default BtnRound