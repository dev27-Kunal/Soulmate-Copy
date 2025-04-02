import React, { useEffect, useState } from "react";
import "./BecomePartner.css";
import BtnSquare from "../../../components/BtnSquare/BtnSquare";
import { useLocation, useNavigate } from "react-router";

function BecomePartner({ spaceEvenly }) {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate()
  const path = useLocation()

  useEffect(() => {
    // console.log(width);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="landing-become-partner">
      <div className="landing-become-partner-linear-gradient">
        <div
          className={`landing-become-partner-content-container ${
            width <= 768 && spaceEvenly
              ? `tw-justify-evenly`
              : `tw-justify-around`
          }`}
        >
          <div className="landing-become-partner-heading-subheading">
            <h1 className="landing-become-partner-heading ">
              “Empowering Growth
              <br />
              Through Strategic
              <br />
              Partnerships”
            </h1>
            <span className="landing-become-partner-subheading">
              COLLABORATE. GROW. SUCCEED.
            </span>
          </div>
          <div>
            <BtnSquare
              text={"Become a Partner"}
              backgroundColor="#0059A9"
              paddingInline="7vw"
              className="landing-become-partner-hover-btn"
              onClick={() => {
                if(path.pathname != "/business"){
                  navigate('/business')
                  .then(() => {
                    const element = document.getElementById("partnership-form");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  })
                }
                const element = document.getElementById("partnership-form");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomePartner;
