import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./LoveJournalSection.css";
import EnvelopeCard from "../../../components/EnvelopeCard/EnvelopeCard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";

function LoveJournalSection() {
  const [value, setValue] = useState("View All");
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

  const cardContent = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674629/SoulmateX/fawf7jqaqtwh0zi7ixgr.svg",
      heading: "Here’s How You Can Date Safely Online.",
      date: "12/06/2025",
      author: "- By Lorem Ipsum",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674631/SoulmateX/suyx4jbk5dzrvnbg04th.svg",
      heading: "Here’s How You Can Date Safely Online.",
      date: "12/06/2025",
      author: "- By Lorem Ipsum",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741674632/SoulmateX/sanrsntvlj9lrz27oewr.svg",
      heading: "Here’s How You Can Date Safely Online.",
      date: "12/06/2025",
      author: "- By Lorem Ipsum",
    },
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

  const tabData = [
    { label: "View All", value: "View All" },
    { label: "Dating Tips", value: "Dating Tips" },
    { label: "Attraction", value: "Attraction" },
    { label: "Commitment", value: "Commitment" },
    { label: "Relationship Issue", value: "Relationship Issue" },
    { label: "Breaking Up", value: "Breaking Up" },
    { label: "Attraction", value: "Attractionn" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tw-h-full tw-min-h-[100vh] sw768:tw-py-[104px] sw552:tw-py-[80px] tw-py-[60px]">
      <div className="tw-h-full tw-min-h-[100vh] tw-w-[80.7%] tw-mx-auto tw-flex tw-flex-col sw768:tw-gap-20 sw552:tw-gap-14 tw-gap-5">
        <div className="love-journal-tab-wrapper">
          <Box sx={{ borderBottom: 1, borderColor: "#D9D9D9" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                "& .MuiTabs-indicator": {
                  borderWidth: 2,
                  borderColor: "#ED1B24",
                },
              }}
            >
              {tabData.map((items) => (
                <Tab
                  key={items.value}
                  value={items.value}
                  label={items.label}
                  sx={[
                    {
                      // This makes each tab take equal space
                      color: "#000000",
                      fontFamily: "Roboto",
                      textAlign: "center",
                      fontWeight: 500,
                      // paddingBottom: "22px",
                      fontSize: width > 1024 ? "1vw" : "20px",
                      textTransform: "capitalize",
                      "&.Mui-selected": { color: "#ED1B24" },
                    },
                    width > 1024 ? { flex: 1 } : {},
                  ]}
                />
              ))}
            </Tabs>
          </Box>
        </div>
        <div className="cards-container">
          {cardContent.map((item) => (
            <EnvelopeCard key={item.id} item={item} />
          ))}
        </div>
        <div className="tw-flex sw768:tw-flex-nowrap tw-flex-wrap sw648:tw-justify-between tw-gap-4 tw-justify-center tw-items-center">
          <Breadcrumbs
            separator=">>"
            aria-label="breadcrumb"
            sx={{
              "& .MuiBreadcrumbs-separator": {
                color: "#000000",
                marginInline: "12px",
              },
            }}
          >
            <span className="tw-font-roboto tw-font-medium sw768:tw-text-[20px] tw-text[18px] tw-capitalize tw-text-[#ED1B24]">
              Soulmate x
            </span>
            <span className="tw-font-roboto tw-font-medium sw768:tw-text-[20px] tw-text[18px] tw-capitalize tw-text-[#000000]">
              Love Journal
            </span>
          </Breadcrumbs>
          <Pagination
            count={10}
            siblingCount={0}
            shape="rounded"
            variant="outlined"
            // Use renderItem to customize each PaginationItem
            renderItem={(item) => {
              console.log("item: ", item);

              return (
                <PaginationItem
                  {...item}
                  sx={[
                    item.type === "end-ellipsis" ||
                      item.type === "start-ellipsis"
                      ? {
                        fontSize: width > 1024 ? "30px" : "24px", // Change font size
                        fontWeight: "700",
                        width: width > 1024 ? "64px" : "48px", // Set each block's width
                        fontFamily: "Roboto",
                        border: "1px solid red",
                        height: width > 1024 ? "68px" : "52px", // Set each block's height
                        borderRadius: "10px",
                      }
                      : {
                        fontSize:
                          width > 1024
                            ? "30px"
                            : width > 768
                              ? "24px"
                              : "18px", // Change font size
                        fontWeight: "700",
                        width:
                          width > 1024
                            ? "64px"
                            : width > 768
                              ? "48px"
                              : "36px", // Set each block's width
                        fontFamily: "Roboto",
                        height:
                          width > 1024
                            ? "68px"
                            : width > 768
                              ? "52px"
                              : "40px", // Set each block's height
                        borderRadius: "10px", // Optional: adjust border radius if needed
                        "&.Mui-selected": {
                          backgroundColor: "#ED1B24", // Active block background color
                          color: "#fff", // Active block text color
                        },
                      },
                  ]}
                />
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoveJournalSection;
