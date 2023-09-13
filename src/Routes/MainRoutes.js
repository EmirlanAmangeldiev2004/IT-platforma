import React from "react";
import { Route, Routes } from "react-router-dom";
import School from "../components/School/School";
import Home from "./../components/Home/Home";

const MainRoutes = () => {
  let PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/school", element: <School />, id: 2 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
