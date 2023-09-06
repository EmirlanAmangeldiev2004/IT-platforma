import React, { useState } from "react";
import logo from "../Header/logo.svg";
import instagram from ".././Footer/InstagramLogo.svg";
import youTude from ".././Footer/YoutubeLogo.svg";
import facebook from ".././Footer/FacebookLogo.svg";
import twitter from ".././Footer/TwitterLogo.svg";
import tiktok from ".././Footer/TiktokLogo.svg";
import telegram from ".././Footer/TelegramLogo.svg";
import email from ".././Footer/email.svg";
import tel from ".././Footer/Phone.svg";
import nav from ".././Footer/MapPin.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--logo">
            <img src={logo} alt="logo" />
            <div className="footer--logo--btns">
              <button>KG</button>
              <button>RU</button>
            </div>
          </div>
          <div className="footer--links">
            <h3>Быстрые ссылки</h3>
            <p>О школе</p>
            <p>Наши курсы</p>
            <p>О нас </p>
          </div>
          <div className="footer--social">
            <h3>Социальные сети</h3>
            <div className="footer--social--icons">
              <a href="https://www.instagram.com/motion_web/  ">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.youtube.com/@motionwebllc683">
                <img src={youTude} alt="youTude" />
              </a>
              <a href="">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.tiktok.com/@it_motionweb?lang=ru-RU">
                <img src={tiktok} alt="tiktok" />
              </a>
              <a href="https://t.me/Emir_AMANGELDIEV">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
          </div>
          <div className="footer--contact">
            <h3>Контакты</h3>
            <div className="footer--contact--email">
              <img src={email} alt="email" />
              <p>@motionwebteam@gmail.com</p>
            </div>
            <div className="footer--contact--tel">
              <img src={tel} alt="tel" />
              <p>+996 559 - 69 - 26 - 26</p>
            </div>
          </div>
          <div className="footer--address">
            <h3>Адреса</h3>
            <a href="https://www.google.com/maps/place/%D0%AD%D0%BB%D0%B8%D1%82+%D0%A5%D0%B0%D1%83%D1%81/@42.8799333,74.5857581,20.61z/data=!4m6!3m5!1s0x389ec81917de89db:0xeece287b5a13a09b!8m2!3d42.8798935!4d74.5858514!16s%2Fg%2F11c1s1s9c7?entry=ttu">
              <div className="footer--address--nav">
                <img src={nav} alt="nav" />
                <p>Турусбекова 109 / 3</p>
              </div>
            </a>
            <p className="footer--address--p">
              Идентификационный <span>код: 1234567890</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
