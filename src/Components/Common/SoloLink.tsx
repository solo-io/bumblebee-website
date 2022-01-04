import React from "react";
import styled from "@emotion/styled";
import { colors } from "Styles/colors";
import { Link } from "react-router-dom";

type SoloWrapperProps = {
  displayInline?: boolean;
};
const SoloLinkWrapper = styled.div<SoloWrapperProps>`
  display: ${(props: SoloWrapperProps) =>
    props.displayInline ? "inline" : "block"};

  a {
    text-decoration: none;
  }
`;

type SoloLinkLooksProps = {
  stylingOverrides?: string;
} & SoloWrapperProps;
export const SoloLinkLooks = styled.div<SoloLinkLooksProps>`
  display: ${(props: SoloWrapperProps) =>
    props.displayInline ? "inline" : "block"};
  color: ${colors.seaBlue};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${colors.lakeBlue};
  }

  ${(props: SoloLinkLooksProps) => props.stylingOverrides}
`;

export type SimpleLinkProps = {
  displayElement: React.ReactNode;
  link: string;
  inline?: boolean;
  stylingOverrides?: string;
};

export const SoloLink = (props: SimpleLinkProps) => {
  return (
    <SoloLinkWrapper displayInline={props.inline}>
      <Link to={props.link}>
        <SoloLinkLooks
          displayInline={props.inline}
          stylingOverrides={props.stylingOverrides}
        >
          {props.displayElement}
        </SoloLinkLooks>
      </Link>
    </SoloLinkWrapper>
  );
};

// For tables' readability
export const RenderSimpleLink = (props?: SimpleLinkProps) => {
  if (!props) return null;

  return <SoloLink {...props} />;
};

export type ExternalLinkProps = {
  key?: string;
  href: string;
  displayElement: React.ReactNode;
  newTab?: boolean;
  inline?: boolean;
  stylingOverrides?: string;
};
export const ExternalSoloLink = (props: ExternalLinkProps) => {
  return (
    <SoloLinkWrapper displayInline={props.inline} key={props.key}>
      <a
        href={props.href}
        target={props.newTab ? "_blank" : ""}
        rel={props.newTab ? "noopener noreferrer" : ""}
      >
        <SoloLinkLooks
          displayInline={props.inline}
          stylingOverrides={props.stylingOverrides}
        >
          {props.displayElement}
        </SoloLinkLooks>
      </a>
    </SoloLinkWrapper>
  );
};
