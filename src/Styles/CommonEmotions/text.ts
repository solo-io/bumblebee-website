import { colors } from 'Styles/colors';
import styled from '@emotion/styled';

type LinkProps = {
  asSpan?: boolean;
  inheritedFont?: boolean;
};
export const Link = styled.div`
  ${(props: LinkProps) =>
    props.asSpan
      ? `display: inline;
      cursor: pointer;
  color: ${colors.seaBlue};
  ${props.inheritedFont ? '' : 'font-size: 14px;'}`
      : `display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  color: ${colors.seaBlue};
    ${
      props.inheritedFont
        ? ''
        : `
      font-size: 14px;
      font-weight: 500;
    `
    }
  
  `}

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;


export const ItalicText = styled.div`
  display: flex;

  font-style: italic;
  font-weight: 300;
  margin-right: 4px;

  > div {
    overflow: visible;
    font-size: 22px !important;
    line-height: 30px !important;
    margin-right: 5px;
    width: 10px;
  }
`;
