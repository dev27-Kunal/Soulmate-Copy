import React from "react";
import EnvelopeCard from "../../../components/EnvelopeCard/EnvelopeCard";

function RelatedArticles() {
    const cardContent = [
      {
        id: 4,
        image:
          "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674633/SoulmateX/gx4wuhmzh0vxya60zyue.svg",
        heading: "Here’s How You Can Date Safely Online.",
        date: "12/06/2025",
        author: "- By Lorem Ipsum",
      },
      {
        id: 5,
        image:
          "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674634/SoulmateX/zjfes3dpas0phccayzwb.svg",
        heading: "Here’s How You Can Date Safely Online.",
        date: "12/06/2025",
        author: "- By Lorem Ipsum",
      },
      {
        id: 6,
        image:
          "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674635/SoulmateX/bzc19ic7bj9jb8030ojb.svg",
        heading: "Here’s How You Can Date Safely Online.",
        date: "12/06/2025",
        author: "- By Lorem Ipsum",
      },
    ];

  return (
    <div className="sw552:tw-py-16 tw-py-12 tw-bg-[#FAFAFA]">
      <div className="tw-w-[80.7%] tw-mx-auto tw-flex tw-flex-col sw1024:tw-gap-16 sw768:tw-gap-6 sw552:tw-gap-8 tw-gap-0">
        <h1 className="tw-font-playfairDisplay tw-font-bold tw-text-[#ED1B24] sw1024:tw-text-[64px]/[85.31px] sw552:tw-text-5xl/[64.31px] tw-text-4xl/[64.31px]">
          Related Articles
        </h1>
        <div className="cards-container">
          {cardContent.map((item) => (
            <EnvelopeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedArticles;
