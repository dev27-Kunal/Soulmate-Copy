import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./LoveStory.css";
import BtnRound from "../../../components/BtnRound/BtnRound";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

function LoveStory() {
  const para = [
    "Matches are made in heaven, but found here.",
    "Your stars align when hearts connect.",
    "The right connection starts with the right conversation.",
  ];
  return (
    <div className="love-story-main-container">
      <div className="love-story-container">
        {window.innerWidth > 648 ? (
          para.map((item) => (
            <div className="love-story-icon-container">
              <div className="border-Icon">
                <div className="borderLine"></div>
                <FavoriteIcon
                  sx={{ fontSize: 32, color: "#ED1B24", marginInline: 0 }}
                />
                <div className="borderLine"></div>
              </div>
              <h1 className="love-story-para tw-font-playfairDisplay">{item}</h1>
              <div className="border-Icon">
                <div className="borderLine"></div>
                <FavoriteIcon
                  sx={{ fontSize: 32, color: "#ED1B24", marginInline: 0 }}
                />
                <div className="borderLine"></div>
              </div>
            </div>
          ))
        ) : (
          <Swiper
            modules={[Navigation, Autoplay]}
            className="love-story-swiper"
            spaceBetween={30}
            autoplay
            loop
            // onSwiper={(swiper) => setSwiperInstance(swiper)}
            // onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          >
            {para.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="love-story-icon-container">
                  <div className="border-Icon">
                    <div className="borderLine"></div>
                    <FavoriteIcon
                      sx={{ fontSize: 32, color: "#ED1B24", marginInline: 0 }}
                    />
                    <div className="borderLine"></div>
                  </div>
                  <h1 className="love-story-para tw-font-playfairDisplay">{item}</h1>
                  <div className="border-Icon">
                    <div className="borderLine"></div>
                    <FavoriteIcon
                      sx={{ fontSize: 32, color: "#ED1B24", marginInline: 0 }}
                    />
                    <div className="borderLine"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      {/* <div className="btnContainer">
        <BtnRound
          text={"Unlock Your Love Story"}
          customClass="love-story-hover-btn"
        />
      </div> */}
    </div>
  );
}

export default LoveStory;
