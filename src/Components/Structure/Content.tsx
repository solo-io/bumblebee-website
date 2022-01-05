import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors, soloConstants } from "Styles";
import { SoloButtonStyledComponent } from "Styles/CommonEmotions/button";
import { ReactComponent as HeroHexesBackground } from "assets/Hero-Graphic.svg";
import { ReactComponent as LinuxLogo } from "assets/Linux-logo.svg";
import { ReactComponent as EBPFLogo } from "assets/ebpf_white.svg";
import { ReactComponent as VideoPlayArrow } from "assets/video-play-icon.svg";
import { ReactComponent as BumblebeeLogo } from "assets/Solo_Bumblebee_Logo.svg";
import { ReactComponent as BuildIllustration } from "assets/build-illustration.svg";
import { ReactComponent as PublishIllustration } from "assets/publish-illustration.svg";
import { ReactComponent as RunIllustration } from "assets/run-illustration.svg";
import daBee from "assets/daBee.png";
import VideoTileCTA from "assets/Video-Tile.png";
import { ReactComponent as BeePathBuildToPub } from "assets/bee-path1.svg";
import { ReactComponent as BeePathPubToRun } from "assets/bee-path2.svg";
import { Footer } from "Components/Structure/Footer";
import { ExternalSoloLink } from "Components/Common/SoloLink";
import { hslToHSLA } from "Styles/colors";

const ContentBody = styled.div`
  margin: 0 auto;
  width: 100vw;
  max-width: 1150px;
  overflow: hidden;
`;

const Heading = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 28px;
  line-height: 34px;
  margin-top: 48px;
  margin-bottom: 30px;
  width: 100%;
  z-index: 2;

  svg {
    position: absolute;
    top: 10px;
    left: 0;
    width: 160px;
    height: 50px;
    margin-right: 8px;
  }

  ${soloConstants.mediaQuery} {
    padding: 0 20px;

    svg {
      left: 20px;
    }
  }
  ${soloConstants.smallMediaQuery} {
  }
`;

const HeroHexesBkgdHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 560px;
  min-height: 560px;
  max-height: 560px;
  overflow: hidden;
  background: ${colors.waterPlanetBlue};

  svg {
    position: absolute;
    top: 30px;
    right: -275px;
  }
`;

const Banner = styled.div`
  position: relative;
  height: 446px;
  width: 1150px;
  max-width: 100vw;
  margin: 0 auto;
  z-index: 5;
`;

const BannerContent = styled.div`
  position: absolute;
  left: 0;
  top: 110px;
  color: white;
  width: 42vw;
  max-width: 480px;

  div {
    position: relative;
    z-index: 2;
  }

  ${soloConstants.mediaQuery} {
    left: 20px;
    width: 60vw;

    :before {
      content: "";
      position: absolute;
      top: -20px;
      bottom: -30px;
      left: -20px;
      width: 100vw;
      background: rgba(0, 0, 0, 0.3);

      z-index: 1;
    }
  }
  ${soloConstants.smallMediaQuery} {
    width: auto;
    right: 20px;
  }
`;

const BannerSVGs = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  > svg {
    margin-right: 35px;
  }
`;

const BannerTitle = styled.div`
  font-size: 32px;
  line-height: 39px;
  font-weight: 500;
  margin-bottom: 8px;
`;
const BannerDescription = styled.div`
  font-size: 22px;
  line-height: 28px;
`;

const Bottom = styled.div`
  position: relative;
  padding: 90px 0 80px;

  ${soloConstants.smallMediaQuery} {
    padding-bottom: 30px;
  }
`;
const CloudBgkdHolder = styled.div`
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
`;

const BottomRow = styled.div`
  position: relative;
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  background: ${colors.januaryGrey};

  display: grid;
  grid-template-columns: 560px 560px;
  grid-gap: 30px;
  align-items: center;
  min-height: 370px;

  svg,
  img {
    z-index: 10;
  }

  .daBee,
  .beePath1,
  .beePath2 {
    position: absolute;
  }

  .daBee {
    top: 375px;
    left: 405px;
  }

  .beePath1 {
    top: 327px;
    left: 265px;
  }

  .beePath2 {
    top: 113px;
    right: 285px;
  }

  ${soloConstants.mediaQuery} {
    padding: 0 20px;
    grid-template-columns: calc(50% - 25px) calc(50% - 25px);

    .daBee,
    .beePath1,
    .beePath2 {
      display: none;
    }
  }

  ${soloConstants.smallMediaQuery} {
    display: block;
    height: 400px;

    svg {
      width: 100%;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${hslToHSLA(colors.januaryGrey, 0.85)};

      z-index: 1;
    }
  }
`;
const BottomRowWording = styled.div`
  position: relative;
  font-size: 22px;
  line-height: 28px;
  max-width: 475px;
  font-weight: 300;

  > div,
  > span {
    position: relative;
    z-index: 2;
  }

  ${soloConstants.mediaQuery} {
    &:before {
      content: "";
      position: absolute;
      top: -40px;
      bottom: -40px;
      left: -20px;
      right: -20px;
      background: ${hslToHSLA(colors.januaryGrey, 0.8)};
      z-index: 1;
    }
  }

  ${soloConstants.smallMediaQuery} {
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    max-width: none;
    padding: 40px 40px;
    text-align: center;

    &.furtherUpOnMobile {
      top: -35px;
    }

    &:before {
      display: none;
    }
  }
`;
const BottomRowTitle = styled.div`
  font-size: 32px;
  line-height: 39px;
  font-weight: 500;
  margin-bottom: 16px;

  ${soloConstants.smallMediaQuery} {
    margin-bottom: 40px;
  }
`;
const BottomRowImageHolder = styled.div`
  &.leftPaddedImage {
    padding-left: 80px;
  }

  ${soloConstants.mediaQuery} {
    &.leftPaddedImage {
      padding-left: 0px;
    }

    svg {
      max-width: ;
    }
  }
`;

const VideoRowArea = styled.div`
  background: white;
  padding-bottom: 80px;
  padding-top: 80px;

  ${soloConstants.smallMediaQuery} {
    padding-bottom: 0;
  }
`;
const VideoRow = styled(BottomRow)`
  background: white;
  grid-template-columns: 50% 50%;
  grid-gap: 0;

  ${soloConstants.mediaQuery} {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }

  ${soloConstants.smallMediaQuery} {
    &:before {
      display: none;
    }
  }
`;
const VideoRowWording = styled(BottomRowWording)`
  ${soloConstants.mediaQuery} {
    position: relative;
    max-width: 75%;
    margin-top: 40px;
    text-align: center;

    &:before {
      display: none;
    }
  }

  ${soloConstants.smallMediaQuery} {
    max-width: 90%;
  }
`;
const VideoRowImageHolder = styled(BottomRowImageHolder)`
  position: relative;

  img {
    width: 575px;
  }

  ${soloConstants.mediaQuery} {
    width: 75%;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }
`;

const videoPromptHoverBackground = keyframes`
  from {
    background: rgba(0, 0, 0, 0.3);
  }

  5%, 10% {
    background: rgba(180,180,180,.2);
  }

  100% {
    background: rgba(50,70,100, .3);
  }
`;
const VideoRowImageArrowCover = styled.div`
  position: absolute;
  top: 0;
  bottom: 5px;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 90px;
    transition: width 0.18s;
  }

  &:hover {
    animation: ${videoPromptHoverBackground} 0.35s linear 0s 1 normal forwards;

    svg {
      width: 120px;
      transition: width ease-out 0.45s;
    }
  }
`;

const VideoModalWindow = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoIFrameHolder = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045;

  ${soloConstants.smallMediaQuery} {
    max-width: 100%;

    iframe {
      width: 100vw;
    }
  }
`;

const VideoModalCloser = styled.div`
  position: absolute;
  top: -30px;
  right: -6px;
  font-size: 22px;
  text-align: right;
  padding-right: 6px;
  width: 100%;
  color: ${colors.marchGrey};
  cursor: pointer;
  text-align: right;

  ${soloConstants.smallMediaQuery} {
    width: 100%;
    right: 0;
  }
`;

export const Content = () => {
  const [videoShowing, setVideoShowing] = useState(false);

  const openVideo = () => {
    document.body.classList.add("lockedScrolling");
    setVideoShowing(true);
  };
  const closeVideo = () => {
    setVideoShowing(false);
    document.body.classList.remove("lockedScrolling");
  };

  return (
    <>
      <HeroHexesBkgdHolder>
        <HeroHexesBackground />
      </HeroHexesBkgdHolder>
      <ContentBody>
        <Heading>
          <BumblebeeLogo />
          <ExternalSoloLink
            href={"https://github.com/solo-io/bumblebee"}
            displayElement={
              <SoloButtonStyledComponent>
                View on Github
              </SoloButtonStyledComponent>
            }
            newTab={true}
          />
        </Heading>
        <Banner>
          <BannerContent>
            <BannerDescription>
              BumbleBee simplifies building eBPF tools and allows you to
              package, distribute, and run them anywhere. Just focus on the eBPF
              portion of your code and BumbleBee automates away the boilerplate,
              including the userspace code.
              <BannerSVGs>
                <EBPFLogo />
                <LinuxLogo />
              </BannerSVGs>
            </BannerDescription>
          </BannerContent>
        </Banner>
        <Bottom>
          <BottomRow className="imageLeftSide">
            <BottomRowImageHolder>
              <BuildIllustration />
            </BottomRowImageHolder>
            <BottomRowWording>
              <BottomRowTitle>Build</BottomRowTitle>
              <div>
                Getting the eBPF tool chain “just right” is hard. BumbleBee
                automates the build process and lets you focus on the code.
                BumbleBee packages your eBPF code as an OCI image so you can
                distribute it across your infrastructure.
              </div>
            </BottomRowWording>

            <BeePathBuildToPub className={"beePath1"} />
            <img src={daBee} className="daBee" />
          </BottomRow>
          <BottomRow className="imageRightSide">
            <BottomRowWording className="furtherUpOnMobile">
              <BottomRowTitle>Publish</BottomRowTitle>
              <div>
                Leveraging BTF and OCI packaging, the eBPF code you write with
                BumbleBee is portable and can plug into existing publishing
                workflows. Push and pull your eBPF code to any OCI compliant
                registry to publish to other users.
              </div>
            </BottomRowWording>
            <BottomRowImageHolder className="leftPaddedImage">
              <PublishIllustration />
            </BottomRowImageHolder>

            <BeePathPubToRun className={"beePath2"} />
          </BottomRow>
          <BottomRow className="imageLeftSide">
            <BottomRowImageHolder className="leftPaddedImage">
              <RunIllustration />
            </BottomRowImageHolder>
            <BottomRowWording className="furtherUpOnMobile">
              <BottomRowTitle>Run</BottomRowTitle>
              <div>
                With BumbleBee, you focus on your eBPF code and run it anywhere.
                BumbleBee also builds the userspace code and can expose the eBPF
                maps as logs, metrics, and histograms. BumbleBee leverages BTF
                introspection to know what types to display.
              </div>
            </BottomRowWording>
          </BottomRow>
        </Bottom>
      </ContentBody>
      <VideoRowArea>
        <VideoRow>
          <VideoRowWording>
            <BottomRowTitle>Get Started</BottomRowTitle>Getting started with
            BumbleBee is easy. Take a look at this Quick Start video to simplify
            your eBPF programming experience.
          </VideoRowWording>
          <VideoRowImageHolder>
            <img alt="" src={VideoTileCTA} />

            <VideoRowImageArrowCover onClick={openVideo}>
              <VideoPlayArrow />
            </VideoRowImageArrowCover>
          </VideoRowImageHolder>
        </VideoRow>
      </VideoRowArea>
      <Footer />

      {videoShowing && (
        <VideoModalWindow>
          <VideoIFrameHolder>
            <VideoModalCloser>
              <span title="Close (Esc)" onClick={closeVideo}>
                x
              </span>
            </VideoModalCloser>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4js-blTUV1Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoIFrameHolder>
        </VideoModalWindow>
      )}
    </>
  );
};
