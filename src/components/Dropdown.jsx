import React from "react";
import { createPopper } from "@popperjs/core";
import Twitch from "./icons/Twitch";
import Heart from "./icons/Heart";
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
  const navigation = [
    { name: 'Prince', href: '/prince' },
    { name: 'Anas', href: '/anas' },
    { name: 'Mushway', href: '/mush' },
    { name: 'Shironamie', href: '/shironamie' },
    { name: 'Stun3R', href: '/' },
  ]
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
                "text-base z-10 float-left py-3 rounded-t-none list-none text-left rounded bg-purple-500 dark:bg-purple-700 shadow-lg mt-4 transition-all duration-150 ease-in-out -ml-12"
              }
              style={{ minWidth: "14.9rem" }}
            >
              {navigation.map((item) => (
              <a
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap transition duration-150 dark:bg-purple-700 dark:hover:bg-purple-600 hover:bg-purple-400" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                <Link key={item.name} to={item.href} className="inline-flex"><Heart />&nbsp;{item.name}</Link>
              </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;