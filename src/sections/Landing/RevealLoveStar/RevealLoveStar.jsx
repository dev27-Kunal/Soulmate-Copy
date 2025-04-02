import React, { useEffect, useRef, useState } from "react";
import "./RevealLoveStar.css";
import Ring from "../../../assets/Ring.svg";
import { Button } from "react-bootstrap";
import BtnSquare from "../../../components/BtnSquare/BtnSquare";
import RevealStarCards from "../../../components/RevealStarCards/RevealStarCards";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import BlueRingBack from "../../../assets/BlueRingBack.svg";
import { Link } from "react-router";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MonthCalendar } from "@mui/x-date-pickers/MonthCalendar";
import dayjs from "dayjs";
import { YearCalendar } from "@mui/x-date-pickers";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";


function RevealLoveStar() {
  const [revealSelected, setRevealSelected] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [dateLimit, setDateLimit] = useState(31);
  const [date, setDate] = useState(1);
  const [showDate, setShowDate] = useState(false);
  const [showMonth, setShowMonth] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [yearStarting, setYearStarting] = useState(1971);
  const [selectedYear, setSelectedYear] = useState(1971);
  const [isLeapYear, setLeapYear] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openMonth, setOpenMonth] = React.useState(false);
  const [openYear, setOpenYear] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
  }

  const dateRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const d = new Date();

  const handleDayChange = (newValue) => {
    setSelectedDay(newValue);
    console.log(
      "Selected day:",
      newValue ? newValue.format("YYYY-MM-DD") : "null"
    );
    setOpenModal(false)
    setOpen(false);
  };

  const handleOpenPicker = () => {
    setOpen(!open);
    if(width <= 768){
      setOpenModal(true)
    }
    setOpenMonth(false);
    setOpenYear(false);
  };
  const handleOpenMonthPicker = () => {
    setOpenMonth(!openMonth);
    setOpen(false);
    setOpenYear(false);
    if (width <= 768) {
      setOpenModal(true)
    }
  };
  const handleOpenYearPicker = () => {
    setOpenYear(!openYear);
    setOpen(false);
    setOpenMonth(false);
    if (width <= 768) {
      setOpenModal(true);
    }
  };

  const closeAll = () => {
    setOpenYear(false);
    setOpen(false);
    setOpenMonth(false);
  };

  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleReveal = () => {
    if(selectedDay){
      setIsFadingOut(true);
      // Wait for the fade-out animation to complete (1 second)
      setTimeout(() => {
        setRevealSelected(true);
      }, 1000);
    }
  };

  const increaseDate = () => {
    if (date < dateLimit) {
      setDate(date + 1);
    }
  };
  const decreaseDate = () => {
    if (date > 1) {
      setDate(date - 1);
    }
  };

  const identifyMonth = (currentMonth, isLeap) => {
    if ([0, 2, 4, 6, 7, 9, 11].includes(currentMonth)) {
      setDateLimit(31);
    } else if (currentMonth === 1) {
      if (isLeap) {
        setDate((prev) => (prev > 29 ? 29 : prev));
        setDateLimit(29);
      } else {
        setDate((prev) => (prev > 28 ? 28 : prev));
        setDateLimit(28);
      }
    } else {
      setDate((prev) => (prev > 30 ? 30 : prev));
      setDateLimit(30);
    }
  };

  const increaseYear = () => {
    if (selectedYear < d.getFullYear()) {
      const newYear = selectedYear + 1;
      const isLeap =
        newYear % 100 === 0 ? newYear % 400 === 0 : newYear % 4 === 0;
      setLeapYear(isLeap);
      identifyMonth(currentMonthIndex, isLeap); // Pass calculated value
      setSelectedYear(newYear);
    }
  };

  const decreaseYear = () => {
    if (selectedYear > 1971) {
      const newYear = selectedYear - 1;
      const isLeap =
        newYear % 100 === 0 ? newYear % 400 === 0 : newYear % 4 === 0;
      setLeapYear(isLeap);
      identifyMonth(currentMonthIndex, isLeap); // Pass calculated value
      setSelectedYear(newYear);
    }
  };

  const increaseMonth = () => {
    if (currentMonthIndex < 11) {
      const newMonth = currentMonthIndex + 1;
      setCurrentMonthIndex(newMonth);
      identifyMonth(newMonth, isLeapYear); // Use state value
    }
  };

  const decreaseMonth = () => {
    if (currentMonthIndex > 0) {
      const newMonth = currentMonthIndex - 1;
      setCurrentMonthIndex(newMonth);
      identifyMonth(newMonth, isLeapYear); // Use state value
    }
  };

  const changeDate = (date) => {
    setShowDate(!showDate);
    setShowMonth(false);
    setShowYear(false);
  };

  const changeMonth = (month) => {
    setShowMonth(!showMonth);
    setShowDate(false);
    setShowYear(false);
  };
  const changeYear = (month) => {
    setShowYear(!showYear);
    setShowDate(false);
    setShowMonth(false);
  };

  const handleTouchStart = (event) => {
    setTouchStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    if (touchStartY === null) return;

    event.preventDefault(); // Prevent default scrolling behavior
    const touchY = event.touches[0].clientY;
    const diff = touchStartY - touchY;
    const threshold = 10; // Minimum distance to trigger a scroll

    if (Math.abs(diff) < threshold) return;

    if (showDate) {
      if (diff > 0) {
        increaseDate();
      } else {
        decreaseDate();
      }
    } else if (showMonth) {
      if (diff > 0) {
        increaseMonth();
      } else {
        decreaseMonth();
      }
    } else if (showYear) {
      if (diff > 0) {
        increaseYear();
      } else {
        decreaseYear();
      }
    }

    // Reset touch start to allow continuous scrolling
    setTouchStartY(touchY);
  };

  const handleTouchEnd = () => {
    setTouchStartY(null);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (showDate) {
        event.preventDefault();
        if (event.deltaY > 0) {
          increaseDate();
        } else if (event.deltaY < 0) {
          decreaseDate();
        }
      }
      if (showMonth) {
        event.preventDefault();
        if (event.deltaY > 0) {
          increaseMonth();
        } else if (event.deltaY < 0) {
          decreaseMonth();
        }
      }
      if (showYear) {
        event.preventDefault();
        if (event.deltaY > 0) {
          increaseYear();
        } else if (event.deltaY < 0) {
          decreaseYear();
        }
      }
    };

    const div = dateRef.current;
    const monthDiv = monthRef.current;
    const yearDiv = yearRef.current;

    if (div) {
      div.addEventListener("wheel", handleScroll);
    }
    if (monthDiv) {
      monthDiv.addEventListener("wheel", handleScroll);
    }
    if (yearDiv) {
      yearDiv.addEventListener("wheel", handleScroll);
    }

    if (div) {
      div.addEventListener("touchstart", handleTouchStart);
      div.addEventListener("touchmove", handleTouchMove, { passive: false });
      div.addEventListener("touchend", handleTouchEnd);
    }
    if (monthDiv) {
      monthDiv.addEventListener("touchstart", handleTouchStart);
      monthDiv.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      monthDiv.addEventListener("touchend", handleTouchEnd);
    }
    if (yearDiv) {
      yearDiv.addEventListener("touchstart", handleTouchStart);
      yearDiv.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      yearDiv.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (div) {
        div.removeEventListener("wheel", handleScroll);
      }
      if (monthDiv) {
        monthDiv.removeEventListener("wheel", handleScroll);
      }
      if (yearDiv) {
        yearDiv.removeEventListener("wheel", handleScroll);
      }

      if (div) {
        div.removeEventListener("touchstart", handleTouchStart);
        div.removeEventListener("touchmove", handleTouchMove);
        div.removeEventListener("touchend", handleTouchEnd);
      }
      if (monthDiv) {
        monthDiv.removeEventListener("touchstart", handleTouchStart);
        monthDiv.removeEventListener("touchmove", handleTouchMove);
        monthDiv.removeEventListener("touchend", handleTouchEnd);
      }
      if (yearDiv) {
        yearDiv.removeEventListener("touchstart", handleTouchStart);
        yearDiv.removeEventListener("touchmove", handleTouchMove);
        yearDiv.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [
    date,
    showDate,
    currentMonthIndex,
    showMonth,
    selectedYear,
    showYear,
    touchStartY,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="reveal-love-star-container"
      onClick={(open || openMonth || openYear) && closeAll}
    >
      <div
        className={`reveal-love-star-content-container ${
          revealSelected && "tw-relative"
        }`}
      >
        <div className="tw-flex tw-justify-between tw-flex-wrap">
          <h1 className="reveal-love-star-heading">
            "Your Stars Hold Secrets... <br />
            Ready to Reveal Them?"
          </h1>
          <Link
            className="tw-text-white tw-underline sw1024:tw-text-[32px]/[37.5px] sw851:tw-text-xl/[28.5px] tw-text-xs/[22.5px] sw1024:tw-mt-0 sw768:tw-mt-4 tw-font-bold tw-font-roboto"
            onClick={() => {
              const element = document.getElementById("peopleTrust");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Skip
          </Link>
        </div>
        {!revealSelected ? (
          <>
            <div
              className={`reveal-love-star-detail-container ${
                isFadingOut ? "fade-out" : ""
              }`}
            >
              <h2 className="reveal-love-star-detail-text">
                ENTER YOUR BIRTHDATE?
              </h2>
              <div className="reveal-love-star-date-fixture">
                <div className="reveal-love-star-btn-text-container fixture-block">
                  <h3 className="reveal-love-star-date-fixture-text">Date</h3>
                  <div className="tw-relative" ref={dateRef}>
                    {/* {showDate && (
                      <div className="tw-absolute tw-w-[90%] sw552:tw-bottom-full tw-bottom-[94%] tw-left-0 tw-right-0 tw-mx-auto tw-z-20">
                        <Button
                          className="tw-w-[100%] tw-rounded-none sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.3rem] tw-bg-white tw-border tw-border-b-0 tw-border-t-[0.5px] tw-border-[#B8B8B8]"
                          onClick={decreaseDate}
                        >
                          <ExpandLessIcon
                            sx={{
                              color: "#0059A9",
                              fontSize:
                                width > 1024
                                  ? 36
                                  : width > 768
                                  ? 24
                                  : width > 540
                                  ? 16
                                  : 12,
                              lineHeight:
                                width > 768
                                  ? "36.19px"
                                  : width > 540
                                  ? "20.19px"
                                  : "16.19px",
                            }}
                          />
                        </Button>
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            date - 2 >= 1
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.25rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          }  tw-bg-white  tw-border tw-border-b-0 tw-border-t-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                          onClick={() => changeDate(date - 2)}
                        >
                          {date - 2 >= 1 ? date - 2 : ""}
                        </Button>
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            date - 1 >= 1
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.2rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          }  tw-bg-white  tw-border tw-border-b-0 tw-border-t-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                          onClick={() => changeDate(date - 1)}
                        >
                          {date - 1 >= 1 ? date - 1 : ""}
                        </Button>
                      </div>
                    )} */}
                    {width <= 1024 && width > 768 && open && (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                          views={["day"]}
                          value={selectedDay}
                          onChange={handleDayChange}
                          onClose={() => setOpen(false)}
                          slots={
                            {
                              // calendarHeader: () => null
                            }
                          }
                          sx={{
                            backgroundColor: "white",
                            position: "absolute",
                            // marginTop: "1rem",
                            borderRadius: "10px",
                            zIndex: "20",
                            height: "350px",
                            bottom: "130%",
                            width: "300px",
                          }}
                        />
                      </LocalizationProvider>
                    )}
                    <Button
                      className={`reveal-love-star-selector tw-z-20 tw-relative tw-border-none ${
                        showDate ? "tw-text-black" : "tw-text-[#474747]"
                      }  `}
                      // onClick={() => changeDate(date - 2)}
                      onClick={handleOpenPicker}
                    >
                      {selectedDay ? dayjs(selectedDay).format("D") : "Date"}
                    </Button>
                    {/* {showDate && (
                      <div className="tw-absolute tw-w-[90%] tw-left-0 tw-right-0 tw-mx-auto tw-z-20">
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            date + 1 <= dateLimit
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.25rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          } tw-bg-white tw-border tw-border-t-0 tw-border-b-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                        >
                          {date + 1 <= dateLimit ? date + 1 : ""}
                        </Button>
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            date + 2 <= dateLimit
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.25rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          } tw-bg-white tw-border tw-border-t-0 tw-border-b-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                        >
                          {date + 2 <= dateLimit ? date + 2 : ""}
                        </Button>
                        <Button
                          className="  tw-w-[100%] tw-rounded-none sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.3rem] tw-bg-white  tw-border tw-border-t-0 tw-border-b-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] tw-font-roboto tw-font-medium"
                          onClick={increaseDate}
                        >
                          <ExpandMoreIcon
                            sx={{
                              color: "#0059A9",
                              fontSize:
                                width > 1024
                                  ? 36
                                  : width > 768
                                  ? 24
                                  : width > 540
                                  ? 16
                                  : 12,
                              lineHeight:
                                width > 768
                                  ? "36.19px"
                                  : width > 540
                                  ? "20.19px"
                                  : "16.19px",
                            }}
                          />
                        </Button>
                      </div>
                    )} */}
                    {width > 1024 && open && (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                          views={["day"]}
                          value={selectedDay}
                          onChange={handleDayChange}
                          onClose={() => setOpen(false)}
                          slots={
                            {
                              // calendarHeader: () => null
                            }
                          }
                          sx={{
                            backgroundColor: "white",
                            position: "absolute",
                            marginTop: "1rem",
                            borderRadius: "10px",
                            zIndex: "20",
                            height: "350px",
                            width: "300px",
                          }}
                        />
                      </LocalizationProvider>
                    )}
                  </div>
                </div>
                <div className="reveal-love-star-btn-text-container month-block">
                  <h3 className="reveal-love-star-date-fixture-text">Month</h3>
                  <div className="tw-relative" ref={monthRef}>
                    {/* {showMonth && (
                      <div className="tw-absolute tw-w-[90%] sw552:tw-bottom-full tw-bottom-[94%] tw-left-0 tw-right-0 tw-mx-auto tw-z-20">
                        <Button
                          className="tw-w-[100%] tw-rounded-none sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.3rem] tw-bg-white tw-border tw-border-b-0 tw-border-t-[0.5px] tw-border-[#B8B8B8]"
                          onClick={decreaseMonth}
                        >
                          <ExpandLessIcon
                            sx={{
                              color: "#0059A9",
                              fontSize:
                                width > 1024
                                  ? 36
                                  : width > 768
                                  ? 24
                                  : width > 540
                                  ? 16
                                  : 12,
                              lineHeight:
                                width > 768
                                  ? "36.19px"
                                  : width > 540
                                  ? "20.19px"
                                  : "16.19px",
                            }}
                          />
                        </Button>
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            currentMonthIndex - 2 >= 0
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.25rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          }  tw-bg-white  tw-border tw-border-b-0 tw-border-t-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                          onClick={() => changeDate(date - 2)}
                        >
                          {currentMonthIndex - 2 >= 0
                            ? Months[currentMonthIndex - 2]
                            : ""}
                        </Button>
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            currentMonthIndex - 1 >= 0
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.2rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          }  tw-bg-white  tw-border tw-border-b-0 tw-border-t-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                          onClick={() => changeDate(date - 1)}
                        >
                          {currentMonthIndex - 1 >= 0
                            ? Months[currentMonthIndex - 1]
                            : ""}
                        </Button>
                      </div>
                    )} */}
                    {width <= 1024 && width > 768 && openMonth && (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MonthCalendar
                          value={selectedDay}
                          onChange={handleDayChange}
                          onClose={() => setOpen(false)}
                          slots={
                            {
                              // calendarHeader: () => null
                            }
                          }
                          sx={{
                            backgroundColor: "white",
                            position: "absolute",
                            marginTop: "1rem",
                            borderRadius: "10px",
                            zIndex: "20",
                            height: "220px",
                            bottom: "130%",
                            // overflow: "auto"
                          }}
                        />
                      </LocalizationProvider>
                    )}
                    <Button
                      className={`reveal-love-star-selector tw-z-20 tw-relative tw-border-none ${
                        showMonth ? "tw-text-black" : "tw-text-[#474747]"
                      }  `}
                      // onClick={() => changeMonth()}
                      onClick={handleOpenMonthPicker}
                    >
                      {selectedDay
                        ? dayjs(selectedDay).format("MMMM")
                        : "Month"}
                    </Button>
                    {width > 1024 && openMonth && (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MonthCalendar
                          value={selectedDay}
                          onChange={handleDayChange}
                          onClose={() => setOpen(false)}
                          slots={
                            {
                              // calendarHeader: () => null
                            }
                          }
                          sx={{
                            backgroundColor: "white",
                            position: "absolute",
                            marginTop: "1rem",
                            borderRadius: "10px",
                            zIndex: "20",
                            height: "220px",
                            // overflow: "auto"
                          }}
                        />
                      </LocalizationProvider>
                    )}
                    {/* {showMonth && (
                      <div className="tw-absolute tw-w-[90%] tw-left-0 tw-right-0 tw-mx-auto tw-z-20">
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            currentMonthIndex + 1 <= 11
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.25rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          } tw-bg-white tw-border tw-border-t-0 tw-border-b-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                        >
                          {currentMonthIndex + 1 <= 11
                            ? Months[currentMonthIndex + 1]
                            : ""}
                        </Button>
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            currentMonthIndex + 2 <= 11
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.25rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          } tw-bg-white tw-border tw-border-t-0 tw-border-b-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                        >
                          {currentMonthIndex + 2 <= 11
                            ? Months[currentMonthIndex + 2]
                            : ""}
                        </Button>
                        <Button
                          className="  tw-w-[100%] tw-rounded-none sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.3rem] tw-bg-white  tw-border tw-border-t-0 tw-border-b-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] tw-font-roboto tw-font-medium"
                          onClick={increaseMonth}
                        >
                          <ExpandMoreIcon
                            sx={{
                              color: "#0059A9",
                              fontSize:
                                width > 1024
                                  ? 36
                                  : width > 768
                                  ? 24
                                  : width > 540
                                  ? 16
                                  : 12,
                              lineHeight:
                                width > 768
                                  ? "36.19px"
                                  : width > 540
                                  ? "20.19px"
                                  : "16.19px",
                            }}
                          />
                        </Button>
                      </div>
                    )} */}
                  </div>
                </div>
                <div className="reveal-love-star-btn-text-container fixture-block">
                  <h3 className="reveal-love-star-date-fixture-text">Year</h3>
                  <div className="tw-relative" ref={yearRef}>
                    {/* {showYear && (
                      <div className="tw-absolute tw-w-[90%] sw552:tw-bottom-full tw-bottom-[94%] tw-left-0 tw-right-0 tw-mx-auto tw-z-20">
                        <Button
                          className="tw-w-[100%] tw-rounded-none sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.3rem] tw-bg-white tw-border tw-border-b-0 tw-border-t-[0.5px] tw-border-[#B8B8B8]"
                          onClick={decreaseYear}
                        >
                          <ExpandLessIcon
                            sx={{
                              color: "#0059A9",
                              fontSize:
                                width > 1024
                                  ? 36
                                  : width > 768
                                  ? 24
                                  : width > 540
                                  ? 16
                                  : 12,
                              lineHeight:
                                width > 768
                                  ? "36.19px"
                                  : width > 540
                                  ? "20.19px"
                                  : "16.19px",
                            }}
                          />
                        </Button>
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            selectedYear - 2 >= yearStarting
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.25rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          }  tw-bg-white  tw-border tw-border-b-0 tw-border-t-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                          onClick={() => changeDate(date - 2)}
                        >
                          {selectedYear - 2 >= yearStarting
                            ? selectedYear - 2
                            : ""}
                        </Button>
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            selectedYear - 1 >= yearStarting
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.2rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          }  tw-bg-white  tw-border tw-border-b-0 tw-border-t-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                          onClick={() => changeDate(date - 1)}
                        >
                          {selectedYear - 1 >= yearStarting
                            ? selectedYear - 1
                            : ""}
                        </Button>
                      </div>
                    )} */}
                    {width <= 1024 && width > 768 && openYear && (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <YearCalendar
                          value={selectedDay}
                          onChange={handleDayChange}
                          onClose={() => setOpen(false)}
                          slots={
                            {
                              // calendarHeader: () => null
                            }
                          }
                          sx={{
                            backgroundColor: "white",
                            position: "absolute",
                            marginTop: "1rem",
                            borderRadius: "10px",
                            zIndex: "20",
                            height: "220px",
                            bottom: "130%",
                            // overflow: "auto"
                          }}
                        />
                      </LocalizationProvider>
                    )}
                    <Button
                      className={`reveal-love-star-selector tw-z-20 tw-relative tw-border-none ${
                        showMonth ? "tw-text-black" : "tw-text-[#474747]"
                      }  `}
                      // onClick={() => changeYear()}
                      onClick={handleOpenYearPicker}
                    >
                      {selectedDay ? dayjs(selectedDay).format("YYYY") : "Year"}
                    </Button>
                    {width > 1024 && openYear && (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <YearCalendar
                          value={selectedDay}
                          onChange={handleDayChange}
                          onClose={() => setOpen(false)}
                          slots={
                            {
                              // calendarHeader: () => null
                            }
                          }
                          sx={{
                            backgroundColor: "white",
                            position: "absolute",
                            marginTop: "1rem",
                            borderRadius: "10px",
                            zIndex: "20",
                            height: "220px",
                            // overflow: "auto"
                          }}
                        />
                      </LocalizationProvider>
                    )}
                    {/* {showYear && (
                      <div className="tw-absolute tw-w-[90%] tw-left-0 tw-right-0 tw-mx-auto tw-z-20">
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            selectedYear + 1 <= d.getFullYear()
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.25rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          } tw-bg-white tw-border tw-border-t-0 tw-border-b-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                        >
                          {selectedYear + 1 <= d.getFullYear()
                            ? selectedYear + 1
                            : ""}
                        </Button>
                        <Button
                          className={`tw-w-[100%] tw-rounded-none ${
                            selectedYear + 2 <= d.getFullYear()
                              ? "sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.4rem]"
                              : "sw1024:tw-py-10 sw768:tw-py-[2.25rem] sw552:tw-py-[1.23rem] tw-py-[0.9rem]"
                          } tw-bg-white tw-border tw-border-t-0 tw-border-b-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] sw1024:tw-text-4xl sw768:tw-text-2xl/[36.19px] sw552:tw-text-base/[20.19px] tw-text-[8px]/[16.19px] tw-font-roboto tw-font-medium`}
                        >
                          {selectedYear + 2 <= d.getFullYear()
                            ? selectedYear + 2
                            : ""}
                        </Button>
                        <Button
                          className="  tw-w-[100%] tw-rounded-none sw1024:tw-py-5 sw768:tw-py-[1.2rem] sw552:tw-py-[0.7rem] tw-py-[0.3rem] tw-bg-white  tw-border tw-border-t-0 tw-border-b-[0.5px] tw-border-[#B8B8B8] tw-text-[#474747] tw-font-roboto tw-font-medium"
                          onClick={increaseYear}
                        >
                          <ExpandMoreIcon
                            sx={{
                              color: "#0059A9",
                              fontSize:
                                width > 1024
                                  ? 36
                                  : width > 768
                                  ? 24
                                  : width > 540
                                  ? 16
                                  : 12,
                              lineHeight:
                                width > 768
                                  ? "36.19px"
                                  : width > 540
                                  ? "20.19px"
                                  : "16.19px",
                            }}
                          />
                        </Button>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="reveal-love-star-btn">
                <BtnSquare
                  text="Reveal My Love Stars"
                  onClick={handleReveal}
                  className="reveal-lover-star-hover-btn"
                  backgroundColor="#E11B24"
                />
              </div>
            </div>
            <span
              className={`reveal-love-star-span tw-font-roboto ${
                isFadingOut ? "fade-out" : ""
              }`}
            >
              *We use your birthdate to create accurate astrology-based matches.
              {width > 535 && <br />}
              Your data stays private and secure.*
            </span>
          </>
        ) : (
          <RevealStarCards />
        )}
      </div>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          {open ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                views={["day"]}
                value={selectedDay}
                onChange={handleDayChange}
                onClose={() => {
                  setOpen(false)
                  setOpenModal(false);
                }}
                slots={
                  {
                    // calendarHeader: () => null
                  }
                }
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
                  zIndex: "20",
                  height: "350px",
                  // width: "300px",
                }}
              />
            </LocalizationProvider>
          ) : (
            <></>
          )}
          {openMonth ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MonthCalendar
                value={selectedDay}
                onChange={handleDayChange}
                onClose={() => {
                  setOpen(false)
                  setOpenModal(false);
                }}
                slots={
                  {
                    // calendarHeader: () => null
                  }
                }
                sx={{
                  backgroundColor: "white",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  marginTop: "1rem",
                  borderRadius: "10px",
                  zIndex: "20",
                  height: "220px",
                  // overflow: "auto"
                }}
              />
            </LocalizationProvider>
          ) : (
            <></>
          )}
          {openYear && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <YearCalendar
                value={selectedDay}
                onChange={handleDayChange}
                onClose={() => {
                  setOpenModal(false)
                  setOpen(false)
                }}
                slots={
                  {
                    // calendarHeader: () => null
                  }
                }
                sx={{
                  backgroundColor: "white",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  marginTop: "1rem",
                  borderRadius: "10px",
                  zIndex: "20",
                  height: "220px",
                  // overflow: "auto"
                }}
              />
            </LocalizationProvider>
          )}
        </div>
      </Modal>

      <div
        className={`svg-star  tw-absolute ${
          width > 1024
            ? `tw-top-[30vh] tw-left-[3vw]`
            : width > 768
            ? `tw-top-[250px] tw-left-[3vw]`
            : width > 535
            ? `tw-top-[170px] tw-left-[3vw]`
            : `tw-top-[90px] tw-left-[3vw]`
        } `}
      >
        <svg
          width={
            width > 1024 ? "66" : width > 768 ? "40" : width > 535 ? "32" : "16"
          }
          height={
            width > 1024 ? "66" : width > 768 ? "40" : width > 535 ? "32" : "16"
          }
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.6518 37.7068L66 33.0263L40.6518 28.2932L47.1203 18.8271L37.7068 25.3482L33.0263 0L28.2932 25.3482L18.8271 18.8271L25.3482 28.2932L0 33.0263L25.3482 37.7068L18.8271 47.1203L28.2932 40.6518L33.0263 66L37.7068 40.6518L47.1203 47.1203L40.6518 37.7068Z"
            fill="#FEFEFE"
          />
        </svg>
      </div>
      <div
        className={`svg-star  tw-absolute ${
          width > 1024
            ? `tw-top-[8vh]`
            : width > 768
            ? `tw-top-[90px]`
            : width > 535
            ? `tw-top-[54px]`
            : `tw-top-[22px]`
        } tw-left-[10vw]`}
      >
        <svg
          width={
            width > 1024 ? "36" : width > 768 ? "28" : width > 535 ? "20" : "12"
          }
          height={
            width > 1024 ? "36" : width > 768 ? "28" : width > 535 ? "20" : "12"
          }
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.6518 37.7068L66 33.0263L40.6518 28.2932L47.1203 18.8271L37.7068 25.3482L33.0263 0L28.2932 25.3482L18.8271 18.8271L25.3482 28.2932L0 33.0263L25.3482 37.7068L18.8271 47.1203L28.2932 40.6518L33.0263 66L37.7068 40.6518L47.1203 47.1203L40.6518 37.7068Z"
            fill="#FEFEFE"
          />
        </svg>
      </div>
      <div
        className={`svg-star  tw-absolute ${
          width > 768
            ? `tw-top-[8.5vh]`
            : width > 535
            ? `tw-top-[45px]`
            : `tw-top-[18px]`
        } tw-left-[60.6vw]`}
      >
        <svg
          width={
            width > 1024 ? "45" : width > 768 ? "36" : width > 535 ? "28" : "16"
          }
          height={
            width > 1024 ? "45" : width > 768 ? "36" : width > 535 ? "28" : "16"
          }
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.6518 37.7068L66 33.0263L40.6518 28.2932L47.1203 18.8271L37.7068 25.3482L33.0263 0L28.2932 25.3482L18.8271 18.8271L25.3482 28.2932L0 33.0263L25.3482 37.7068L18.8271 47.1203L28.2932 40.6518L33.0263 66L37.7068 40.6518L47.1203 47.1203L40.6518 37.7068Z"
            fill="#FEFEFE"
          />
        </svg>
      </div>
      <div
        className={`svg-star tw-absolute  ${
          width > 1024
            ? `tw-top-[42vh] tw-left-[50vw]`
            : width > 768
            ? `tw-top-[320px] tw-left-[50vw]`
            : width > 535
            ? `tw-top-[230px] tw-left-[50vw]`
            : `tw-top-[118px] tw-left-[55vw]`
        }  `}
      >
        <svg
          width={
            width > 1024 ? "35" : width > 768 ? "27" : width > 535 ? "21" : "13"
          }
          height={
            width > 1024 ? "35" : width > 768 ? "27" : width > 535 ? "21" : "13"
          }
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.6518 37.7068L66 33.0263L40.6518 28.2932L47.1203 18.8271L37.7068 25.3482L33.0263 0L28.2932 25.3482L18.8271 18.8271L25.3482 28.2932L0 33.0263L25.3482 37.7068L18.8271 47.1203L28.2932 40.6518L33.0263 66L37.7068 40.6518L47.1203 47.1203L40.6518 37.7068Z"
            fill="#FEFEFE"
          />
        </svg>
      </div>
      <div
        className={`svg-star tw-absolute ${
          width > 1024
            ? `tw-top-[31vh]`
            : width > 768
            ? `tw-top-[270px]`
            : width > 535
            ? `tw-top-[180px]`
            : `tw-top-[105px]`
        } tw-left-[94.2vw]`}
      >
        <svg
          width={
            width > 1024 ? "36" : width > 768 ? "28" : width > 535 ? "20" : "12"
          }
          height={
            width > 1024 ? "36" : width > 768 ? "28" : width > 535 ? "20" : "12"
          }
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.6518 37.7068L66 33.0263L40.6518 28.2932L47.1203 18.8271L37.7068 25.3482L33.0263 0L28.2932 25.3482L18.8271 18.8271L25.3482 28.2932L0 33.0263L25.3482 37.7068L18.8271 47.1203L28.2932 40.6518L33.0263 66L37.7068 40.6518L47.1203 47.1203L40.6518 37.7068Z"
            fill="#FEFEFE"
          />
        </svg>
      </div>
      {!revealSelected && (
        <div className="ring-container">
          {/* <img src={BlueRingBack} alt="" style={{zIndex: '-1'}}/> */}
          <img src={Ring} alt="" className="ring-love-star" />
          <div className={`svg-star tw-absolute`}>
            <svg
              width={width > 535 ? "36" : "14"}
              height={width > 535 ? "36" : "14"}
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.6518 37.7068L66 33.0263L40.6518 28.2932L47.1203 18.8271L37.7068 25.3482L33.0263 0L28.2932 25.3482L18.8271 18.8271L25.3482 28.2932L0 33.0263L25.3482 37.7068L18.8271 47.1203L28.2932 40.6518L33.0263 66L37.7068 40.6518L47.1203 47.1203L40.6518 37.7068Z"
                fill="#FEFEFE"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default RevealLoveStar;
