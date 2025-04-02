import React from "react";
import "./LoveCard.css";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { useDispatch, useSelector } from "react-redux";
import { setLoveCardVisualCue } from "../../store/slice";

function LoveCard({ item }) {
  const visualCue = useSelector((state) => state.dataStore.loveCardVisualCue);
  const dispatch = useDispatch();
  // console.log("item: ", item);

  return (
    <div
      style={{ backgroundImage: `url(${item.image})` }}
      className="landing-love-card"
    >
      {(window.innerWidth <= 768 && visualCue) && (
        <div
          className="tw-bg-black tw-h-full tw-relative tw-z-[2] tw-w-full tw-bg-opacity-55 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-rounded-[15px]"
          onClick={() => dispatch(setLoveCardVisualCue(true))}
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
      <div className="landing-love-card-linear-gradient">
        <div className="landing-love-card-text-container">
          <h2 className="landing-love-card-heading mb-0">{item.name}</h2>
          <span className="landing-love-card-sub-heading">
            {item.subheading}
          </span>
          <span className="landing-love-card-para">{item.para}</span>
        </div>
      </div>
    </div>
  );
}

export default LoveCard;
