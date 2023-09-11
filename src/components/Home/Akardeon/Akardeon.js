import { useState } from "react";
import question from ".././Akardeon/question.png";

const Akardeon = () => {
  const [nav, setNav] = useState(false);
  const [firstClass, setFirstClass] = useState("down click");
  function FirstNavigation() {
    !nav ? setFirstClass("up unclick") : setFirstClass("down click");
    setNav(!nav);
    setNavOne(
      false ? setFirstOneClass("up unclick") : setFirstOneClass("down click")
    );
    setNavTwo(
      false ? setFirstTwoClass("up unclick") : setFirstTwoClass("down click")
    );
    setNavThree(
      false
        ? setFirstThreeClass("up unclick")
        : setFirstThreeClass("down click")
    );
    setNavFour(
      false ? setFirstFourClass("up unclick") : setFirstFourClass("down click")
    );
    setNavFive(
      false ? setFirstFiveClass("up unclick") : setFirstFiveClass("down click")
    );
    setNavSix(
      false ? setFirstSixClass("up unclick") : setFirstSixClass("down click")
    );
  }

  const [navOne, setNavOne] = useState(false);
  const [firstOneClass, setFirstOneClass] = useState("down click");
  function FirstNavigationOne() {
    !navOne ? setFirstOneClass("up unclick") : setFirstOneClass("down click");
    setNavOne(!navOne);
    setNav(false ? setFirstClass("up unclick") : setFirstClass("down click"));
    setNavTwo(
      false ? setFirstTwoClass("up unclick") : setFirstTwoClass("down click")
    );
    setNavThree(
      false
        ? setFirstThreeClass("up unclick")
        : setFirstThreeClass("down click")
    );
    setNavFour(
      false ? setFirstFourClass("up unclick") : setFirstFourClass("down click")
    );
    setNavFive(
      false ? setFirstFiveClass("up unclick") : setFirstFiveClass("down click")
    );
    setNavSix(
      false ? setFirstSixClass("up unclick") : setFirstSixClass("down click")
    );
  }

  const [navTwo, setNavTwo] = useState(false);
  const [firstTwoClass, setFirstTwoClass] = useState("down click");
  function FirstNavigationTwo() {
    !navTwo ? setFirstTwoClass("up unclick") : setFirstTwoClass("down click");
    setNavTwo(!navTwo);
    setNav(false ? setFirstClass("up unclick") : setFirstClass("down click"));
    setNavOne(
      false ? setFirstOneClass("up unclick") : setFirstOneClass("down click")
    );
    setNavThree(
      false
        ? setFirstThreeClass("up unclick")
        : setFirstThreeClass("down click")
    );
    setNavFour(
      false ? setFirstFourClass("up unclick") : setFirstFourClass("down click")
    );
    setNavFive(
      false ? setFirstFiveClass("up unclick") : setFirstFiveClass("down click")
    );
    setNavSix(
      false ? setFirstSixClass("up unclick") : setFirstSixClass("down click")
    );
  }

  const [navThree, setNavThree] = useState(false);
  const [firstThreeClass, setFirstThreeClass] = useState("down click");
  function FirstNavigationThree() {
    !navThree
      ? setFirstThreeClass("up unclick")
      : setFirstThreeClass("down click");
    setNavThree(!navThree);
    setNav(false ? setFirstClass("up unclick") : setFirstClass("down click"));
    setNavOne(
      false ? setFirstOneClass("up unclick") : setFirstOneClass("down click")
    );
    setNavTwo(
      false ? setFirstTwoClass("up unclick") : setFirstTwoClass("down click")
    );
    setNavFour(
      false ? setFirstFourClass("up unclick") : setFirstFourClass("down click")
    );
    setNavFive(
      false ? setFirstFiveClass("up unclick") : setFirstFiveClass("down click")
    );
    setNavSix(
      false ? setFirstSixClass("up unclick") : setFirstSixClass("down click")
    );
  }

  const [navFour, setNavFour] = useState(false);
  const [firstFourClass, setFirstFourClass] = useState("down click");
  function FirstNavigationFour() {
    !navFour
      ? setFirstFourClass("up unclick")
      : setFirstFourClass("down click");
    setNavFour(!navFour);
    setNav(false ? setFirstClass("up unclick") : setFirstClass("down click"));
    setNavOne(
      false ? setFirstOneClass("up unclick") : setFirstOneClass("down click")
    );
    setNavTwo(
      false ? setFirstTwoClass("up unclick") : setFirstTwoClass("down click")
    );
    setNavThree(
      false
        ? setFirstThreeClass("up unclick")
        : setFirstThreeClass("down click")
    );
    setNavFive(
      false ? setFirstFiveClass("up unclick") : setFirstFiveClass("down click")
    );
    setNavSix(
      false ? setFirstSixClass("up unclick") : setFirstSixClass("down click")
    );
  }

  const [navFive, setNavFive] = useState(false);
  const [firstFiveClass, setFirstFiveClass] = useState("down click");
  function FirstNavigationFive() {
    !navFive
      ? setFirstFiveClass("up unclick")
      : setFirstFiveClass("down click");
    setNavFive(!navFive);
    setNav(false ? setFirstClass("up unclick") : setFirstClass("down click"));
    setNavOne(
      false ? setFirstOneClass("up unclick") : setFirstOneClass("down click")
    );
    setNavTwo(
      false ? setFirstTwoClass("up unclick") : setFirstTwoClass("down click")
    );
    setNavThree(
      false
        ? setFirstThreeClass("up unclick")
        : setFirstThreeClass("down click")
    );
    setNavFour(
      false ? setFirstFourClass("up unclick") : setFirstFourClass("down click")
    );
    setNavSix(
      false ? setFirstSixClass("up unclick") : setFirstSixClass("down click")
    );
  }

  const [navSix, setNavSix] = useState(false);
  const [firstSixClass, setFirstSixClass] = useState("down click");
  function FirstNavigationSix() {
    !navSix ? setFirstSixClass("up unclick") : setFirstSixClass("down click");
    setNavSix(!navSix);
    setNav(false ? setFirstClass("up unclick") : setFirstClass("down click"));
    setNavOne(
      false ? setFirstOneClass("up unclick") : setFirstOneClass("down click")
    );
    setNavTwo(
      false ? setFirstTwoClass("up unclick") : setFirstTwoClass("down click")
    );
    setNavThree(
      false
        ? setFirstThreeClass("up unclick")
        : setFirstThreeClass("down click")
    );
    setNavFour(
      false ? setFirstFourClass("up unclick") : setFirstFourClass("down click")
    );
    setNavFive(
      false ? setFirstFiveClass("up unclick") : setFirstFiveClass("down click")
    );
  }

  return (
    <section id="akardeon">
      <div className="container">
        <div className="akardeon">
          <div className="akardeon--images">
            <h1>Остались вопросы?</h1>
            <img src={question} alt="" />
          </div>
          <div className="akardeon--all">
            <div className="akardeon--all--textOne">
              <div
                onClick={FirstNavigation}
                className="akardeon--all--textOne--first"
              >
                <p>Что такое зарезервированные слова в программировании?</p>
                <span className={firstClass}></span>
              </div>
              {!nav ? null : (
                <div className="akardeon--all--textOne--text">
                  <p>
                    Зарезервированные или ключевые слова – это слова и
                    выражения, которые имеют предопределенные значения и не
                    могут использоваться при написании кода для иных целей,
                    например, для именования переменных. Примеры
                    распространенных ключевых слов в языках программирования –
                    это конструкции if/then/else или различные варианты циклов.
                    Вроде for и while.
                  </p>
                </div>
              )}
            </div>
            <div className="akardeon--all--textOne">
              <div
                onClick={FirstNavigationOne}
                className="akardeon--all--textOne--first"
              >
                <p>Могу ли я отказаться от автопродления подписки</p>
                <span className={firstOneClass}></span>
              </div>
              {!navOne ? null : (
                <div className="akardeon--all--textOne--text">
                  <p>
                    Помните, что от подписки как от услуги вы можете отказаться
                    в любой момент. Такое право предоставлено всем потребителям
                    в соответствии со статьей 32 Закона о защите прав
                    потребителей, а также в соответствии с пунктом 1 статьи 782
                    Гражданского кодекса.
                  </p>
                </div>
              )}
            </div>
            <div className="akardeon--all--textOne">
              <div
                onClick={FirstNavigationTwo}
                className="akardeon--all--textOne--first"
              >
                <p>Могу ли я вернуть деньги</p>
                <span className={firstTwoClass}></span>
              </div>
              {!navTwo ? null : (
                <div className="akardeon--all--textOne--text">
                  <p>
                    Согласно п. 1 ст. 31 закона «О защите прав потребителей»,
                    сервис обязан вернуть деньги за платную подписку при отказе
                    от нее в течение конкретного срока – 10 дней. Если ваша
                    претензия осталась без реакции, вы можете обратиться в
                    Роспотребнадзор с жалобой, а также направить исковое
                    заявление в суд.
                  </p>
                </div>
              )}
            </div>
            <div className="akardeon--all--textOne">
              <div
                onClick={FirstNavigationThree}
                className="akardeon--all--textOne--first"
              >
                <p>Какие направление в IT самые актуальные</p>
                <span className={firstThreeClass}></span>
              </div>
              {!navThree ? null : (
                <div className="akardeon--all--textOne--text">
                  <p>
                    Какие IT-специальности востребованы? Востребованные
                    IT-специальности включают разработчиков мобильных и
                    веб-приложений, а также специалистов по обработке данных,
                    веб-дизайнеров и DevOps-инженеров. Спрос на
                    квалифицированных программистов на Java и Python также не
                    падает.
                  </p>
                </div>
              )}
            </div>
            <div className="akardeon--all--textOne">
              <div
                onClick={FirstNavigationFour}
                className="akardeon--all--textOne--first"
              >
                <p>
                  Нужно ли учить другой язык программирования,
                  <span> перед изучением языка С++?</span>
                </p>
                <span className={firstFourClass}></span>
              </div>
              {!navFour ? null : (
                <div className="akardeon--all--textOne--text">
                  <p>
                    Я думаю, что изучение второго языка будет только плюсом. Но
                    это нужно делать, когда человек уверенно владеет основным
                    языком. На старте возникает много сложностей и ошибок, и
                    если параллельно изучать что-то новое, трудности могут
                    накладываться друг на друга. Это замедлит понимание и может
                    вообще оттолкнуть от программирования.
                  </p>
                </div>
              )}
            </div>
            <div className="akardeon--all--textOne">
              <div
                onClick={FirstNavigationFive}
                className="akardeon--all--textOne--first"
              >
                <p>Платформа обнoвляется?</p>
                <span className={firstFiveClass}></span>
              </div>
              {!navFive ? null : (
                <div className="akardeon--all--textOne--text">
                  <p>
                    Я думаю, что изучение второго языка будет только плюсом. Но
                    это нужно делать, когда человек уверенно владеет основным
                    языком. На старте возникает много сложностей и ошибок, и
                    если параллельно изучать что-то новое, трудности могут
                    накладываться друг на друга. Это замедлит понимание и может
                    вообще оттолкнуть от программирования.
                  </p>
                </div>
              )}
            </div>
            <div className="akardeon--all--textOne">
              <div
                onClick={FirstNavigationSix}
                className="akardeon--all--textOne--first"
              >
                <p>Как я могу получить доступ кo всем курсом</p>
                <span className={firstSixClass}></span>
              </div>
              {!navSix ? null : (
                <div className="akardeon--all--textOne--text">
                  <p>
                    Для того, чтобы начать обучение, необходимо
                    зарегистрироваться на IT образовательном платформе, войти на
                    сайт и выбрать понравившийся курс. Для регистрации вы можете
                    использовать ваш email или профиль социальной сети. Для
                    активации аккаунта вам нужно подтвердить почтовый адрес.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Akardeon;
