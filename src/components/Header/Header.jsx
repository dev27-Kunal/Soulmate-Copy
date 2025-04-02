import React, { useEffect, useState } from "react";
// import Logo from "../../assets/Logo.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import "./Header.css";
import { Button } from "react-bootstrap";
import LanguageIcon from "@mui/icons-material/Language";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageModal from "../LanguageModal/LanguageModal";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [activeTab, setActiveTab] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const [mobileProductDrawer, setMobileProductDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [coloredBg, setColoredBg] = useState(false);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const path = useLocation();
  // console.log("path: ", path);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const selectPremium = () => {
    setAnchorEl(null);
    navigate("/premium");
  };
  const selectVIP = () => {
    setAnchorEl(null);
    navigate("/vip");
  };

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerWidth > 540) && (window.scrollY > 700)) {
        setColoredBg(true);
      } else if (window.innerWidth < 540 && window.scrollY > 200) {
        setColoredBg(true);
      } else {
        console.log("window.scrollY: ", window.scrollY);
        setColoredBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavigationOptions = [
    {
      name: "Home",
      to: "/",
      ariaLabel: "On clicking this, you will be navigated to the Home Page",
    },
    {
      name: "Products",
      to: "/product",
      subMenu: ["Product 1", "Product 2", "Product 3"],
      ariaLabel:
        "On hovering this you will see two new options, Products and VIP",
    },
    {
      name: "The Love Journal",
      to: "/loveJournal",
      ariaLabel:
        "On clicking this, you will be navigated to the love journal page",
    },
    {
      name: "Business Collaborations",
      to: "/business",
      ariaLabel:
        "On clicking this, you will be navigated to the love bussiness collboration page",
    },
  ];

  return (
    <div
      className={`header ${coloredBg && "header-bg"} ${
        path.pathname === "/" && "animateHeader"
      }`}
    >
      <div className="header-inner-container">
        <div className="logo-nav-container">
          <NavLink
            to={"/"}
            onClick={() => setActiveTab("")}
            aria-label="On clicking this logo, you will be navigated to Landing Page"
          >
            <img
              src="https://res.cloudinary.com/dpunh7hfo/image/upload/v1741076359/SoulmateX/l52nutxefiio25y2z46s.svg"
              alt=""
              className="header-logo"
            />
          </NavLink>

          <div className="nav-container">
            {NavigationOptions.map((item) => (
              <div
                onMouseEnter={item.subMenu ? () => setShowMenu(true) : null}
                onMouseLeave={item.subMenu ? () => setShowMenu(false) : null}
                className="tw-relative"
              >
                <NavLink
                  to={item.name !== "Products" ? item.to : "#"}
                  className={`link-tab ${
                    path.pathname === "/business"
                      ? "business-header-font"
                      : "header-font"
                  } ${path.pathname === item.to ? "active-tab" : ""}`}
                  onClick={() => setActiveTab(item.name)}
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                </NavLink>
                {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  onMouseEnter: () => setAnchorEl(anchorEl),
                  onMouseLeave: handleClose,
                }}
                className="hover:tw-cursor-pointer"
                sx={{ marginTop: 1 }}
              >
                <MenuItem
                  onClick={selectPremium}
                  sx={[
                    { fontWeight: "500", fontFamily: "Roboto", fontSize: 20 },
                    path.pathname === "/premium" && { color: "#ed1b24" },
                  ]}
                >
                  Premium
                </MenuItem>
                <MenuItem
                  onClick={selectVIP}
                  sx={[
                    { fontWeight: "500", fontFamily: "Roboto", fontSize: 20 },
                    path.pathname === "/vip" && { color: "#ed1b24" },
                  ]}
                >
                  VIP
                </MenuItem>
              </Menu> */}
                {item.name === "Products" && showMenu && (
                  <div className="tw-absolute tw-bg-white tw-flex tw-flex-col tw-w-32 tw-px-4 tw-py-4 tw-rounded-[10px] tw-gap-[8px]">
                    <NavLink
                      className={`tw-no-underline tw-text-xl tw-font-roboto tw-font-medium hover:tw-text-[#ED1B24] ${
                        path.pathname === "/premium"
                          ? "tw-text-[#ED1B24]"
                          : "tw-text-[#161616]"
                      }`}
                      to={"/premium"}
                      onClick={() => setShowMenu(false)}
                    >
                      Premium
                    </NavLink>
                    <NavLink
                      className={`tw-no-underline tw-text-xl tw-font-roboto tw-font-medium hover:tw-text-[#ED1B24] ${
                        path.pathname === "/vip"
                          ? "tw-text-[#ED1B24]"
                          : "tw-text-[#161616]"
                      }`}
                      to={"/vip"}
                      onClick={() => setShowMenu(false)}
                    >
                      VIP
                    </NavLink>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="header-btn-container">
          <Button className="lang-Btn" onClick={() => setLanguageModal(true)}>
            {/* <svg data-testid="LanguageIcon"></svg> */}
            <LanguageIcon
              className="lang-btn-icon"
              sx={{ marginRight: "0.5rem" }}
            />
            <span>Language</span>
          </Button>
          {path.pathname === "/business" && (
            <Button className="login-Btn">Login</Button>
          )}
        </div>
        <button
          className="header-menu-btn border-3 rounded tw-border-red-600"
          onClick={() => setDrawerOpen(true)}
          aria-label="Hamburger Menu Button"
        >
          <MenuIcon sx={{ color: "red", textShadow: "2px 2px 5px rgba(255, 0, 0, 0.3)" }} className="header-menu-icon" />
        </button>
        <Drawer
          anchor="top"
          open={drawerOpen}
          sx={{ background: "rgba(0,0,0,0.6)" }}
          PaperProps={{
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none", // Remove shadow if needed
            },
          }}
        >
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-3 tw-mt-5">
            <button
              className="tw-border-2 tw-border-white tw-rounded-full tw-p-2"
              onClick={() => setDrawerOpen(false)}
            >
              <CloseIcon sx={{ color: "white" }} />
            </button>
            {NavigationOptions.map((item) => (
              <>
                <div>
                  <NavLink
                    to={item.name !== "Products" ? item.to : "#"}
                    className={`link-tab tw-text-white ${
                      path.pathname === item.to ? "active-tab" : ""
                    }`}
                    onClick={() => {
                      setActiveTab(item.name);
                      {
                        item.name === "Products" &&
                          setMobileProductDrawerOpen(!mobileProductDrawer);
                      }
                      {
                        item.name !== "Products" && setDrawerOpen(false);
                      }
                    }}
                    aria-label={item.ariaLabel}
                  >
                    {item.name}{" "}
                    {item.name === "Products" && (
                      <ArrowDropDownIcon
                        sx={{ marginTop: "-4px", marginLeft: "-4px" }}
                      />
                    )}
                  </NavLink>
                  {mobileProductDrawer && item.name === "Products" && (
                    <div className="tw-flex tw-flex-col tw-ml-4">
                      <NavLink
                        to={"/premium"}
                        className={`link-tab tw-text-white ${
                          path.pathname === "/premium" ? "active-tab" : ""
                        }`}
                        onClick={() => {
                          setActiveTab(item.name);
                          setDrawerOpen(false);
                        }}
                        aria-label="On Clicking this, you will be navigated to Premium Page"
                      >
                        Premium
                      </NavLink>
                      <NavLink
                        to={"/vip"}
                        className={`link-tab tw-text-white ${
                          path.pathname === "/vip" ? "active-tab" : ""
                        }`}
                        onClick={() => {
                          setActiveTab(item.name);
                          setDrawerOpen(false);
                        }}
                        aria-label="On Clicking this, you will be navigated to VIP Page"
                      >
                        VIP
                      </NavLink>
                    </div>
                  )}
                </div>
              </>
            ))}

            <Button className="lang-Btn" onClick={() => setLanguageModal(true)}>
              <LanguageIcon sx={{ fontSize: 32, marginRight: "0.5rem" }} />
              <span>Language</span>
            </Button>
            {path.pathname === "/business" && (
              <Button className="login-Btn pt-4 pb-4">Login</Button>
            )}
          </div>
        </Drawer>
        <LanguageModal
          openLanguageModal={languageModal}
          setLanguageModal={setLanguageModal}
        />
      </div>
    </div>
  );
}

export default Header;
