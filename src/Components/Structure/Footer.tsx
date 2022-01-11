import styled from "@emotion/styled";
import { ReactComponent as SoloIconComp } from "assets/solo-logo-greyscale.svg";
import { ReactComponent as GithubIcon } from "assets/social/github-icon-greyscale.svg";
import { ReactComponent as LinkedinIcon } from "assets/social/linkedin-icon-greyscale.svg";
import { ReactComponent as SlackIcon } from "assets/social/slack-icon-greyscale.svg";
import { ReactComponent as TwitterIcon } from "assets/social/twitter-icon-greyscale.svg";
import { ReactComponent as YoutubeIcon } from "assets/social/youtube-icon-greyscale.svg";
import { ReactComponent as UpArrowIcon } from "assets/Arrow.svg";
import { colors, soloConstants } from "Styles";
//import { HubspotNewsletter } from "./HubspotNewsletter";

export type PossibleLanguages = "EN" | "ZH";

export const footerHeight = 240;
const FooterContainer = styled.div`
  margin: 0 auto;
  background: ${colors.januaryGrey};
  height: ${footerHeight}px;

  ${soloConstants.smallMediaQuery} {
    height: 285px;
  }
  ${soloConstants.tinyMediaQuery} {
    height: 330px;
  }
`;

const Links = styled.div`
  background: ${colors.februaryGrey};
  height: 80px;

  ${soloConstants.tinyMediaQuery} {
    height: 125px;
  }
`;
const LinksContent = styled.div`
  width: ${soloConstants.contentWidth};
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;

  ${soloConstants.mediaQuery} {
    padding: 0 25px;
    margin: 0;
    justify-content: center;
  }
  ${soloConstants.tinyMediaQuery} {
    flex-direction: column;
    justify-content: center;
  }
`;

const SocialIconsList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    margin-left: 90px;
  }

  ${soloConstants.smallMediaQuery} {
    margin-left: 40px;
    svg {
      margin-left: 25px;
    }
  }
  ${soloConstants.tinyMediaQuery} {
    display: grid;
    grid-template-columns: 30px 30px 30px 30px 30px;
    justify-content: space-between;
    margin-left: 0;
    padding: 0 20px;

    svg {
      margin-left: 0;
    }
  }
`;

const Bottom = styled.div`
  width: ${soloConstants.contentWidth};
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${soloConstants.mediaQuery} {
    padding: 0 25px;
    margin: 0;
  }
  ${soloConstants.smallMediaQuery} {
    flex-direction: column-reverse;
  }
`;

const Copyright = styled.div`
  color: ${colors.juneGrey};
  font-size: 16px;
  font-weight: 200;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${soloConstants.smallMediaQuery} {
    align-items: center;
    height: 80px;
  }
`;

const CopyrightLink = styled.a`
  display: inline-block;
  color: ${colors.juneGrey};
  margin-right: 10px;
  margin-top: 15px;
  font-weight: 500;
`;

const CopyrightText = styled.a`
  color: ${colors.juneGrey};
  margin-right: 10px;
  margin-top: 15px;
`;

const IconContainer = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
`;
const SoloIconContainer = styled(IconContainer)`
  ${soloConstants.tinyMediaQuery} {
    height: auto;
    justify-content: center;
    margin-bottom: 25px;
  }
`;

const SoloIcon = styled(SoloIconComp)`
  height: 45px;
`;

const UpArrowHolder = styled.div`
  svg {
    cursor: pointer;
  }

  ${soloConstants.smallMediaQuery} {
    margin-top: 20px;
  }
`;

const LanguageToggle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  > div {
    margin-right: 20px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    &.beingUsed {
      color: ${colors.seaBlue};
      border-bottom-color: ${colors.seaBlue};
      cursor: default;
    }
  }
`;

export const Footer = ({
  languageUsed,
  switchLanguageUsed,
}: {
  languageUsed: PossibleLanguages;
  switchLanguageUsed: (languageName: PossibleLanguages) => any;
}) => {
  const returnToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const useEnglish = () => {
    switchLanguageUsed("EN");
  };
  const useZh = () => {
    switchLanguageUsed("ZH");
  };

  return (
    <FooterContainer>
      <Links>
        <LinksContent>
          <SoloIconContainer href="https://www.solo.io" target="_blank">
            <SoloIcon />
          </SoloIconContainer>
          <SocialIconsList>
            <IconContainer
              href="https://twitter.com/soloio_inc"
              target="_blank"
            >
              <TwitterIcon />
            </IconContainer>
            <IconContainer
              href="https://www.linkedin.com/company/solo.io/"
              target="_blank"
            >
              <LinkedinIcon />
            </IconContainer>
            <IconContainer
              href="https://www.youtube.com/soloio_inc"
              target="_blank"
            >
              <YoutubeIcon />
            </IconContainer>
            <IconContainer
              href="https://slack.solo.io/#bumblebee"
              target="_blank"
            >
              <SlackIcon />
            </IconContainer>
            <IconContainer href="https://github.com/solo-io" target="_blank">
              <GithubIcon />
            </IconContainer>
          </SocialIconsList>
        </LinksContent>
      </Links>
      <Bottom>
        <Copyright>
          <LanguageToggle>
            <div
              className={languageUsed === "EN" ? "beingUsed" : ""}
              onClick={useEnglish}
            >
              English
            </div>{" "}
            <div
              className={languageUsed === "ZH" ? "beingUsed" : ""}
              onClick={useZh}
            >
              中文
            </div>
          </LanguageToggle>
          © {new Date().getFullYear()} solo.io, Inc. All Rights Reserved.
          <div>
            <CopyrightLink
              href="https://www.solo.io/privacy-policy/"
              target="_blank"
            >
              privacy policy
            </CopyrightLink>
            <CopyrightText>|</CopyrightText>
            <CopyrightLink
              href="https://www.solo.io/terms-of-service/"
              target="_blank"
            >
              terms of use
            </CopyrightLink>
          </div>
        </Copyright>
        <UpArrowHolder>
          <UpArrowIcon onClick={returnToTop} />
        </UpArrowHolder>
      </Bottom>
    </FooterContainer>
  );
};
