import React, { useEffect, useRef, useState } from "react";
import "./Replies.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import MessageIcon from "@mui/icons-material/Message";

function Replies({ replier }) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likeNumber, setLikeNumber] = useState(replier.likes);
  const [dislikeNumber, setDislikeNumber] = useState(replier.dislikes);
  const [showReplyBox, setShowReplyBox] = useState(false);

  const commentRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isBoldActive, setIsBoldActive] = useState(false);
    const [isItalicActive, setIsItalicActive] = useState(false);
    const [isUnderlineActive, setIsUnderlineActive] = useState(false);
  
    useEffect(() => {
        if (!commentRef.current) return;
  
      const checkContent = () => {
        setIsEmpty(commentRef.current.innerHTML.trim() === "");
      };
  
      const div = commentRef.current;
      div.addEventListener("input", checkContent);
      return () => div.removeEventListener("input", checkContent);
    }, [showReplyBox]);
  
    // Listen to selection changes to update formatting state
    useEffect(() => {
      const updateFormattingState = () => {
        // Only update if our contentEditable is active
        if (document.activeElement === commentRef.current) {
          setIsBoldActive(document.queryCommandState("bold"));
          setIsItalicActive(document.queryCommandState("italic"));
          setIsUnderlineActive(document.queryCommandState("underline"));
        }
      };
  
      document.addEventListener("selectionchange", updateFormattingState);
      return () =>
        document.removeEventListener("selectionchange", updateFormattingState);
    }, [showReplyBox]);
  
    const applyFormatting = (command) => {
      // Apply formatting and update state manually as well
      if (command === "bold") {
        setIsBoldActive(!isBoldActive);
      }
      if (command === "italic") {
        setIsItalicActive(!isItalicActive);
      }
      if (command === "underline") {
        setIsUnderlineActive(!isUnderlineActive);
      }
  
      document.execCommand(command, false, null);
  
      // Refocus on the contentEditable field
      if (commentRef.current) {
        commentRef.current.focus();
      }
    };
  
    const handleSubmit = () => {
      alert(`Comment: ${commentRef.current.innerHTML}`);
    };
  
    const handlePaste = (e) => {
      e.preventDefault();
      // Get plain text from clipboard
      const text = e.clipboardData.getData("text/plain");
      // Insert plain text at the current caret position
      document.execCommand("insertText", false, text);
    };

  const handleLike = () => {
    if (like) {
      setLikeNumber(likeNumber - 1);
    } else {
      if (dislike) {
        setDislikeNumber(dislikeNumber - 1);
      }
      setLikeNumber(likeNumber + 1);
    }
    setDislike(false);
    setLike(!like);
  };
  const handleDislike = () => {
    if (dislike) {
      setDislikeNumber(dislikeNumber - 1);
    } else {
      if (like) {
        setLikeNumber(likeNumber - 1);
      }
      setDislikeNumber(dislikeNumber + 1);
    }
    setLike(false);
    setDislike(!dislike);
  };

  return (
    <div className="tw-flex sw768:tw-gap-6 tw-gap-[4vw]">
      <div className="sw768:tw-min-h-20 sw552:tw-min-h-[8vw] tw-min-h-[10vw] sw768:tw-min-w-20 sw552:tw-min-w-[8vw] tw-min-w-[10vw]">
        <img
          src={replier.commentorProfile}
          alt=""
          className="sw768:tw-h-20 sw552:tw-h-[8vw] tw-h-[10vw] sw768:tw-w-20 sw552:tw-w-[8vw] tw-w-[10vw] tw-rounded-full tw-object-cover"
        />
        {/* <div className="tw-h-full tw-w-[1px] tw-mx-auto tw-bg-black"></div> */}
      </div>
      <div className="tw-flex tw-gap-7 tw-flex-col">
        <div className="tw-flex tw-gap-7 tw-flex-col sw768:tw-mt-5 tw-mt-[2vw]">
          <div className="tw-flex tw-gap-3 tw-flex-col">
            <div className="tw-flex tw-items-center sw768:tw-gap-6 tw-gap-[2vw]">
              <h2 className="sw768:tw-text-[32px] sw552:tw-text-[3.5vw] tw-text-[4.25vw] tw-text-black tw-mb-0 tw-font-medium tw-font-roboto tw-capitalize">
                {replier.commentorName}
              </h2>
              <span className="sw768:tw-text-[28px] sw552:tw-text-[3vw] tw-text-[3vw] tw-text-[#8F8F8F] tw-font-medium tw-font-roboto tw-lowercase">
                {replier.commentTime}
              </span>
            </div>
            <p className="sw768:tw-text-2xl sw552:tw-text-[2.75vw] tw-text-[3.5vw] tw-mb-0 tw-text-[#1F1D1E] tw-font-normal tw-font-roboto tw-lowercase">
              {replier.commentContent}
            </p>
          </div>
          <div className="tw-flex sw768:tw-gap-10 tw-gap-[4vw]">
            <button
              className="tw-flex tw-items-center sw552:tw-gap-3 tw-gap-2 hover:tw-cursor-pointer"
              onClick={handleLike}
            >
              <ThumbUpIcon
                className={`sw768:tw-text-[28px] sw552:tw-text-[3vw] tw-text-[3.8vw] ${
                  like ? `tw-text-[#ED1B24]` : `tw-text-[#6E6E6E]`
                } `}
              />
              <span
                className={`sw768:tw-text-[28px] sw552:tw-text-[3vw] tw-text-[3.8vw] tw-font-roboto ${
                  like ? `tw-text-[#ED1B24]` : `tw-text-[#6E6E6E]`
                } tw-font-bold`}
              >
                {likeNumber}
              </span>
            </button>
            <button
              className="tw-flex tw-items-center sw552:tw-gap-3 tw-gap-2 hover:tw-cursor-pointer"
              onClick={handleDislike}
            >
              <ThumbDownIcon
                className={`sw768:tw-text-[28px] sw552:tw-text-[3vw] tw-text-[3.8vw] ${
                  dislike ? `tw-text-[#ED1B24]` : `tw-text-[#6E6E6E]`
                } thumb-down-icon`}
              />
              <span
                className={`sw768:tw-text-[28px] sw552:tw-text-[3vw] tw-text-[3.8vw] tw-font-roboto ${
                  dislike ? `tw-text-[#ED1B24]` : `tw-text-[#6E6E6E]`
                } tw-font-bold`}
              >
                {dislikeNumber}
              </span>
            </button>
            <button
              className="tw-flex tw-items-center sw552:tw-gap-3 tw-gap-2 hover:tw-cursor-pointer"
              onClick={() => setShowReplyBox(!showReplyBox)}
            >
              <MessageIcon className="sw768:tw-text-[28px] sw552:tw-text-[3vw] tw-text-[3.8vw] tw-text-[#6E6E6E] thumb-down-icon" />
              <span className="sw768:tw-text-[28px] sw552:tw-text-[3vw] tw-text-[3.8vw] tw-font-roboto tw-text-[#6E6E6E] tw-font-bold">
                Reply
              </span>
            </button>
          </div>
        </div>
        {showReplyBox && (
          <div className="tw-w-full tw-h-full sw552:tw-py-9 tw-py-3 sw552:tw-px-14 tw-px-4 tw-flex tw-flex-col tw-justify-between tw-bg-[#F2F2F2]  tw-rounded-xl">
            {/* ContentEditable area */}
            <div
              ref={commentRef}
              contentEditable
              onPaste={handlePaste}
              className="tw-w-full tw-bg-transparent tw-outline-none tw-relative tw-min-h-[100px]"
              onFocus={() => setIsEmpty(false)}
              onBlur={() => {
                const cleanHTML = commentRef.current.innerHTML
                  .replace(/<br\s*\/?>/gi, "")
                  .trim();
                setIsEmpty(cleanHTML === "");
              }}
            >
              {isEmpty && (
                <span className="tw-text-[#848484] tw-font-normal sw552:tw-text-2xl tw-text-xl tw-font-roboto tw-absolute tw-pointer-events-none tw-top-0">
                  Add Reply...
                </span>
              )}
            </div>

            <div className="tw-flex tw-justify-between tw-items-center">
              <div className="tw-flex tw-items-center sw552:tw-gap-4 tw-gap-2">
                <button
                  type="button"
                  tabIndex="-1"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => applyFormatting("bold")}
                  className={`sw552:tw-text-[26px] tw-text-[20px] sw552:tw-px-2 tw-px-1 tw-rounded-md tw-font-lexenDeca ${
                    isBoldActive
                      ? "tw-bg-[#ED1B24] tw-text-[#ffffff]"
                      : "tw-text-[#848484]"
                  } tw-font-semibold`}
                >
                  B
                </button>
                <button
                  type="button"
                  tabIndex="-1"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => applyFormatting("italic")}
                  className={`sw552:tw-text-[26px] tw-text-[20px] sw552:tw-pr-3 tw-pr-2 sw552:tw-pl-2 tw-pl-1 tw-rounded-md ${
                    isItalicActive
                      ? "tw-bg-[#ED1B24] tw-text-[#ffffff]"
                      : "tw-text-[#848484]"
                  } tw-font-lexenDeca tw-italic`}
                >
                  I
                </button>
                <button
                  type="button"
                  tabIndex="-1"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => applyFormatting("underline")}
                  className={`sw552:tw-text-[26px] tw-text-[20px] sw552:tw-px-2 tw-px-1 sw552:tw-py-[7px] tw-rounded-md ${
                    isUnderlineActive
                      ? "tw-bg-[#ED1B24] tw-text-[#ffffff]"
                      : "tw-text-[#848484]"
                  } tw-font-lexenDeca tw-text-[#848484] tw-underline`}
                >
                  U
                </button>
              </div>

              <button
                onClick={handleSubmit}
                className="tw-bg-[#ED1B24] tw-text-white sw552:tw-rounded-[10px] tw-rounded-lg sw768:tw-py-[8.5px] sw552:tw-py-[6.5px] tw-py-1 sw768:tw-px-10 sw552:tw-px-8 tw-px-2 tw-font-bold sw768:tw-text-4xl sw552:tw-text-2xl tw-text-sm tw-font-roboto"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Replies;
