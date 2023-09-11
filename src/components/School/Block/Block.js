import React from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import imb from "../Block/Arrow 2.png";

const Block = () => {
  return (
    <div id="Block">
      <div className="container">
        <div className="block">
          <h1 className="block--title">Курсы</h1>
          <div className="block--cards">
            <div className="block--cards__card">
              <h2 className="block--cards__card--title">
                Frontend-разработчик
              </h2>
              <p className="block--cards__card--text">
                Мастер создания сайтов. Умеет делать их красивыми,
                интерактивными, с большим функционалом. Профессия отлично
                подойдет тем, кто хочет фрилансить и постоянно разрабатывать
                новые проекты
              </p>
              <div className="block--cards__card--nav">
                <NavLink to={"/Подробнее"}>Подробнее</NavLink>
                <h1>
                  <BsArrowRight className="block--cards__card--icon" />
                </h1>
              </div>
            </div>
            <div className="block--cards__card">
              <h2 className="block--cards__card--title">Backend-разработчик</h2>
              <p className="block--cards__card--text">
                Специалист, который отвечает за построение логики для воплощения
                любой идеи. Он собирает фундамент и опорную систему для проекта
                - от простого сайта для магазина одежды до сложных
                вычислительных систем нейронных сетей.
              </p>
              <div className="block--cards__card--nav">
                <NavLink to={"/Подробнее"}>Подробнее</NavLink>
                <h1>
                  <BsArrowRight className="block--cards__card--icon" />
                </h1>
              </div>
            </div>
            <div className="block--cards__card">
              <h2 className="block--cards__card--title">UX / UI ДизайнерUX </h2>
              <p className="block--cards__card--text">
                Креативный специалист, который придумывает дизайн и интерфейс
                продукта. Специалист UX/UI отвечает за подбор форм, цветов,
                Функциональности дизайна и прочих важных параметров для
                комфорьного использования продукта.
              </p>
              <div className="block--cards__card--nav">
                <NavLink to={"/Подробнее"}>Подробнее</NavLink>
                <h1>
                  <BsArrowRight className="block--cards__card--icon" />
                </h1>
              </div>
            </div>
          </div>
          <div className="kub"></div>
          <div className="block--btns">
            <button className="block--btns__love">Все курсы</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
