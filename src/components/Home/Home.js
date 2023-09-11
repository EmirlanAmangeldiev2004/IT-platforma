import React from "react";
import Hero from "./Hero/Hero";
import Articles from "./Articles/Articles";
import SignUp from "./SignUp/SignUp";
import Akardeon from "./Akardeon/Akardeon";
import Inputs from "./Inputs/Inputs";

const Home = () => {
  return (
    <>
      <Hero />
      <Articles />
      <SignUp />
      <Akardeon />
      <Inputs />
    </>
  );
};

export default Home;
