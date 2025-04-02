import React, { useRef, useState, useEffect } from "react";
import "./CommentSection.css";
import Comment from "../../../components/Comment/Comment";

function CommentSection() {
  const commentRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isBoldActive, setIsBoldActive] = useState(false);
  const [isItalicActive, setIsItalicActive] = useState(false);
  const [isUnderlineActive, setIsUnderlineActive] = useState(false);

  const CommentReplyArr = [
    {
      id: 1,
      commentorProfile:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1742968974/SoulmateX/j8ww7wxylgwa017w74ej.jpg",
      commentorName: "Lorem Ipsum",
      commentTime: "58 mins ago",
      commentContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
      likes: 58,
      dislikes: 5,
      replies: [
        {
          id: 101,
          commentorProfile:
            "https://res.cloudinary.com/dpunh7hfo/image/upload/v1742968974/SoulmateX/hoz5nlsgaspt7zsczxu6.jpg",
          commentorName: "Lorem Ipsum",
          commentTime: "58 mins ago",
          commentContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
          likes: 58,
          dislikes: 5,
        },
      ],
    },
    {
      id: 2,
      commentorProfile:
        "https://res.cloudinary.com/dpunh7hfo/image/upload/v1742968974/SoulmateX/j8ww7wxylgwa017w74ej.jpg",
      commentorName: "Lorem Ipsum",
      commentTime: "58 mins ago",
      commentContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
      likes: 58,
      dislikes: 5,
      replies: [
        {
          id: 102,
          commentorProfile:
            "https://res.cloudinary.com/dpunh7hfo/image/upload/v1742968974/SoulmateX/hoz5nlsgaspt7zsczxu6.jpg",
          commentorName: "Lorem Ipsum",
          commentTime: "58 mins ago",
          commentContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
          likes: 58,
          dislikes: 5,
        },
      ],
    },
  ];

  // Update isEmpty state on input
  useEffect(() => {
    const checkContent = () => {
      setIsEmpty(commentRef.current.innerHTML.trim() === "");
    };

    const div = commentRef.current;
    div.addEventListener("input", checkContent);
    return () => div.removeEventListener("input", checkContent);
  }, []);

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
  }, []);

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

  return (
    <div className="tw-w-[80.7%] tw-mx-auto tw-flex tw-flex-col tw-gap-14 sw1024:tw-pb-36 tw-pb-24">
      <div className="tw-w-full tw-h-full sw552:tw-py-9 tw-py-6 sw552:tw-px-14 tw-px-6 tw-flex tw-flex-col tw-justify-between tw-bg-[#F2F2F2]  tw-rounded-xl">
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
              Add Comment...
            </span>
          )}
        </div>

        <div className="tw-flex tw-justify-between tw-items-center">
          <div className="tw-flex tw-items-center tw-gap-4">
            <button
              type="button"
              tabIndex="-1"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => applyFormatting("bold")}
              className={`tw-text-[26px] tw-px-2 tw-rounded-md tw-font-lexenDeca ${
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
              className={`tw-text-[26px] tw-pr-3 tw-pl-2 tw-rounded-md ${
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
              className={`tw-text-[26px]/[100%] tw-px-2 tw-py-[7px] tw-rounded-md ${
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
            className="tw-bg-[#ED1B24] tw-text-white sw552:tw-rounded-[10px] tw-rounded-lg sw768:tw-py-[8.5px] sw552:tw-py-[6.5px] tw-py-2 sw768:tw-px-10 sw552:tw-px-8 tw-px-2 tw-font-bold sw768:tw-text-4xl sw552:tw-text-2xl tw-text-sm tw-font-roboto"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-12">
        <div className="tw-flex tw-gap-4 tw-items-center">
          <h1 className="tw-text-[32px] tw-font-bold tw-font-roboto tw-text-black tw-capitalize tw-mb-0">
            Comments
          </h1>
          <div>
            <button className="tw-px-3 tw-py-1 tw-bg-[#ED1B24] tw-text-2xl/[100%] tw-font-bold tw-font-roboto tw-rounded-lg tw-text-white">
              22
            </button>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-6">
          {CommentReplyArr.map((commentor) => (
            <Comment commentor={commentor} key={commentor.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
