import React from "react";

const Choice = () => {
  return (
    <div id="Choice">
      <div className="container">
        <div className="choice">
          <div className="choice--block">
            <h1 className="choice--block__title">Оставить заявку</h1>
            <p className="choice--block__text">
              Заполните краткий бриф с ключевым вопросами, <br /> и мы
              подготовимся к разговору с вами{" "}
            </p>
          </div>
          <div className="choice--block1">
            <p className="choice--block1__fio">ФИО*</p>
            <input className="choice--block1__infio" type="text" />
            <p className="choice--block1__num">Номер телефон*</p>
            <input className="choice--block1__innum" type="text" />
            <p className="choice--block1__ema">Email*</p>
            <input className="choice--block1__inema" type="text" />
            <button className="choice--block1__btn">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
