import React from "react";
import blur from "../Hero/blur.png";
import fon from ".././Hero/луч.png";
import men from ".././Hero/men.png";
import setting from ".././Hero/setting.png";
import lamp from ".././Hero/lamp.png";
import tools from ".././Hero/tools.png";
import kavychka from ".././Hero/kavychka.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="back"></div>
        <div className="hero">
          <div className="hero--text">
            <h1>IT образовательная платформа</h1>
            <p>
              Наша образовательная платформа вам даст необходимые практические
              знания для адаптации в IT-сфере.
            </p>
          </div>
          <div className="hero--image">
            <img className="hero--image--fon" src={fon} alt="" />
            <img className="hero--image--blur" src={blur} alt="blur" />
            <img className="hero--image--men" src={men} alt="men" />
            <img className="hero--image--setting" src={setting} alt="setting" />
            <img className="hero--image--lamp" src={lamp} alt="lamp" />
            <img className="hero--image--tools" src={tools} alt="tools" />
            <img
              className="hero--image--kavychka"
              src={kavychka}
              alt="kavychka"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
