import React from "react";
import "./EnvelopeCard.css";
import EnvelopeFront from "../../assets/EnvelopeFront.svg";
import EnvelopeBack from "../../assets/EnvelopeBack.svg";
import Calendar from "../../assets/Calendar.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useNavigate } from "react-router";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import { useDispatch, useSelector } from "react-redux";
import { setLoveJournalVisualCue } from "../../store/slice";

function EnvelopeCard({ item }) {
  // console.log("item: ", item);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const visualCue = useSelector(
    (state) => state.dataStore.loveJournalVisualCue
  );
  

  return (
    <div>
      <div className="envelope-card">
        <div style={{ width: "100%" }}>
          <img
            src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076351/SoulmateX/ksv6bxjzxfb2upeufyb1.svg"
            alt=""
            className="envelope-back"
          />
          <div style={{ height: "4vh" }}></div>
        </div>
        <div className="envelope-image-div">
          <button
            className="tw-bg-[#ED1B24] sw552:tw-p-3 tw-p-1 tw-top-5 tw-right-5 tw-absolute tw-rounded-full envelope-card-btn-wrapper"
            onClick={() => {
              navigate(`/loveJournal/${item.id}`, { state: item });
            }}
          >
            <ArrowForwardIcon sx={{ rotate: "-32.34deg", color: "#ffffff" }} />
          </button>
          {window.innerWidth <= 768 && visualCue && (
            <div
              className="tw-bg-black tw-h-full tw-w-full tw-absolute tw-bg-opacity-55 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2"
              onClick={() => dispatch(setLoveJournalVisualCue(true))}
            >
              <AdsClickIcon
                sx={{ fontSize: 24 }}
                className="tw-animate-colorChange"
              />
              <span className="tw-font-roboto tw-capitalize tw-animate-colorChange">
                Tap to see content
              </span>
            </div>
          )}
          <img src={item.image} alt="" className="envelope-image" />
          <div className="envelope-card-btn-wrapper tw-absolute sw552:tw-bottom-[35%] tw-bottom-16 tw-left-0 tw-right-0 tw-justify-center">
            <button
              className="tw-bg-[#ED1B24] tw-py-1 sw552:tw-px-8 tw-px-6 tw-rounded-md sw552:tw-text-xl tw-font-medium tw-text-white"
              onClick={() => {
                navigate(`/loveJournal/${item.id}`, { state: item });
              }}
            >
              Read More
            </button>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076353/SoulmateX/zc4eqennvt5qwxwymkwa.svg"
          alt=""
          className="envelope-front"
        />
        <div className="envelope-content">
          <h1 className="envelope-card-heading">{item.heading}</h1>
          <div className="envelope-bottom">
            <div style={{ display: "flex" }}>
              <img
                src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076350/SoulmateX/lwxrgnpra5l4wyzrd5wy.svg"
                alt=""
                style={{ marginRight: "0.5rem" }}
              />
              <span className="envelope-bottom-text">{item.date}</span>
            </div>
            <span className="envelope-bottom-text">{item.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnvelopeCard;
