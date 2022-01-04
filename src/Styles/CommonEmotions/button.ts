import { css, keyframes } from "@emotion/react";
import { colors } from "../colors";
import styled from "@emotion/styled";
import { Button } from "antd";

export const slideKeyframes = keyframes`
  from { background-position: -281px 0; }
  to { background-position: 0 0; }
`;

export const SoloButtonCSS = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0 20px;
  font-size: 16px;
  background: ${colors.seaBlue};
  color: white;
  border: none;
  outline: none;
  border-radius: 8px;
  height: 30px;
  line-height: 30px;
  min-width: 90px;
  height: auto;
  cursor: pointer;

  transition: min-width 0.3s;

  &:hover,
  &:focus {
    color: white;
    background: ${colors.lakeBlue};
  }

  &:active {
    background: ${colors.seaBlue};
  }

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
    cursor: default;
    background: ${colors.seaBlue};
    color: white;
  }

  > span {
    position: relative;
    z-index: 2;
  }
`;

export const SoloButtonStyledComponent = styled(Button)`
  ${SoloButtonCSS};
`;

export const SoloCancelButton = styled.button`
  ${SoloButtonCSS};
  background: ${colors.juneGrey};

  &:hover,
  &:focus {
    background: ${colors.mayGrey};
  }

  &:active {
    background: ${colors.juneGrey};
  }

  &:disabled {
    background: ${colors.juneGrey};
  }
`;

export const SoloNegativeButton = styled.button`
  ${SoloButtonCSS};
  background: ${colors.grapefruitOrange};

  &:hover,
  &:focus {
    background: ${colors.peachOrange};
  }

  &:active {
    background: ${colors.grapefruitOrange};
  }

  &:disabled {
    background: ${colors.grapefruitOrange};
  }
`;

export const InverseButtonCSS = css`
  ${SoloButtonCSS};
  background: white;
  color: ${colors.seaBlue};

  &:hover,
  &:focus {
    color: ${colors.lakeBlue};
    background: white;
  }

  &:active {
    background: ${colors.seaBlue};
    background: white;
  }
`;

export const SmallButtonCSS = css`
  padding: 7px 15px;
`;

export const IconButton = styled.button`
  display: inline-flex;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
    cursor: default;
  }
`;

export const ConfigurationButtonEmo = css`
  ${SoloButtonCSS};
  ${SmallButtonCSS};
  height: 43px;
  line-height: 29px;
  padding: 7px 20px;
  display: flex;
  margin-top: 15px;
  width: 280px;
  transition: all 0.3s;
`;
export const ConfigurationButtonDisabledEmo = css`
  ${ConfigurationButtonEmo};
  background: ${colors.januaryGrey};
  cursor: default;

  &:hover,
  &:focus,
  &:active {
    background: ${colors.januaryGrey};
    color: white;
  }
`;
