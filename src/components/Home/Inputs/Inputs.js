import React from "react";

const Inputs = () => {
  return (
    <section id="inputs">
      <div className="container">
        <div className="inputs">
          <div className="inputs--text">
            <h1>Оставить заявку</h1>
            <p>
              Заполните краткую форму с ключевым вопросами, и мы подготовимся к
              разговору с вами
            </p>
          </div>
          <form className="inputs--inps">
            <label className="inputs--inps--first">
              ФИО*
              <input type="text" />
            </label>
            <label className="inputs--inps--second">
              Номер телефон*
              <input type="text" />
            </label>
            <label className="inputs--inps--third">
              Email*
              <input type="email" />
            </label>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inputs;
