import React from "react";
import logo from "../src/assets/youtube.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./slice";

const Nav = () => {
  const dispatch = useDispatch();

  const openCloseMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2">
      <div className="col-span-1">
        <img
          width={40}
          alt="hamburger"
          onClick={openCloseMenu}
          src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/96/null/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png"
        />
      </div>
      <div className="col-span-1">
        <img width={100} src={logo} alt="" />
      </div>
      <div className="col-span-8">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="py-2 px-4 bg-gray-200 rounded-full w-96"
        />
      </div>
      <div className="col-span-1 pl-10">
        <img
          alt="user"
          width={40}
          src="https://img.icons8.com/cotton/100/null/gender-neutral-user--v1.png"
        />
      </div>
    </div>
  );
};

export default Nav;
