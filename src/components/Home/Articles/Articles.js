import React from "react";
import { card } from "./../../../FakeBack/FaceBack";
import read from ".././Articles/read.svg";

const Articles = () => {
  return (
    <section id="articles">
      <div className="container">
        <div className="articles">
          <h1>Последние статьи</h1>
          <div className="articles--cards">
            {card.map((el) => (
              <div className="articles--cards--card">
                <img src={el.image} alt="" />
                <p className="articles--cards--card--article">{el.article}</p>
                <p className="articles--cards--card--text">{el.text}</p>
                <div className="articles--cards--card--read">
                  <button>
                    <img src={read} alt="raad" /> Читать
                  </button>
                  <p>01.02.2022</p>
                </div>
              </div>
            ))}
          </div>
          <button className="articles--btn">Показать больше</button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
