import React from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "./Styles";
import { hot } from "react-hot-loader/root";

import { Content } from "./Components/Structure/Content";
import "./Styles/styles.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const SoloEBPFApp = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/:languageUsed" element={<Content />} />
          <Route path="*" element={<Navigate replace to={"/EN"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default hot(SoloEBPFApp);
