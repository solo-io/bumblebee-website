import React from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "./Styles";
import { hot } from "react-hot-loader/root";

import { Content } from "./Components/Structure/Content";
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
