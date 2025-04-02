import React from "react";
// import LandingVideo from "../../assets/LandingVideo.svg";
import "./Landing.css";
import Hero from "../../sections/Landing/Hero/Hero";
import LoveStory from "../../sections/Landing/LoveStory/LoveStory";
import RevealLoveStar from "../../sections/Landing/RevealLoveStar/RevealLoveStar";
import PeopleTrust from "../../sections/Landing/PeopleTrust/PeopleTrust";
import LoveJournal from "../../sections/Landing/LoveJournal/LoveJournal";
import BecomePartner from "../../sections/Landing/BecomePartner/BecomePartner";
import RealPeople from "../../sections/Landing/RealPeople/RealPeople";
import AppBanner from "../../sections/Landing/AppBanner/AppBanner";
import LanguageModal from "../../components/LanguageModal/LanguageModal";

function Main() {
  return (
    <>
      <Hero />
      <div style={{ backgroundColor: "#FEF6F6" }}>
        <LoveStory />
      </div>
      <RevealLoveStar />
      <PeopleTrust />
      <LoveJournal />
      <BecomePartner />
      <RealPeople />
      <AppBanner />
    </>
  );
}

export default Main;
