import React, { useEffect, useState } from "react";
import PremiumBanner from "../../sections/Premium/PremiumBanner/PremiumBanner";
import UpgradePremium from "../../sections/Premium/UpgradePremium/UpgradePremium";
import Features from "../../sections/Premium/Features/Features";

function Premium() {
  const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  const icons = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344288/SoulmateX/t9o58jzy0gzkaigb6js4.svg",
      title: "Swipe Without Limits!",
      description:
        "No daily swipe restrictions – explore all potential matches freely!",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344428/SoulmateX/ecigquflbzylcajdus6j.svg",
      title: "Unlock Deeper Zodiac Insights!",
      description:
        "Get Detailed Compatibility Reports And Personalized Matchmaking Based On Astrology.",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344493/SoulmateX/hqmfz0nqgdiy2nfvbdg5.svg",
      title: "Priority Customer Support",
      description:
        "Get faster assistance with priority support for premium users.",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344534/SoulmateX/y6cmbt1qfjfurdajprwb.svg",
      title: "Ad-Free Experience",
      description:
        "Enjoy Soulmate X without distractions—no ads, just connections.",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344576/SoulmateX/f4nrklbhhbw391ks25f9.svg",
      title: "Limited Profile Boosts",
      description:
        "Use your weekly boost to appear at the top and attract more attention instantly.",
    },

    {
      id: 5,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344640/SoulmateX/i25fehdjaypfqn3utocr.svg",
      title: "Decode Love with Astrology!",
      description:
        "Premium members enjoy full access to expert articles, podcasts, and celestial guidance.",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344701/SoulmateX/cog4tyq4xzlvcnaq8owh.svg",
      title: "Browse Invisibly",
      description:
        "View profiles without appearing in their visitors list—match on your terms.",
    },
  ];

  return (
    <>
      <PremiumBanner
        backgroundImage={"tw-bg-premiumCover"}
        headingFirstText={"“Unlock a Smarter"}
        headingSecondText={"Way to Find Love!”"}
        subHeadingFirstText={
          "More matches, more features, more chances to find"
        }
        subHeadingSecondText={`"The One." Upgrade your dating experience today.`}
        btnText={"Get Premium & Match Better"}
        componentScreen={"Premium"}
      />
      <UpgradePremium componentScreen={"Premium"}>
        <h1 className="sw1024:tw-text-[64px]/[85.31px] sw768:tw-text-5xl/[64.31px] sw552:tw-text-[34px]/[50.31px] tw-text-[24px]/[30.31px] tw-font-bold tw-text-white tw-font-playfairDisplay">
          Upgrade Your Love Story {width > 397 && <br />}
          With{" "}
          <span
            className="tw-text-premiumTextGradient"
            style={{
              backgroundImage:
                "linear-gradient(89.03deg, #ED1B24 3.44%, #ED1B24 45.38%, #F868E7 99.16%)",
              color: "transparent",
              backgroundClip: "text",
            }}
          >
            Premium Plan
          </span>
        </h1>
      </UpgradePremium>
      <Features icons={icons} btnText={"Get Premium & Match Better"} />
    </>
  );
}

export default Premium;
