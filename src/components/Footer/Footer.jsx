import React, { useState } from "react";
import "./Footer.css";
// import Logo from "../../assets/Logo.svg";
// import FooterLogo from "../../assets/FooterLogo.svg";
// import AppStore from "../../assets/AppStoreBadge.svg";
// import PlayStore from "../../assets/PlayStoreBadge.svg";
import { Button } from "react-bootstrap";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageModal from "../LanguageModal/LanguageModal";
import { NavLink, useLocation } from "react-router";

function Footer() {
  const [languageModal, setLanguageModal] = useState(false);
  const FooterLegalOpions = [
    {
      name: "Security",
    },
  ];
  const path = useLocation();

  return (
    <div className="footer sw800:tw-h-[100%] tw-min-h-[564px] tw-h-[100%] tw-py-24 tw-flex sw800:tw-px-[75px]">
      <div className="sw1154:tw-w-[90.7%] sw1024:tw-w-[95.7%] tw-w-[85.7%] tw-h-[100%] tw-min-h-[442px] tw-my-auto tw-ms-auto tw-me-auto tw-flex tw-flex-col sw800:tw-justify-between sw1024:tw-gap-0 tw-gap-12">
        <div className="tw-h-[100%] sw1024:tw-grid sw1024:tw-grid-cols-2 sw800:tw-justify-between tw-justify-center tw-flex-wrap sw800:tw-gap-12 tw-gap-8">
          <div className="tw-flex tw-flex-col tw-justify-between tw-h-full sw1024:tw-items-start tw-items-center sw1024:tw-gap-0 tw-gap-4 sw1024:tw-mb-0 tw-mb-14">
            <img
              src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076354/SoulmateX/dfgqwbrk4uhydfyhgaal.svg"
              alt=""
              className="tw-w-60"
            />
            <div className="tw-flex tw-flex-col tw-gap-16 sw1024:tw-items-start tw-items-center">
              {path.pathname !== "/" && (
                <div className="tw-flex tw-gap-3">
                  <img
                    src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076349/SoulmateX/ynlh04rsd9ghv8lmj7z3.svg"
                    alt=""
                    className=" sw1093:tw-w-[200px] sw1024:tw-w-[150px] sw484:tw-w-[200px] sw444:tw-w-[150px] tw-w-[120px]"
                  />
                  <img
                    src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076364/SoulmateX/nqnna5walr5mh5t7xqrh.svg"
                    alt=""
                    className="sw1093:tw-w-[222px] sw1024:tw-w-[168px] sw484:tw-w-[222px] sw444:tw-w-[168px] tw-w-[140px]"
                  />
                </div>
              )}
              {window.innerWidth > 1024 && (
                <span className="tw-text-[20px] tw-font-normal tw-font-roboto tw-text-[#000000] sw800:tw-text-left tw-text-center tw-uppercase">
                  Copyright © 2025 – Soulmate X. All rights reserved.
                </span>
              )}
            </div>
          </div>
          <div className="tw-flex sw552:tw-justify-between sw552:tw-flex-row tw-flex-col tw-gap-12">
            <div className="tw-flex tw-flex-col sw552:tw-items-start tw-items-center sw1024:tw-gap-2 tw-gap-4">
              <h1 className="sw552:tw-text-2xl/[117%] tw-text-3xl tw-font-roboto tw-font-bold tw-uppercase tw-text-[#313131] tw-mb-0">
                Legal
              </h1>
              <div className="tw-flex tw-flex-col sw552:tw-items-start tw-items-center sw800:tw-gap-[10px] sw1024:tw-gap-[10px] tw-gap-3">
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Security
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Terms and Conditions
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Privacy Policy
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Cookie Policy
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Consumer Health Data Privacy Policy
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Your Privacy Choices
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Colorado safety Policy Information
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  The Washington Consumer Health Data Privacy Act (CHDPA)
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Safety Centre
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Dating Confidence Report
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Notice At Collection
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Community Guidelines
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-[16px] sw552:tw-text-start tw-text-center tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-tex tw-no-underline">
                  Modern Slavery Act Statement
                </NavLink>
              </div>
            </div>
            <div className="tw-flex tw-flex-col sw1024:tw-items-start sw552:tw-items-end tw-items-center sw1024:tw-gap-6 tw-gap-8">
              <div className="tw-w-[12rem] ">
                <Button
                  className="footer-lang-btn"
                  onClick={() => setLanguageModal(true)}
                >
                  <LanguageIcon sx={{ fontSize: "2rem" }} />
                  Language
                </Button>
              </div>
              <div className="tw-flex tw-flex-col sw1024:tw-items-start sw552:tw-items-end tw-items-center sw1024:tw-gap-[10px] tw-gap-3">
                <NavLink className="tw-font-roboto sw1024:tw-text-start tw-text-end sw1024:tw-text-[16px] tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-no-underline">
                  Cities
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-start tw-text-end sw1024:tw-text-[16px] tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-no-underline">
                  Chat
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-start tw-text-end sw1024:tw-text-[16px] tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-no-underline">
                  Help Centre
                </NavLink>
                <NavLink className="tw-font-roboto sw1024:tw-text-start tw-text-end sw1024:tw-text-[16px] tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-no-underline">
                  FAQ
                </NavLink>
                <NavLink
                  className="tw-font-roboto sw1024:tw-text-start tw-text-end sw1024:tw-text-[16px] tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-no-underline"
                  to={"/loveJournal"}
                >
                  Love Journal
                </NavLink>
                <NavLink
                  className="tw-font-roboto sw1024:tw-text-start tw-text-end sw1024:tw-text-[16px] tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-no-underline"
                  to={"/premium"}
                >
                  Premium Plan
                </NavLink>
                <NavLink
                  className="tw-font-roboto sw1024:tw-text-start tw-text-end sw1024:tw-text-[16px] tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-no-underline"
                  to={"/vip"}
                >
                  VIP Plan
                </NavLink>
                <NavLink
                  className="tw-font-roboto sw1024:tw-text-start tw-text-end sw1024:tw-text-[16px] tw-text-xl tw-text-[#313131] tw-font-medium tw-capitalize tw-no-underline"
                  to={"/business"}
                >
                  Business Collaborations
                </NavLink>
              </div>
              <div className="tw-flex tw-flex-col sw1024:tw-items-start sw552:tw-items-end tw-items-center sw1024:tw-gap-3 sw552:tw-gap-4 tw-gap-6">
                <h1 className="sw552:tw-text-2xl/[117%] tw-text-3xl tw-font-roboto tw-font-bold tw-uppercase tw-text-[#313131] tw-mb-0">
                  Follow Us
                </h1>
                <div className="tw-flex tw-gap-4 tw-items-center">
                  {/* <FacebookRoundedIcon
                  sx={{ fontSize: "2.25rem", color: "#1F1D1E" }}
                />
                <XIcon sx={{ fontSize: "2.25rem", color: "#1F1D1E" }} />
                <YouTubeIcon sx={{ fontSize: "2.25rem", color: "#1F1D1E" }} />
                <InstagramIcon sx={{ fontSize: "2.25rem", color: "#1F1D1E" }} /> */}

                  <div className="tw-bg-[#1F1D1E] tw-px-2 tw-py-1 tw-rounded-full">
                    <i className="bx bxl-facebook tw-text-white tw-text-2xl"></i>
                  </div>
                  <div className="tw-bg-[#1F1D1E] tw-px-2 tw-py-1 tw-rounded-full">
                    <i class="bx bxl-linkedin tw-text-white tw-text-2xl"></i>
                  </div>
                  <div className="tw-bg-[#1F1D1E] tw-px-2 tw-py-1 tw-rounded-full">
                    <i class="bx bxl-instagram-alt tw-text-white tw-text-2xl"></i>
                  </div>
                  <div className="tw-bg-[#1F1D1E] tw-px-2 tw-py-1 tw-rounded-full">
                    <i class="bx bxl-twitter tw-text-white tw-text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {window.innerWidth <= 1024 && (
          <span className="tw-text-[20px] tw-font-normal tw-font-roboto tw-text-[#000000] sw1024:tw-text-left tw-text-center tw-uppercase">
            Copyright © 2025 – Soulmate X. All rights reserved.
          </span>
        )}
      </div>
      <LanguageModal
        openLanguageModal={languageModal}
        setLanguageModal={setLanguageModal}
      />
    </div>
  );
}

export default Footer;
