import React from "react";

const MasterClass = () => {
  return (
    <div id="master">
      <div className="container">
        <div className="master">
          <h1 className="master--title">Мастер-классы</h1>
          <div className="master--cards">
            <div className="master--cards__card">
              <h2 className="master--cards__card--title">
                Реактивное программирование на Java: как, зачем и стоит ли?{" "}
              </h2>
              <p className="master--cards__card--text">
                Программирования появилась сравнительно недавно, лет 10 назад.
                Что вызвало популярность этого относительно нового подхода и
                почему сейчас он в тренде, рассказал на конференции РИТ++ ...
              </p>
            </div>
            <div className="master--cards__card">
              <h2 className="master--cards__card--title">
                Реактивное программирование на Java: как, зачем и стоит ли?{" "}
              </h2>
              <p className="master--cards__card--text">
                Программирования появилась сравнительно недавно, лет 10 назад.
                Что вызвало популярность этого относительно нового подхода и
                почему сейчас он в тренде, рассказал на конференции РИТ++ ...
              </p>
            </div>
            <div className="master--cards__card">
              <h2 className="master--cards__card--title">
                Реактивное программирование на Java: как, зачем и стоит ли?{" "}
              </h2>
              <p className="master--cards__card--text">
                Программирования появилась сравнительно недавно, лет 10 назад.
                Что вызвало популярность этого относительно нового подхода и
                почему сейчас он в тренде, рассказал на конференции РИТ++ ...
              </p>
            </div>
          </div>
          <div className="master--btns">
            <button className="master--btns__btn">Все мастер классы</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClass;
