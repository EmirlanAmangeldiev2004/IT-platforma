import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Header/logo.svg";
import menu from "../Header/menu.svg";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header--menu">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" />
            </NavLink>
            <nav>
              <li>О школе</li>
              <li>Наши курсы</li>
              <li>О нас</li>
            </nav>
          </div>
          <div className="header--btns">
            <p>Войти</p>
            <button>Подписаться</button>
          </div>
          <div className="header--burger">
            <img src={menu} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
