import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import whale from "../img/3864.jpg";
//img
import twitter from "../img/twitter.svg";
import discord from "../img/discord.svg";
import medium from "../img/medium.svg";
//animation

const Bubbles = () => {
  return (
    <>
      <StyledBubble1></StyledBubble1>
      <StyledBubble2></StyledBubble2>
      <StyledBubble3></StyledBubble3>
      <StyledBubble4></StyledBubble4>
      <StyledBubble5></StyledBubble5>
      <StyledBubble6></StyledBubble6>
      <StyledBubble7></StyledBubble7>
      <StyledBubble8></StyledBubble8>
      <StyledBubble9></StyledBubble9>
      <StyledBubble10></StyledBubble10>
      <StyledBubble11></StyledBubble11>
      <StyledBubble12></StyledBubble12>
      <StyledBubble13></StyledBubble13>
    </>
  );
};

const StyledBubble1 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 10%;
  animation-delay: 0.5s;
  animation-duration: 16s;
  opacity: 0.2;
`;

const StyledBubble2 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 15px;
  height: 15px;
  left: 40%;
  animation-delay: 1s;
  animation-duration: 10s;
  opacity: 0.1;
`;

const StyledBubble3 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 10px;
  height: 10px;
  left: 30%;
  animation-delay: 5s;
  animation-duration: 20s;
  opacity: 0.3;
`;

const StyledBubble4 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 25px;
  height: 25px;
  left: 40%;
  animation-delay: 8s;
  animation-duration: 17s;
  opacity: 0.2;
`;

const StyledBubble5 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 30px;
  height: 30px;
  left: 60%;
  animation-delay: 10s;
  animation-duration: 15s;
  opacity: 0.1;
`;

const StyledBubble6 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 10px;
  height: 10px;
  left: 80%;
  animation-delay: 3s;
  animation-duration: 30s;
  opacity: 0.4;
`;

const StyledBubble7 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 15px;
  height: 15px;
  left: 90%;
  animation-delay: -7s;
  animation-duration: 25s;
  opacity: 0.3;
`;
const StyledBubble8 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 20px;
  height: 20px;
  left: 5%;
  bottom: 30px;
  animation-delay: -1s;
  animation-duration: 19s;
  opacity: 0.2;
`;

const StyledBubble9 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 20px;
  height: 20px;
  left: 50%;
  bottom: 30px;
  animation-delay: -5s;
  animation-duration: 19s;
  opacity: 0.2;
`;

const StyledBubble10 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 40px;
  height: 40px;
  left: 30%;
  bottom: 30px;
  animation-delay: -21s;
  animation-duration: 16s;
  opacity: 0.3;
`;

const StyledBubble11 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 30px;
  height: 30px;
  left: 60%;
  bottom: 30px;
  animation-delay: -13.75s;
  animation-duration: 20s;
  opacity: 0.3;
`;

const StyledBubble12 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 25px;
  height: 25px;
  left: 92%;
  bottom: 30px;
  animation-delay: -10.5s;
  animation-duration: 19s;
  opacity: 0.3;
`;

const StyledBubble13 = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;

  width: 21px;
  height: 21px;
  left: 1%;
  bottom: 30px;
  animation-delay: -10.5s;
  animation-duration: 19s;
  opacity: 0.3;
`;

export default Bubbles;
