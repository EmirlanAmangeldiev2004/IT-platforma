import React from "react";
import web from "../Hero/web.png";

const Hero = () => {
  return (
    <div id="Hero">
      <div className="container">
        <p className="messi">Главная</p>
        <div className="hero">
          <div className="hero--cards">
            <div className="hero--cards__block">
              <h1 className="hero--cards__block--title">О нашей школе:</h1>
              <p className="hero--cards__block--text">
                Наша платформа — это интенсивная программа обучения для тех, кто
                хочет освоить востребованную профессию, войти в IT и
                зарабатывать больше.
              </p>
            </div>
            <div className="hero--cards__block log">
              <h1 className="hero--cards__block--title">Наша миссия:</h1>
              <p className="hero--cards__block--text">
                Сформировать интерес к современным технологиям и помочь
                школьнику определиться с выбором будущей специальности.
              </p>
            </div>
          </div>
          <div className="hero--images">
            <img src={web} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
