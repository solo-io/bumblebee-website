import React from "react";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { globalStyles } from "./Styles";
import { hot } from "react-hot-loader/root";

import { Content } from "./Components/Structure/Content";
import { Footer } from "./Components/Structure/Footer";
import "./Styles/styles.css";

const SoloEBPFApp = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Content />
    </>
  );
};

export default hot(SoloEBPFApp);
