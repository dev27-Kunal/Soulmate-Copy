import React, { useEffect, useRef, useState } from "react";
import "./RevealStarCards.css";
import { Link } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstCardScratched,
  setSecondCardScratched,
  setThirdCardScratched,
} from "../../store/slice";
import ScratchCardStar from "../../assets/ScratchCardStar.svg";
import Ring from "../../assets/Ring.svg";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


function RevealScratchCardFirst() {
  const [showCanvas, setShowCanvas] = useState(true);
  const [fade, setFade] = useState(false); // New state for fading effect
  const [width, setWidth] = useState(window.innerWidth);
  const scContainerRef = useRef(null);
  const angleRef = useRef(0);
  const scratchesRef = useRef([]); // Track scratch points
  const isScratchingRef = useRef(false); // Track if currently scratching
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    if (!showCanvas) return; // if canvas is removed, don't run canvas logic

    const canvas = document.getElementById("scratchCard");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let isDragging = false;
    let img, imgSecond;

    const initializeCanvas = () => {
      img = new Image();
      imgSecond = new Image();

      img.src = Ring;
      imgSecond.src = ScratchCardStar;

      img.onload = () => {
        imgSecond.onload = () => {
          animate(); // Start animation when both images are loaded
        };
      };
    };

    const drawRotatedImage = () => {
      const centerX = canvas.width / 2;
      const imageSize = 700;
      ctx.save();
      ctx.translate(360, -160);
      ctx.rotate(angleRef.current * (Math.PI / 180));
      ctx.drawImage(img, -imageSize / 2, -imageSize / 2, imageSize, imageSize);
      ctx.restore();
    };

    const animate = () => {
      // Check if the user has scratched enough (threshold: 100 points)
      if (scratchesRef.current.length > 100) {
        // Trigger fade-out if not already triggered
        if (!fade) {
          setFade(true);
          // After fade duration, remove the canvas
          setTimeout(() => {
            setShowCanvas(false);
          }, 500);
        }
        // Stop the animation loop while fading out
        return;
      }

      angleRef.current += 0.5;

      // Clear canvas and draw background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#1F1D1E";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw rotating image
      drawRotatedImage();

      // Draw text
      ctx.font = `800 ${width > 1148 ? "28px" : "24px"} Playfair Display`;
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(`"YOUR SIGN`, canvas.width / 2, canvas.height / 2 + 100);
      ctx.fillText(`AWAITS."`, canvas.width / 2, canvas.height / 2 + 150);

      // Draw star image before applying the scratch mask.
      ctx.drawImage(
        imgSecond,
        canvas.width / 2 - 25,
        canvas.height / 2 + 10,
        50,
        50
      );

      // Apply scratches so that they erase parts of everything drawn above.
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      scratchesRef.current.forEach(({ x, y }) => {
        ctx.moveTo(x + 12, y); // Prevent connecting lines
        ctx.arc(x, y, 48, 0, Math.PI * 2);
      });
      ctx.fill();

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over";

      requestAnimationFrame(animate);
    };

    const getMouseCoordinates = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX || event.touches[0].clientX) - rect.left;
      const y = (event.clientY || event.touches[0].clientY) - rect.top;
      return { x, y };
    };

    const handleStart = (event) => {
      isDragging = true;
      isScratchingRef.current = true;
      const { x, y } = getMouseCoordinates(event);
      scratchesRef.current.push({ x, y });
    };

    const handleMove = (event) => {
      if (!isDragging) return;
      event.preventDefault();
      const { x, y } = getMouseCoordinates(event);
      scratchesRef.current.push({ x, y });
      // Optional: Check threshold here as well
      if (scratchesRef.current.length > 75 && !fade) {
        // Trigger fade-out early if needed
        setFade(true);
        setTimeout(() => {
          dispatch(setFirstCardScratched());
          setShowCanvas(false);
          setShowCanvas(false);
        }, 500);
      }
    };

    const handleEnd = () => {
      isDragging = false;
      isScratchingRef.current = false;
    };

    // Attach event listeners
    const isTouch = "ontouchstart" in window;
    canvas.addEventListener(isTouch ? "touchstart" : "mousedown", handleStart);
    canvas.addEventListener(isTouch ? "touchmove" : "mousemove", handleMove);
    canvas.addEventListener(isTouch ? "touchend" : "mouseup", handleEnd);
    canvas.addEventListener("mouseleave", handleEnd);

    initializeCanvas();

    return () => {
      canvas.removeEventListener(
        isTouch ? "touchstart" : "mousedown",
        handleStart
      );
      canvas.removeEventListener(
        isTouch ? "touchmove" : "mousemove",
        handleMove
      );
      canvas.removeEventListener(isTouch ? "touchend" : "mouseup", handleEnd);
      canvas.removeEventListener("mouseleave", handleEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [showCanvas, fade]);

  return (
    <div
      className={`tw-bg-white tw-justify-center tw-items-center tw-flex tw-h-[542px] tw-rounded-xl tw-relative`}
      style={{
        width:
          width <= 1148
            ? width <= 500
              ? 260 + 32
              : 320 + 32
            : width / 4.5 + 32,
      }}
    >
      <div className="tw-absolute tw-z-1 tw-border-red-500 tw-flex tw-flex-col tw-justify-evenly tw-items-center tw-h-full">
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-6">
          <img
            src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076367/SoulmateX/sm35xbbbjwkzahm5txwz.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076352/SoulmateX/z552pbpjyrup79c5uvip.svg"
            alt=""
          />
          <span className="tw-text-2xl tw-font-extrabold tw-font-roboto tw-text-center tw-text-[#1F1D1E]">
            YOU ARE...
          </span>
        </div>
        <h3 className="tw-text-4xl/[42.19px] tw-font-extrabold tw-font-roboto tw-text-center tw-text-[#1F1D1E]">
          A Bold,
          <br />
          Fearless
        </h3>
        <h2 className="tw-text-5xl/[42.19px] tw-font-extrabold tw-font-playfairDisplay tw-text-center tw-text-[#ED1B24]">
          LEO
        </h2>
      </div>

      {showCanvas && (
        <div
          className="tw-relative tw-z-10 tw-border-x-[16px] tw-border-y-[22px] tw-border-[#E5F7FF] tw-justify-center tw-items-center tw-flex tw-rounded-xl"
          style={{
            transition: "opacity 0.5s ease-out",
            opacity: fade ? 0 : 1,
          }}
        >
          <canvas
            ref={scContainerRef}
            id="scratchCard"
            height="500"
            width={width <= 1148 ? (width <= 500 ? 260 : 320) : width / 4.5}
            style={{
              borderRadius: "12px",
              zIndex: 2,
              cursor: `url("https://img.icons8.com/?size=100&id=bbz76sokMIrd&format=png&color=000000"), auto`,
            }}
          ></canvas>
        </div>
      )}
    </div>
  );
}

function RevealScratchCardSecond() {
  const [showCanvas, setShowCanvas] = useState(true);
  const [fade, setFade] = useState(false); // New fade state
  const [width, setWidth] = useState(window.innerWidth);
  const scContainerRef = useRef(null);
  const angleRef = useRef(0);
  const scratchesRef = useRef([]); // Track scratch points
  const isScratchingRef = useRef(false); // Track if currently scratching
  const cardsScratchedRef = useRef({ first: false}); // Add this ref
  const [openSnackBar, setSnackBar] = useState(false);
  const dispatch = useDispatch();
  const firstCardScratched = useSelector(
    (state) => state.dataStore.firstCardScratched
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBar(false);
  };
  

  useEffect(() => {
    cardsScratchedRef.current = {
      first: firstCardScratched,
    };
  }, [firstCardScratched]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    if (!showCanvas) return; // if canvas is removed, don't run canvas logic

    const canvas = document.getElementById("scratchCardSecond");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let isDragging = false;
    let img, imgSecond;

    const initializeCanvas = () => {
      img = new Image();
      imgSecond = new Image();

      img.src = Ring;
      imgSecond.src = ScratchCardStar;

      img.onload = () => {
        imgSecond.onload = () => {
          animate(); // Start animation when both images are loaded
        };
      };
    };

    const drawRotatedImage = () => {
      const centerX = canvas.width / 2;
      const imageSize = 700;
      ctx.save();
      ctx.translate(centerX, -120);
      ctx.rotate(angleRef.current * (Math.PI / 180));
      ctx.drawImage(img, -imageSize / 2, -imageSize / 2, imageSize, imageSize);
      ctx.restore();
    };

    const animate = () => {
      // Check if the user has scratched enough (threshold: 100 points)
      if (scratchesRef.current.length > 100) {
        if (!fade) {
          setFade(true);
          setTimeout(() => {
            setShowCanvas(false); // Remove canvas after fade-out
          }, 500);
        }
        return; // Stop animation loop while fading
      }

      angleRef.current += 0.5;

      // Clear canvas and draw background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#1F1D1E";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw rotating image
      drawRotatedImage();

      // Draw text
      ctx.font = `800 ${width > 1148 ? "28px" : "24px"} Playfair Display`;
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(`"WHAT’S `, canvas.width / 2, canvas.height / 2 + 100);
      ctx.fillText(`WRITTEN IN THE`, canvas.width / 2, canvas.height / 2 + 150);
      ctx.fillText(`STARS?"`, canvas.width / 2, canvas.height / 2 + 200);

      // Draw star image before applying the scratch mask.
      ctx.drawImage(
        imgSecond,
        canvas.width / 2 - 25,
        canvas.height / 2 + 10,
        50,
        50
      );

      // Apply scratches
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      scratchesRef.current.forEach(({ x, y }) => {
        ctx.moveTo(x + 12, y); // Prevent connecting lines
        ctx.arc(x, y, 48, 0, Math.PI * 2);
      });
      ctx.fill();

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over";

      requestAnimationFrame(animate);
    };

    const getMouseCoordinates = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX || event.touches[0].clientX) - rect.left;
      const y = (event.clientY || event.touches[0].clientY) - rect.top;
      return { x, y };
    };

    const handleStart = (event) => {
      if (!cardsScratchedRef.current.first){
        setSnackBar(true);
        return;
      }

      isDragging = true;
      isScratchingRef.current = true;
      const { x, y } = getMouseCoordinates(event);
      scratchesRef.current.push({ x, y });
    };

    const handleMove = (event) => {
      if (!cardsScratchedRef.current.first)
        return;
      if (!isDragging) return;

      event.preventDefault();
      const { x, y } = getMouseCoordinates(event);
      scratchesRef.current.push({ x, y });

      if (scratchesRef.current.length > 75 && !fade) {
        setFade(true);
        setTimeout(() => {
          dispatch(setSecondCardScratched());
          setShowCanvas(false);
        }, 500);
      }
    };

    const handleEnd = () => {
      isDragging = false;
      isScratchingRef.current = false;
    };

    // Attach event listeners
    const isTouch = "ontouchstart" in window;
    canvas.addEventListener(isTouch ? "touchstart" : "mousedown", handleStart);
    canvas.addEventListener(isTouch ? "touchmove" : "mousemove", handleMove);
    canvas.addEventListener(isTouch ? "touchend" : "mouseup", handleEnd);
    canvas.addEventListener("mouseleave", handleEnd);

    initializeCanvas();

    return () => {
      canvas.removeEventListener(
        isTouch ? "touchstart" : "mousedown",
        handleStart
      );
      canvas.removeEventListener(
        isTouch ? "touchmove" : "mousemove",
        handleMove
      );
      canvas.removeEventListener(isTouch ? "touchend" : "mouseup", handleEnd);
      canvas.removeEventListener("mouseleave", handleEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [showCanvas, fade]);

  return (
    <div
      className={`tw-bg-white tw-justify-center tw-items-center tw-flex tw-h-[542px] tw-rounded-xl tw-relative`}
      style={{
        width:
          width <= 1148
            ? width <= 500
              ? 260 + 32
              : 320 + 32
            : width / 4.5 + 32,
      }}
    >
      <div className="tw-absolute tw-z-1 tw-flex tw-flex-col tw-justify-evenly tw-items-center tw-h-full">
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-6">
          <img
            src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076367/SoulmateX/sm35xbbbjwkzahm5txwz.svg"
            alt=""
          />
          <span className="sw378:tw-text-xl tw-text-lg tw-italic tw-font-medium tw-font-roboto tw-text-center tw-text-[#000000]">
            "LOVE IS IN THE AIR! A SPECIAL <br /> CONNECTION MAY ARISE FROM{" "}
            <br />
            AN UNEXPECTED MOMENT <br />
            TODAY."
          </span>
        </div>
        <span>
          <h4 className="tw-text-2xl tw-font-bold tw-font-roboto tw-text-center tw-text-[#000000]">
            LUCKY LOVE COLOR
          </h4>
          <h3 className="tw-text-[32px] tw-font-extrabold tw-font-roboto tw-text-center tw-text-[#7D41CB]">
            PURPLE
          </h3>
        </span>
        <span>
          <h4 className="tw-text-2xl tw-font-bold tw-font-roboto tw-text-center tw-text-[#000000]">
            LUCKY NUMBER
          </h4>
          <h3 className="tw-text-5xl tw-font-semibold tw-font-playfairDisplay tw-text-center tw-text-[#ED1B24]">
            7
          </h3>
        </span>
      </div>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Scratch First card to reveal this card.
        </Alert>
      </Snackbar>

      {showCanvas && (
        <div
          className="tw-relative tw-z-10 tw-border-x-[16px] tw-border-y-[22px] tw-border-[#E5F7FF] tw-justify-center tw-items-center tw-flex tw-rounded-xl"
          style={{
            transition: "opacity 0.5s ease-out",
            opacity: fade ? 0 : 1,
          }}
        >
          <canvas
            ref={scContainerRef}
            id="scratchCardSecond"
            height="500"
            width={width <= 1148 ? (width <= 500 ? 260 : 320) : width / 4.5}
            style={{
              borderRadius: "12px",
              zIndex: 2,
              cursor: `url("https://img.icons8.com/?size=100&id=bbz76sokMIrd&format=png&color=000000"), auto`,
            }}
          ></canvas>
        </div>
      )}
    </div>
  );
}

function RevealScratchCardThird() {
  const [showCanvas, setShowCanvas] = useState(true);
  const [fade, setFade] = useState(false); // New state for fade effect
  const [width, setWidth] = useState(window.innerWidth);
  const [displayedPercentage, setDisplayedPercentage] = useState(0);
  const [percentageWidth, setPercentageWidth] = useState(0);
  const compatibilityPercentage = 75;
  const scContainerRef = useRef(null);
  const angleRef = useRef(0);
  const scratchesRef = useRef([]); // Track scratch points
  const isScratchingRef = useRef(false); // Track if currently scratching
  const cardsScratchedRef = useRef({ first: false, second: false }); // Add this ref
  const [openSnackBar, setSnackBar] = useState(false)
  const dispatch = useDispatch();
  const firstCardScratched = useSelector(
    (state) => state.dataStore.firstCardScratched
  );
  const secondCardScratched = useSelector(
    (state) => state.dataStore.secondCardScratched
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBar(false);
  }

  useEffect(() => {
    cardsScratchedRef.current = {
      first: firstCardScratched,
      second: secondCardScratched,
    };
  }, [firstCardScratched, secondCardScratched]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    if (!showCanvas && compatibilityPercentage !== undefined) {
      // Trigger width animation via CSS
      setPercentageWidth(compatibilityPercentage);

      // Animate displayed percentage
      const duration = 2000;
      const startTime = Date.now();
      let requestId;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * compatibilityPercentage);

        setDisplayedPercentage(current);

        if (progress < 1) {
          requestId = requestAnimationFrame(animate);
        }
      };

      requestId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(requestId);
    }

    if (!showCanvas) return; // If canvas is removed, don't run canvas logic

    const canvas = document.getElementById("scratchCardThird");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let isDragging = false;
    let img, imgSecond;

    const initializeCanvas = () => {
      img = new Image();
      imgSecond = new Image();

      img.src = Ring;
      imgSecond.src = ScratchCardStar;

      img.onload = () => {
        imgSecond.onload = () => {
          animate(); // Start animation when both images are loaded
        };
      };
    };

    const drawRotatedImage = () => {
      const centerX = canvas.width / 2;
      const imageSize = 700;
      ctx.save();
      ctx.translate(width > 1600 ? 45 : -45, -160);
      ctx.rotate(angleRef.current * (Math.PI / 180));
      ctx.drawImage(img, -imageSize / 2, -imageSize / 2, imageSize, imageSize);
      ctx.restore();
    };

    const animate = () => {
      // Check if the user has scratched enough (threshold: 100 points)
      if (scratchesRef.current.length > 100) {
        if (!fade) {
          setFade(true);
          setTimeout(() => {
            setShowCanvas(false);
          }, 500); // Delay removal to allow fade-out animation
        }
        return; // Stop animation loop while fading out
      }

      angleRef.current += 0.5;

      // Clear canvas and draw background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#1F1D1E";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw rotating image
      drawRotatedImage();

      // Draw text
      ctx.font = `800 ${width > 1148 ? "28px" : "24px"} Playfair Display`;
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(`"WHO’S YOUR`, canvas.width / 2, canvas.height / 2 + 100);
      ctx.fillText(`PERFECT"`, canvas.width / 2, canvas.height / 2 + 150);
      ctx.fillText(`MATCH?"`, canvas.width / 2, canvas.height / 2 + 200);

      // Draw star image before applying the scratch mask
      ctx.drawImage(
        imgSecond,
        canvas.width / 2 - 25,
        canvas.height / 2 + 10,
        50,
        50
      );

      // Apply scratches so that they erase parts of everything drawn above
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      scratchesRef.current.forEach(({ x, y }) => {
        ctx.moveTo(x + 12, y); // Prevent connecting lines
        ctx.arc(x, y, 48, 0, Math.PI * 2);
      });
      ctx.fill();

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over";

      requestAnimationFrame(animate);
    };

    const getMouseCoordinates = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX || event.touches[0].clientX) - rect.left;
      const y = (event.clientY || event.touches[0].clientY) - rect.top;
      return { x, y };
    };

    const handleStart = (event) => {
      if (!cardsScratchedRef.current.first || !cardsScratchedRef.current.second){
        setSnackBar(true)
        return;
      }

      isDragging = true;
      isScratchingRef.current = true;
      const { x, y } = getMouseCoordinates(event);
      scratchesRef.current.push({ x, y });
    };

    const handleMove = (event) => {
      if (!cardsScratchedRef.current.first || !cardsScratchedRef.current.second)
        return;
      if (!isDragging) return;

      event.preventDefault();
      const { x, y } = getMouseCoordinates(event);
      scratchesRef.current.push({ x, y });
      if (scratchesRef.current.length > 75 && !fade) {
        setFade(true);
        setTimeout(() => {
          dispatch(setThirdCardScratched());
          setShowCanvas(false);
        }, 500);
      }
    };

    const handleEnd = () => {
      isDragging = false;
      isScratchingRef.current = false;
    };

    // Attach event listeners
    const isTouch = "ontouchstart" in window;
    canvas.addEventListener(isTouch ? "touchstart" : "mousedown", handleStart);
    canvas.addEventListener(isTouch ? "touchmove" : "mousemove", handleMove);
    canvas.addEventListener(isTouch ? "touchend" : "mouseup", handleEnd);
    canvas.addEventListener("mouseleave", handleEnd);

    initializeCanvas();

    return () => {
      canvas.removeEventListener(
        isTouch ? "touchstart" : "mousedown",
        handleStart
      );
      canvas.removeEventListener(
        isTouch ? "touchmove" : "mousemove",
        handleMove
      );
      canvas.removeEventListener(isTouch ? "touchend" : "mouseup", handleEnd);
      canvas.removeEventListener("mouseleave", handleEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [showCanvas, fade, , compatibilityPercentage]);

  return (
    <div
      className={`tw-bg-white tw-justify-center tw-items-center tw-flex tw-h-[542px] tw-rounded-xl tw-relative reveal-third-card-animation`}
      style={{
        width:
          width <= 1148
            ? width <= 500
              ? 260 + 32
              : 320 + 32
            : width / 4.5 + 32,
      }}
    >
      <div className="tw-absolute tw-z-1 tw-border-red-500 tw-flex tw-flex-col tw-justify-evenly tw-items-center tw-h-full">
        {/* Your overlay content remains unchanged */}
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-6">
          <img
            src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076367/SoulmateX/sm35xbbbjwkzahm5txwz.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076370/SoulmateX/j0olqpt03p6jsayz1ap2.svg"
            alt=""
          />
          <div className="tw-flex tw-flex-col tw-items-center">
            <span className="sw378:tw-text-2xl/[28.31px] tw-text-xl tw-font-extrabold tw-font-roboto tw-text-center tw-text-[#1F1D1E]">
              YOUR BEST MATCH IS..
            </span>
            <span className="sw378:tw-text-[40px] tw-text-[32px] tw-font-extrabold tw-font-playfairDisplay tw-text-center tw-text-[#ED1B24]">
              SAGITTARIUS
            </span>
          </div>
        </div>
        <div>
          <h3 className="sw378:tw-text-2xl/[28.13px] tw-text-xl tw-font-bold tw-font-roboto tw-text-center tw-text-[#1F1D1E]">
            COMPATIBILITY SCORE:
          </h3>
          <h2 className="tw-text-[40px]/[46.88px] tw-font-bold tw-font-roboto tw-text-center tw-text-[#ED1B24]">
            {displayedPercentage}%
          </h2>

          <div className="tw-flex tw-justify-center tw-gap-4 tw-items-center">
            <img
              src={
                "https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076352/SoulmateX/z552pbpjyrup79c5uvip.svg"
              }
              alt=""
              className="tw-w-[4rem] tw-h-[4rem]"
            />
            <div className="tw-h-2 tw-bg-[#C1C1C1] tw-w-20 tw-flex tw-items-center">
              <div
                className="tw-h-full tw-bg-[#1F1D1E] tw-relative tw-transition-all tw-duration-[2000ms] tw-ease-out"
                style={{ width: `${percentageWidth}%` }}
              >
                <img
                  src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076367/SoulmateX/sm35xbbbjwkzahm5txwz.svg"
                  alt=""
                  className="tw-w-6 tw-h-6 tw-absolute tw-right-0 tw-top-[0.2rem] tw-translate-x-1/2 -tw-translate-y-1/2"
                />
              </div>
            </div>

            <img
              src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076370/SoulmateX/j0olqpt03p6jsayz1ap2.svg"
              alt=""
              className="tw-w-[4rem] tw-h-[4rem]"
            />
          </div>
        </div>
      </div>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Scratch First two cards to reveal this card.
        </Alert>
      </Snackbar>

      {showCanvas && (
        <div
          className="tw-relative tw-z-10 tw-border-x-[16px] tw-border-y-[22px] tw-border-[#E5F7FF] tw-justify-center tw-items-center tw-flex tw-rounded-xl"
          style={{
            transition: "opacity 0.5s ease-out",
            opacity: fade ? 0 : 1,
          }}
        >
          <canvas
            ref={scContainerRef}
            id="scratchCardThird"
            height="500"
            width={width <= 1148 ? (width <= 500 ? 260 : 320) : width / 4.5}
            style={{
              borderRadius: "12px",
              zIndex: 2,
              cursor: `url("https://img.icons8.com/?size=100&id=bbz76sokMIrd&format=png&color=000000"), auto`,
            }}
          ></canvas>
        </div>
      )}
    </div>
  );
}

function RevealStarCards() {
  const firstCardScratched = useSelector(
    (state) => state.dataStore.firstCardScratched
  );
  const secondCardScratched = useSelector(
    (state) => state.dataStore.secondCardScratched
  );
  const thirdCardScratched = useSelector(
    (state) => state.dataStore.thirdCardScratched
  );

  return (
    <div className="fade-in tw-overflow-hidden">
      <div className="tw-flex">
        <Link className="tw-flex tw-no-underline tw-items-center tw-my-3">
          {firstCardScratched && secondCardScratched && thirdCardScratched && (
            <div className="share-circle-btn tw-p-6 tw-rounded-full tw-z-20">
              <div className="tw-bg-white tw-rounded-md">
                <ArrowForwardIcon
                  sx={{ rotate: "-32.34deg", color: "#ED1B24" }}
                />
              </div>
            </div>
          )}
          <button
            className={`share-reveal-btn tw-py-3 sw500:tw-text-3xl sw444:tw-text-2xl sw:392:tw-text-xl sw378:tw-text-lg  sw378:tw-px-12 tw-px-8 tw-text-white ${
              firstCardScratched && secondCardScratched && thirdCardScratched
                ? "tw-left-[-1.2rem] tw-rounded-r-xl"
                : "tw-rounded-xl"
            } tw-relative tw-z-10 tw-font-bold tw-font-roboto tw-my-8`}
          >
            {firstCardScratched && secondCardScratched && thirdCardScratched
              ? "SHARE THE REVEAL"
              : "SCRATCH CARDS TO REVEAL"}
          </button>
        </Link>
      </div>
      <div className="tw-flex tw-flex-wrap sw1392:tw-justify-between tw-justify-around tw-gap-8">
        <div className="slide-up-first tw-mb-8">
          <RevealScratchCardFirst />
        </div>
        <div className="slide-up-second tw-mb-8">
          <RevealScratchCardSecond />
        </div>
        <div className="slide-up-third tw-mb-8">
          <RevealScratchCardThird />
        </div>
      </div>
    </div>
  );
}

export default RevealStarCards;
