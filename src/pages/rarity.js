import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

import Bubbles from "../components/Bubbles";

import { useInView } from "react-intersection-observer";

import img from "../img/3864.jpg";
import bg1 from "../img/bg 1.png";
import bg2 from "../img/bg 2.png";
import bg3 from "../img/bg 3.png";
//img
//animation

const Rarity = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  const animation7 = useAnimation();
  const animation8 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          delay: 1,
          duration: 1,
        },
      });
      animation2.start({
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 1,
        },
      });
      animation3.start({
        opacity: 1,
        transition: {
          delay: 1.8,
          duration: 1,
        },
      });
      animation4.start({
        width: "40%",
        transition: {
          delay: 2.2,
          duration: 1,
        },
      });
      animation5.start({
        width: "30%",
        transition: {
          delay: 2.6,
          duration: 1,
        },
      });
      animation6.start({
        width: "15%",
        transition: {
          delay: 3,
          duration: 1,
        },
      });
      animation7.start({
        width: "10%",
        transition: {
          delay: 3.4,
          duration: 1,
        },
      });
      animation8.start({
        width: "5%",
        transition: {
          delay: 3.8,
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
      animation2.start({ opacity: 0 });
      animation3.start({ opacity: 0 });
      animation4.start({ width: "0%" });
      animation5.start({ width: "0%" });
      animation6.start({ width: "0%" });
      animation7.start({ width: "0%" });
      animation8.start({ width: "0%" });
    }
  }, [inView]);
  return (
    <>
      <AnimatePresence>
        <StyledLandingContainer id="rarity" ref={ref}>
          <Bubbles />
          <StyledContainer>
            <Styledheader>
              <motion.h1 animate={animation}>NFT Tiers</motion.h1>
              <br />
              <motion.p animate={animation2}>
                Each Yield Whale NFT will earn the same % yield. However, the
                higher investment tiers allow users to quickly exit their
                positions through the sale of fewer NFTs.
              </motion.p>
            </Styledheader>
            <StyledRarityGrid>
              <StyledRarityTable animate={animation3}>
                <StyledProgressContainer>
                  <StyledProgressTitle>
                    <h4>$10 Tier</h4>
                  </StyledProgressTitle>
                  <StyledProgressBarContainer>
                    <img src={bg3} alt="whale" />
                  </StyledProgressBarContainer>
                </StyledProgressContainer>
                <StyledProgressContainer>
                  <StyledProgressTitle>
                    <h4>$100 Tier</h4>
                  </StyledProgressTitle>
                  <StyledProgressBarContainer>
                    <img src={bg2} alt="whale" />
                  </StyledProgressBarContainer>
                </StyledProgressContainer>
                <StyledProgressContainer>
                  <StyledProgressTitle>
                    <h4>$1000 Tier</h4>
                  </StyledProgressTitle>
                  <StyledProgressBarContainer>
                    <img src={bg1} alt="whale" />
                  </StyledProgressBarContainer>
                </StyledProgressContainer>
                {/* <StyledProgressContainer>
                  <StyledProgressTitle>
                    <h4>Legendary</h4>
                  </StyledProgressTitle>
                  <StyledProgressBarContainer4>
                    <StyledProgressDiv4
                      animate={animation7}
                    ></StyledProgressDiv4>
                    
                  </StyledProgressBarContainer4>
                </StyledProgressContainer>
                <StyledProgressContainer>
                  <StyledProgressTitle>
                    <h4>Moon</h4>
                  </StyledProgressTitle>
                  <StyledProgressBarContainer5>
                    <StyledProgressDiv5
                      animate={animation8}
                    ></StyledProgressDiv5>
                   
                  </StyledProgressBarContainer5>
                </StyledProgressContainer> */}
              </StyledRarityTable>
            </StyledRarityGrid>
          </StyledContainer>
        </StyledLandingContainer>
      </AnimatePresence>
    </>
  );
};

const StyledLandingContainer = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  width: 100vw;
  height: auto;
  max-height: 100vh;
  /* background-color: #0d0d0d; */
  background-image: linear-gradient(#00034d, #00000f);
  color: white;
  z-index: 1;

  @media screen and (max-width: 350px) {
    // 568px - 768px
    grid-template-rows: 1fr 5fr 1fr;
    grid-template-columns: 0.1fr 2fr 0.1fr;
    height: 150vh;
    max-height: 150vh;
  }
  @media only screen and (min-width: 350px) and (max-width: 420px) {
    // 568px - 768px
    grid-template-rows: 1fr 5fr 1fr;
    grid-template-columns: 0.5fr 2fr 0.5fr;
    height: 120vh;
    max-height: 120vh;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 421px) and (max-width: 649px) {
    grid-template-rows: 1fr 5fr 1fr;
    grid-template-columns: 0.5fr 2fr 0.5fr;
    height: 125vh;
    max-height: 130vh;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 649px) and (max-width: 650px) {
    grid-template-rows: 1fr 5fr 1fr;
    grid-template-columns: 0.5fr 2fr 0.5fr;
    height: 110vh;
    max-height: 115vh;

    height: 100vh;
    max-height: 100vh;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 650px) and (max-width: 768px) {
    grid-template-rows: 1fr 5fr 1fr;
    grid-template-columns: 0.5fr 2fr 0.5fr;

    height: 100vh;
    max-height: 100vh;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-rows: 1fr 5fr 1fr;
    grid-template-columns: 0.5fr 2fr 0.5fr;

    height: 100vh;
    max-height: 100vh;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-template-rows: 1fr 5fr 1fr;
    grid-template-columns: 0.5fr 2fr 0.5fr;

    height: 100vh;
    max-height: 100vh;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-rows: 1fr 5fr 1fr;
    grid-template-columns: 0.5fr 2fr 0.5fr;

    height: 100vh;
    max-height: 100vh;
  }
`;

const StyledContainer = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/3;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr;
  row-gap: 2em;
  @media only screen and (max-width: 850px) {
    grid-template-rows: auto;
  }
`;

const Styledheader = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  h1 {
    font-size: 8em;
    text-shadow: 1px 1px black;
  }
  @media screen and (max-width: 350px) {
    // 568px - 768px
    h1 {
      font-size: 2.5em;
    }
    p {
      font-size: 12px;
    }
  }
  @media screen and (min-width: 350) and (max-width: 420px) {
    // 568px - 768px
    h1 {
      font-size: 2.5em;
    }
  }
  @media screen and (max-width: 420px) {
    // 568px - 768px
    h1 {
      font-size: 2.5em;
    }
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 421px) and (max-width: 649px) {
    h1 {
      font-size: 3em;
      text-shadow: 1px 1px black;
    }
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 649px) and (max-width: 650px) {
    h1 {
      font-size: 3.5em;
      text-shadow: 1px 1px black;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 650px) {
    h1 {
      font-size: 4em;
      text-shadow: 1px 1px black;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 5em;
      text-shadow: 1px 1px black;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    h1 {
      font-size: 8em;
      text-shadow: 1px 1px black;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    h1 {
      font-size: 8em;
      text-shadow: 1px 1px black;
    }
  }
`;

const StyledRarityGrid = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  /* border: 1px solid white;
  border-radius: 16px; */
`;

const StyledRarityTable = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/3;
  align-self: center;
  border: 1px solid white;
  border-radius: 16px;
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 850px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: 1000px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledProgressContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: center;

  display: grid;
  grid-template-rows: 0.1fr 1fr;
  grid-template-columns: 1fr;
  padding: 1em;
  @media only screen and (min-width: 1000px) {
    grid-template-rows: 0.3fr 1fr;
    grid-template-columns: 1fr;
  }
`;
const StyledProgressTitle = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
  text-align: start;
  @media only screen and (min-width: 1000px) {
    align-self: end;
    justify-self: center;
    text-align: start;
  }
`;

const StyledProgressBarContainer = styled(motion.div)`
  overflow: hidden;
  align-self: center;
  justify-self: center;
  img {
    max-height: 15vh;
    object-fit: contain;
  }
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media only screen and (min-width: 1000px) {
    padding-top: 1em;
    align-self: start;
    justify-self: center;
    img {
      max-height: 25vh;
      object-fit: contain;
    }
  }
`;

// const StyledProgressSpan1 = styled(motion.span)`
//   position: absolute;
//   top: 0;
//   right: 5px;
// `;
// const StyledCommon = styled(motion.div)`
//   /* position: absolute; */
//   width: 100%;
//   height: 50%;
//   background-color: #81e6fc;
//   z-index: 1;
// `;
// const StyledCommonPerc = styled(motion.div)`
//   /* position: absolute; */
//   width: 45%;
//   height: 50%;
//   /* background-color: #1bb1d1; */
//   background-color: black;
//   z-index: 2;
// `;

export default Rarity;
