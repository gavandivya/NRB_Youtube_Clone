import React, { useContext } from "react";
import logo from "../assets/youtube.png";
import darklogo from "../assets/darklogo.png";
import hamWhite from "../assets/hamburgerWhite.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../slice/slice";
import ThemeContext from "../Context/ThemeContext";
import SearchContext from "../Context/SearchContext";

const Nav = () => {
  const dispatch = useDispatch();
  const { themeCon, setThemeCon } = useContext(ThemeContext);
  const { searchContext, setSearchContext } = useContext(SearchContext)

  const openCloseMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="row m-2">
      <div className="col">
        {themeCon === "light" ? <img
          width={30}
          alt="hamburger"
          onClick={openCloseMenu}
          src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/96/null/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png"
        /> :
          <img
            className="pt-1"
            width={40}
            alt="hamburger"
            onClick={openCloseMenu} src={hamWhite} />}
      </div>
      <div className="col-2">
        {themeCon === "light" ? <img width={120} src={logo} alt="" /> :
          <img alt="dark" width={120} src={darklogo} />}
      </div>
      <div className="col-7">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="py-1.5 px-3 text-sm border border-black-900 rounded-full w-8/12"
          value={searchContext}
          onChange={(e) => setSearchContext(e.target.value)}
        />
      </div>
      <div className="col-1 pl-10">
        <img
          alt="user"
          width={40}
          src="https://img.icons8.com/cotton/100/null/gender-neutral-user--v1.png"
        />
        {/* <span>{themeCon}</span> */}
        {/* <button className="btn btn-sm" onClick={() => setThemeCon(themeCon === "dark" ? "light" : "dark")}>{themeCon}</button> */}
      </div>
      <div className="col-1">
        <i
          className={`cursor-pointer ${themeCon === "dark"
            ? "fa fa-sun fa-2x text-white"
            : "fa fa-moon fa-2x text-gray-900"
            }`}
          onClick={() => {
            setThemeCon(themeCon === "dark" ? "light" : "dark");
            document.body.style.backgroundImage =
              themeCon === "dark"
                ? "linear-gradient(to right,#fff,#fff)"
                : "linear-gradient(rgb(23 23 23),rgb(23 23 23))";
            document.body.style.color = themeCon === "light" ? "#fff" : "#000"
          }}
        ></i>
      </div>
    </div>
  );
};

export default Nav;
