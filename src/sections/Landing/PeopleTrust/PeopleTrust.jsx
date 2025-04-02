import React, { useEffect } from "react";
import "./PeopleTrust.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import Emergency from '../../../assets/Emergency.svg'
import BlockIcon from "@mui/icons-material/Block";

function PeopleTrust() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("square-animation");
        }
      });
    });

    observer.observe(document.querySelector(".people-trust"));

  })
  return (
    <div className="people-trust" id="peopleTrust">
      <div className="people-trust-linear-gradient">
        <div className=" people-trust-outer-container">
          <div className=" people-trust-inner-container">
            <h1 className="people-trust-heading">
              "Why People
              <br />
              Trust Soulmate X?"
            </h1>
            <h2 className="people-trust-sub-heading">
              YOUR SAFETY,
              <br />
              ALWAYS OUR FIRST
              <br />
              PRIORITY !!
            </h2>
            <div className="people-trust-icon-text-container-wrapper">
              <div className="people-trust-icon-text-container">
                <VerifiedIcon
                  className="people-trust-icon"
                />
                <span className="people-trust-icon-text">
                  100% Verified Profile
                </span>
              </div>
              <div className="people-trust-icon-text-container">
                <img
                  src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076350/SoulmateX/qabgulmknee4vr760ngi.svg"
                  alt=""
                  className="people-trust-sos-icon"
                />
                <span className="people-trust-icon-text">One-Tap SOS</span>
              </div>
              <div className="people-trust-icon-text-container">
                <BlockIcon
                  className="people-trust-icon"
                />
                <span className="people-trust-icon-text">
                  Instant Block & Report
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleTrust;
