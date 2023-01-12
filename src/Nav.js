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
    <div className="row m-2">
      <div className="col">
        <img
          width={30}
          alt="hamburger"
          onClick={openCloseMenu}
          src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/96/null/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png"
        />
      </div>
      <div className="col-2">
        <img width={100} src={logo} alt="" />
      </div>
      <div className="col-7">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="py-1.5 px-3 text-sm border border-black-900 rounded-full w-8/12"
        />
      </div>
      <div className="col-2 pl-10">
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
