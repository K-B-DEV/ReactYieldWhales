import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//animation

const Footer = () => {
  return (
    <>
      <StyledFooterContainer>
        <StyledFooterContent>
          <h3>
            © Yield Whales 2022 -{" "}
            <a
              target="_blank"
              href="https://yieldwhales.com/YieldWhales-RiskDisclosureAgreement.pdf"
            >
              Risk Disclosure Agreement
            </a>
          </h3>
        </StyledFooterContent>
      </StyledFooterContainer>
    </>
  );
};

const StyledFooterContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 10vh;
  z-index: 1001;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  /* color: #03a9f4; */
  background-color: #00000f;
  color: #fff;
`;

const StyledFooterContent = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
`;

export default Footer;
