import React from "react";
import Hero from "./Hero/Hero";
import Block from "./Block/Block";
import MasterClass from "./MasterClass/MasterClass";
import BlackBlock from "./BlackBlock/BlackBlock";
import Inputs from "./../Home/Inputs/Inputs";

const School = () => {
  return (
    <div className="School">
      <Hero />
      <Block />
      <MasterClass />
      <BlackBlock />
      <Inputs />
    </div>
  );
};

export default School;
