import { css } from "@emotion/react";
import { colors } from "./colors";

export const globalStyles = css`
  html,
  body {
    width: 100%;
    min-height: 100vh;
    max-width: 100%;
  }

  body {
    font-family: "Proxima Nova", "Open Sans", "Helvetica", "Arial", "sans-serif";
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-width: 100%;
    background: ${colors.januaryGrey};

    font-size: 16px;
    line-height: 19px;

    &.lockedScrolling {
      overflow: hidden;
    }

    * {
      box-sizing: border-box;
    }

    #root {
      max-width: 100vw;
      overflow: hidden;
    }
  }
`;
