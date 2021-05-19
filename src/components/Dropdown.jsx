import React from "react";
import { createPopper } from "@popperjs/core";
import Twitch from "./icons/Twitch";
import { Link } from "react-router-dom";
const Dropdown = ({ color }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap cursor-pointer">
        <div className="w-full px-4 sm:w-6/12 md:w-4/12">
          <div className="relative inline-flex w-full align-middle">
            <a
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
              className="font-mono text-xl pointer"
            >
              <twitch className="inline-flex pointer">
                <Twitch />
                &nbsp;My List
              </twitch>
            </a>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-10 float-left py-2 list-none text-left rounded bg-purple-500 dark:bg-purple-700 shadow-lg mt-1 transition duration-150"
              }
              style={{ minWidth: "11rem", marginTop: 9, marginLeft: -10 }}
            >
              <a
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:bg-purple-700 dark:hover:bg-purple-600 hover:bg-purple-800" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                <Link to="/prince">Prince</Link>
              </a>
              <a
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:bg-purple-700 dark:hover:bg-purple-600 hover:bg-purple-800" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                <Link to="/anas">Anas</Link>
              </a>
              <a
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:bg-purple-700 dark:hover:bg-purple-600 hover:bg-purple-800" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                <Link to="/">Shiromanie</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
