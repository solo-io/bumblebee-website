import { colors } from "../colors";
import styled from "@emotion/styled";

export const ErrorTextEmo = styled.div`
  position: relative;
  font-size: 24px;
  color: ${colors.juneGrey};
  background: white;
  padding: 45px 15px 30px;

  :before {
    content: "Sorry!";
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    padding: 3px 15px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    background: ${colors.oceanBlue};
  }
`;

export const ErrorTextFocusEmo = styled.div`
  color: ${colors.pumpkinOrange};
`;

const ErrorMessageCSS = styled.div`
  background-color: ${colors.tangerineOrange};
  border: 1px solid ${colors.grapefruitOrange};
  color: ${colors.pumpkinOrange};
  border-radius: 8px;
  padding: 10px 24px 13px;
  font-size: 16px;
  line-height: 16px;
  text-align: left;
  opacity: 1;

  span {
    font-weight: bold;
  }
`;
type ErrorMessageProps = { loading?: boolean };
export const ErrorMessage = styled(ErrorMessageCSS)`
  ${(props: ErrorMessageProps) => (props.loading ? `opacity: .4;` : "")}
`;

export const SmallErrorMessage = styled(ErrorMessageCSS)`
  padding: 7px 15px;

  ${(props: ErrorMessageProps) => (props.loading ? `opacity: .4;` : "")}
`;
