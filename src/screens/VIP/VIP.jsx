import React from 'react'
import PremiumBanner from "../../sections/Premium/PremiumBanner/PremiumBanner";
import UpgradePremium from "../../sections/Premium/UpgradePremium/UpgradePremium";
import Features from "../../sections/Premium/Features/Features";

function VIP() {

    
  const icons = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344288/SoulmateX/t9o58jzy0gzkaigb6js4.svg",
      title: "No Limits, No Barriers!",
      description: "Get unrestricted swipes & unlimited matches every day.",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741350887/SoulmateX/qyydnkutqlxjhyxgwi3i.svg",
      title: "Unlimited Video & Voice Calls",
      description:
        "Go beyond texting! Enjoy unlimited secure video & voice calls with matches.",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344493/SoulmateX/hqmfz0nqgdiy2nfvbdg5.svg",
      title: "Dedicated 24/7 VIP Support",
      description: "Get top-tier assistance anytime, anywhere.",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344701/SoulmateX/cog4tyq4xzlvcnaq8owh.svg",
      title: "Browse Invisibly",
      description:
        "View profiles without appearing in their visitors list—match on your terms.",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344576/SoulmateX/f4nrklbhhbw391ks25f9.svg",
      title: "Shine at the Top, Everytime!",
      description:
        "Get unlimited profile boosts and be the first profile they see. More visibility, more matches, more chances at love.",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741351181/SoulmateX/uedtudjuy3425lfvvwk1.svg",
      title: "Stand Out with VIP Prestige!",
      description:
        "Get an exclusive VIP badge and frame that sets you apart from the rest.",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741351304/SoulmateX/hhkfkv2ukdd4vth57hvb.svg",
      title: "Direct Messaging Without a Match",
      description:
        "Why wait? VIPs can message potential matches instantly without a mutual like.",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344534/SoulmateX/y6cmbt1qfjfurdajprwb.svg",
      title: "Ad-Free Experience",
      description:
        "Enjoy Soulmate X without distractions—no ads, just connections.",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741344640/SoulmateX/i25fehdjaypfqn3utocr.svg",
      title: "Exclusive High-Compatibility Matchmaking",
      description:
        "Get matched with the most compatible profiles based on astrology, personality, and preferences.",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741351508/SoulmateX/o9okjy5y2zvvmklcc3vo.svg",
      title: "Exclusive Astrology & Relationship Webinars",
      description:
        "VIPs get access to expert-led live astrology sessions & Webinars.",
    },
  ];

  return (
    <>
      <PremiumBanner
        backgroundImage={"tw-bg-vipCover"}
        headingFirstText={"Like Swans,"}
        headingSecondText={"True Love is Forever”"}
        subHeadingFirstText={"Unlock an exclusive dating experience where"}
        subHeadingSecondText={`loyalty meets destiny`}
        btnText={"Join VIP & Find Your Forever"}
      />
      <UpgradePremium componentScreen={"VIP"}>
        <h1 className="sw1024:tw-text-[64px]/[85.31px] sw768:tw-text-5xl/[64.31px] sw552:tw-text-[34px]/[50.31px] tw-text-[24px]/[30.31px] tw-font-bold tw-text-white tw-font-playfairDisplay">
          Go{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(89.03deg, #ED1B24 3.44%, #ED1B24 45.38%, #F868E7 99.16%)",
              color: "transparent",
              backgroundClip: "text",
              display: "inline-block"
            }}
          >
            VIP
          </span>
          . Get Noticed. Get Matched.
        </h1>
      </UpgradePremium>
      <Features icons={icons} btnText={"Join VIP & Find Your Forever"} />
    </>
  );
}

export default VIP