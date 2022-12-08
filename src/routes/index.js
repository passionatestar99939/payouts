import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../containers/HomePage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
