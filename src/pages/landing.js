import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
//img
import imgwave1 from "../img/wave.png";
import imgwave2 from "../img/wave2.png";
import imgwave3 from "../img/wave3.png";

import Button from "@mui/material/Button";

//animation

const Landing = () => {
  var wave1 = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100px",
    backgroundImage: "url(" + imgwave3 + ")",
    backgroundSize: "1000px 100px",
    animation: "wave1 30s linear infinite",
    zindex: "1000",
    opacity: "1",
    animationDelay: "0s",
    bottom: "0",
  };

  var wave2 = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100px",
    backgroundImage: "url(" + imgwave3 + ")",
    backgroundSize: "1000px 100px",
    animation: "wave2 15s linear infinite",
    zindex: "999",
    opacity: ".5",
    animationDelay: "-5s",
    bottom: "10px",
  };

  var wave3 = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100px",
    backgroundImage: "url(" + imgwave3 + ")",
    backgroundSize: "1000px 100px",
    animation: "wave1 30s linear infinite",
    zindex: "998",
    opacity: ".2",
    animationDelay: "-2s",
    bottom: "15px",
  };

  var wave4 = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100px",
    backgroundImage: "url(" + imgwave3 + ")",
    backgroundSize: "1000px 100px",
    animation: "wave2 5s linear infinite",
    zindex: "997",
    opacity: ".7",
    animationDelay: "-5s",
    bottom: "20px",
  };

  return (
    <>
      {/* <StyledLandingContainer>
        <StyledTitle>Node Whales</StyledTitle>
        <StyledMintButton>
          <button>Go to Mint Page</button>
        </StyledMintButton>
        <StyledMintInfo>
          <p>
            2000 unique whale NFTs. Each NFT gives you a chance to win in weekly
            giveaway. This collection is on the AVAX network.
          </p>
          <br />
          <p>
            <b>RND - STRONG - THOR</b>
          </p>
        </StyledMintInfo>
      </StyledLandingContainer> */}

      <StyledWaveSection id="home">
        <AnimatePresence>
          <StyledMintButtonContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <StyledMintButton>
              <a
                href="https://mint.yieldwhales.com/"
                target="_blank"
                class="rainbow-button"
                alt="Mint"
              ></a>
            </StyledMintButton>
            <StyledWPButton>
              <a
                href="https://medium.com/@nodewhales500/node-whales-passive-income-a5aff3795d8c"
                target="#_"
                class="rainbow-button2"
                alt="Whitepaper"
              ></a>
            </StyledWPButton>
          </StyledMintButtonContainer>
          {/* <StyledMintButtonContainer>
            <StyledMintButton>
              <StyledButtonContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <a href="http://mint.nodewhales.com">
                  <Button variant="outlined">Mint</Button>
                </a>
              </StyledButtonContainer>
            </StyledMintButton>
          </StyledMintButtonContainer> */}
          <StyledTitleContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            // initial={{ x: "-100vw" }}
            // animate={{ x: 0 }}
            // transition={{ type: "spring", duration: 1, bounce: 0.3 }}
          >
            <h2>Yield Whales</h2>
            <h2>Yield Whales</h2>
          </StyledTitleContent>
        </AnimatePresence>
        {/* <StyledDescription1>
          <p>Mint price: 3 AVAX</p>
        </StyledDescription1>
        <StyledDescription2>
          <p>Mint date: TBA</p>
        </StyledDescription2> */}
        {/* <StyledButtonContainer>
          <Button variant="outlined">Mint</Button>
        </StyledButtonContainer> */}
        <div style={wave1} id="wave1"></div>
        <div style={wave2} id="wave2"></div>
        <div style={wave3} id="wave2"></div>
        <div style={wave4} id="wave2"></div>
        {/* <div style={divStyled} class="wave3"></div>
        <div style={divStyled} class="wave4"></div> */}
      </StyledWaveSection>
    </>
  );
};
const StyledMintBtn = styled(motion.div)`
  width: 200px;
  height: 100px;
  /* border: 1px solid white; */
  border-radius: 16px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0 0.3);
  background: conic-gradient(
    #fd004c,
    #fe9000,
    #fff020,
    #3edf4b,
    #3363ff,
    #b102b7,
    #fd004c
  );
  animation: spin 1.5s infinite linear;
`;
const StlyedMintBtnOverlay = styled(motion.div)`
  background-color: #121220;
  position: relative;
  width: 93%;
  height: 93%;
  left: 3.5%;
  top: 3.5%;
  border-radius: 16px;

  display: grid;
  align-items: center;
  justify-items: center;
  h2 {
    color: white;
  }
`;
const StyledWPBtn = styled(motion.div)`
  width: 200px;
  height: 100px;
  /* border: 1px solid white; */
  border-radius: 16px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0 0.3);
  background: conic-gradient(
    #fd004c,
    #fe9000,
    #fff020,
    #3edf4b,
    #3363ff,
    #b102b7,
    #fd004c
  );
  animation: spin 1.5s infinite linear;
`;
const StyledMintButtonContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 5vw;
`;

const StyledMintButton = styled(motion.div)`
  grid-row: 4/5;
  grid-column: 2/3;
  align-self: center;
  justify-self: start;
`;
const StyledWPButton = styled(motion.div)`
  grid-row: 4/5;
  grid-column: 1/2;
  align-self: center;
  justify-self: end;
`;

const StyledTitleContent = styled(motion.div)`
  /* position: relative; */
  /* display: inline-block; */
  overflow: hidden;
  white-space: nowrap;
  h2 {
    position: absolute;
    color: #fff;
    transform: translate(-50%, -50%);
    font-size: 8em;
  }
  h2:nth-child(1) {
    color: transparent;
    /* -webkit-text-stroke: 2px #03a9f4; */
    -webkit-text-stroke: 2px #006994;
  }
  h2:nth-child(2) {
    /* color: #03a9f4; */
    color: #006994;
    animation: animate 4s ease-in-out infinite;
  }
  @media screen and (max-width: 349px) {
    h2 {
      font-size: 2.5em;
    }
  }
  @media screen and (min-width: 350px) and (max-width: 420px) {
    // 568px - 768px
    h2 {
      font-size: 3em;
    }
  }
  @media screen and (min-width: 40em) and (max-width: 79.99999em) {
    // 568px - 768px
    h2 {
      font-size: 6em;
    }
  }
  @media screen and (min-width: 26.3125em) and (max-width: 39.99999em) {
    //568px - 768px
    h2 {
      font-size: 4em;
    }
  }
`;

const StyledButtonContainer = styled(motion.div)`
  overflow: hidden;
  white-space: nowrap;
  button {
    position: absolute;
    /* left: 41%;
    top: 65%; */
    background-color: none;
    top: 65%;
    left: 44%;
    font-size: 1.5em;
    /* font-size: 3em;
    padding: 1em; */
  }
`;
const StyledWaveSection = styled(motion.section)`
  //::after
  display: flex;
  justify-content: center;
  align-items: center;
  //::after
  position: relative;
  width: 100%;
  height: 100vh;
  //day time sunsetish
  background: linear-gradient(to bottom, #1e528e 0%, #728a7c 50%, #e9ce5d 100%);
  //night time
  /* background: linear-gradient(to bottom, #020111 60%, #20202c 100%); */
  //purple
  /* background: linear-gradient(to bottom, #40405c 0%, #6f71aa 80%, #8a76ab 100%); */
  overflow: hidden;
`;
const StyledLandingContainer = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 0.15fr 0.15fr;
  grid-template-columns: 1fr;
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
`;
const StyledTitle = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
`;

const StyledMintInfo = styled(motion.div)`
  grid-template-rows: 3/4;
  grid-template-columns: 1/2;
  align-self: center;
  justify-self: center;
`;

export default Landing;
