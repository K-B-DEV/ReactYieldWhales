import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import whale from "../img/3864.jpg";
//img
import twitter from "../img/twitter.svg";
import discord from "../img/discord.svg";
import medium from "../img/medium.svg";
import wale from "../img/nwnobg.png";
import whale1 from "../img/nwnobg1.png";
import whale2 from "../img/nwnobg2.png";
import whale3 from "../img/nwnobg3.png";
import whale4 from "../img/ywlogo.png";
import whale5 from "../img/nwpfp.png";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNav from "../components/MobileNav";
//animation
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Nav = ({ accounts, setAccounts }) => {
  //detects when connected
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <AnimatePresence>
        {windowDimensions.width >= 1000 && (
          <StyledNavContainerActive key={"StyledNavContainer"}>
            <StyledFiller></StyledFiller>
            <StyledFiller2></StyledFiller2>
            <StyledFiller3></StyledFiller3>
            <StyledFiller4></StyledFiller4>
            {/* <AnimatePresence> */}
            <StyledNavLogo
              key={"StyledNavLogo"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, duration: 1, delay: 0 }}
              transition={{ duration: 1, delay: 0 }}
            >
              <a href="#home">
                <img src={whale4} alt="Node Whales" />
              </a>
            </StyledNavLogo>

            <StyledNavPages>
              <StyledAboutPage
                key={"StyledAboutPage"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 1, delay: 0 }}
                transition={{ duration: 1, delay: 0.25 }}
              >
                <a href="#about">
                  <h1>About</h1>
                </a>
              </StyledAboutPage>

              <StyledRarityPage
                key={"StyledRarityPage"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 1, delay: 0 }}
                transition={{ duration: 1, delay: 0.75 }}
              >
                <a href="#rarity">
                  <h1>Tiers</h1>
                </a>
              </StyledRarityPage>

              <StyledTokenomicsPage
                key={"StyledTokenomicsPage"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 1, delay: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <a href="#tokenomics">
                  <h1>Tokenomics</h1>
                </a>
              </StyledTokenomicsPage>
              <StyledMintPage
                key={"StyledMintPage"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 1, delay: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <a href="http://mint.yieldwhales.com" target="_blank">
                  <h1>Mint</h1>
                </a>
              </StyledMintPage>
              <StyledInvestmentsPage
                key={"StyledInvestmentsPage"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 1, delay: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <a href="http://dashboard.yieldwhales.com" target="_blank">
                  <h1>Dashboard</h1>
                </a>
              </StyledInvestmentsPage>
            </StyledNavPages>
            <StyledSocials>
              <StyledTwitter
                key={"StyledTwitter"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 1, delay: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <a href="https://twitter.com/NodeWhales" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z " />
                  </svg>
                </a>
              </StyledTwitter>

              <StyledDiscord
                key={"StyledDiscord"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 1, delay: 0 }}
                transition={{ duration: 1, delay: 1.25 }}
              >
                <a href="https://discord.com/invite/ewAVNRpX9w" target="_blank">
                  <svg
                    width="71"
                    height="55"
                    viewBox="0 0 71 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="71" height="55" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </StyledDiscord>

              <StyledMedium
                key={"StyledMedium"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 1, delay: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <a
                  href="https://medium.com/@nodewhales500/node-whales-passive-income-a5aff3795d8c"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" />
                  </svg>
                </a>
              </StyledMedium>
              <StyledTofu
                key={"StyledTofu"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 1, delay: 0 }}
                transition={{ duration: 1, delay: 1.75 }}
              >
                <a
                  href="https://tofunft.com/collection/yield-whales/items"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 39 36"
                    focusable="false"
                    class="chakra-icon css-359wqc"
                    width="25"
                    height="25"
                  >
                    <path d="M20.4385 0.609736C19.5951 0.283242 18.7108 0.119995 17.7857 0.119995C16.8607 0.119995 15.9696 0.283242 15.1126 0.609736C14.2691 0.922626 13.5141 1.38516 12.8475 1.99733C12.4743 2.34009 12.1437 2.72549 11.8558 3.15353V0.426083H0V3.79305H4.01995V14.0368H7.83585V3.79305H11.474C11.3972 3.93858 11.3245 4.08822 11.2559 4.24198C10.875 5.12623 10.6845 6.13292 10.6845 7.26205C10.6845 8.39117 10.875 9.39786 11.2559 10.2821C11.6504 11.1664 12.1809 11.9146 12.8475 12.5268C13.5141 13.1389 14.2691 13.6083 15.1126 13.9348C15.9696 14.2477 16.8607 14.4041 17.7857 14.4041C18.7108 14.4041 19.5951 14.2477 20.4385 13.9348C21.2956 13.6083 22.0574 13.1389 22.724 12.5268C23.3906 11.9146 23.9143 11.1664 24.2952 10.2821C24.6897 9.39786 24.887 8.39117 24.887 7.26205C24.887 6.13292 24.6897 5.12623 24.2952 4.24198C23.9143 3.35772 23.3906 2.60951 22.724 1.99733C22.0574 1.38516 21.2956 0.922626 20.4385 0.609736ZM16.1533 4.16036C16.6294 3.84747 17.1736 3.69102 17.7857 3.69102C18.3979 3.69102 18.9421 3.84747 19.4182 4.16036C19.908 4.47325 20.2889 4.90177 20.5609 5.44592C20.833 5.97648 20.9691 6.58185 20.9691 7.26205C20.9691 7.94224 20.833 8.55442 20.5609 9.09857C20.2889 9.62913 19.908 10.0508 19.4182 10.3637C18.9421 10.6766 18.3979 10.8331 17.7857 10.8331C17.1736 10.8331 16.6294 10.6766 16.1533 10.3637C15.6771 10.0508 15.2962 9.62913 15.0105 9.09857C14.7385 8.55442 14.6024 7.94224 14.6024 7.26205C14.6024 6.58185 14.7385 5.97648 15.0105 5.44592C15.2962 4.90177 15.6771 4.47325 16.1533 4.16036Z"></path>
                    <path d="M24.3564 23.0086V14.7034H20.5405V22.7433C20.5405 23.4507 20.3501 24.0289 19.9692 24.4778C19.5883 24.9131 18.9897 25.1376 18.1735 25.1512C17.3572 25.1648 16.7587 24.9471 16.3777 24.4982C15.9968 24.0357 15.8064 23.4507 15.8064 22.7433V14.7034H11.9905V23.0086C11.9905 24.1921 12.2694 25.2124 12.8271 26.0695C13.3849 26.9265 14.1331 27.5863 15.0718 28.0488C16.0104 28.4978 17.0443 28.7222 18.1735 28.7222C19.3162 28.7222 20.3501 28.4978 21.2752 28.0488C22.2138 27.5863 22.962 26.9265 23.5198 26.0695C24.0776 25.2124 24.3564 24.1921 24.3564 23.0086Z"></path>
                    <path d="M9.99887 23.8044V20.4374H5.14228V18.1112H11.0192V14.7442H1.32638V28.4161H5.14228V23.8044H9.99887Z"></path>
                    <path d="M33.2806 23.3949H29.9137V18.5383H25.3019V14.7224H38.9739V36.12H35.6069V32.1H25.3631V28.2841H35.6069V18.5383H33.2806V23.3949Z"></path>
                    <path d="M25.3003 12.9131H38.9739V9.46434H31.9338L38.9739 1.77149V0.424699H25.3003V3.95478H31.8114L25.3003 11.5663V12.9131Z"></path>
                  </svg>
                </a>
              </StyledTofu>
            </StyledSocials>
            {/* </AnimatePresence> */}
          </StyledNavContainerActive>
          // ) : (
          //   <>
          //
          //   </>
          // )}
        )}
      </AnimatePresence>
      {windowDimensions.width < 1000 && <MobileNav></MobileNav>}
    </>
  );
};

const StyledFiller = styled(motion.div)`
  order: 1.5;
  flex-grow: 1;
`;
const StyledFiller2 = styled(motion.div)`
  order: 3;
  flex-grow: 1;
`;
const StyledFiller3 = styled(motion.div)`
  order: 5;
  flex-grow: 1;
`;
const StyledFiller4 = styled(motion.div)`
  order: 7;
  flex-grow: 1.5;
`;
const StyledNavContainer = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 10vh;
  left: 0;
  top: 0;
  z-index: 10002;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  /* color: #03a9f4; */
  color: #ffff;
`;

const StyledNavContainerActive = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 10vh;
  left: 0;
  top: 0;
  z-index: 10002;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  /* color: #03a9f4; */
  /* background-color: #00000f; */
  /* background-image: linear-gradient(#00034d, #00000f); */
  background-color: #00000f;
  color: #fff;
`;

const StyledNavLogo = styled(motion.div)`
  order: 2;
  flex-grow: 1;
  cursor: pointer;
  a {
    img {
      max-height: 8vh;
    }
  }
`;

const StyledNavPages = styled(motion.div)`
  order: 4;
  flex-grow: 1;
  flex-shrink: 2;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* justify-content: center;
  align-items: center; */
  justify-items: space-around;
  align-items: center;
`;

const StyledAboutPage = styled(motion.div)`
  order: 1;
  flex-grow: 1;
  overflow: hidden;
  background: linear-gradient(to right, #006994, #006994 50%, white 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 750ms ease;
  text-decoration: none; // text decorations are clipped in WebKit browsers
  &:hover {
    background-position: 0 100%;
    cursor: pointer;
  }
  h1 {
    font-size: 1.5em;
  }
  /* :hover {
    color: #03a9f4;
    cursor: pointer;
  } */
`;
const StyledRarityPage = styled(motion.div)`
  order: 3;
  flex-grow: 1;
  background: linear-gradient(to right, #006994, #006994 50%, white 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 750ms ease;
  text-decoration: none; // text decorations are clipped in WebKit browsers
  &:hover {
    background-position: 0 100%;
    cursor: pointer;
  }
  h1 {
    font-size: 1.5em;
  }
`;
const StyledTokenomicsPage = styled(motion.div)`
  order: 2;
  flex-grow: 1;
  background: linear-gradient(to right, #006994, #006994 50%, white 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 750ms ease;
  text-decoration: none; // text decorations are clipped in WebKit browsers
  &:hover {
    background-position: 0 100%;
    cursor: pointer;
  }
  h1 {
    font-size: 1.5em;
  }
`;
const StyledMintPage = styled(motion.div)`
  order: 5;
  flex-grow: 1;
  background: linear-gradient(to right, #006994, #006994 50%, white 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 750ms ease;
  text-decoration: none; // text decorations are clipped in WebKit browsers
  &:hover {
    background-position: 0 100%;
    cursor: pointer;
  }
  h1 {
    font-size: 1.5em;
  }
`;
const StyledInvestmentsPage = styled(motion.div)`
  order: 4;
  flex-grow: 1;
  background: linear-gradient(to right, #006994, #006994 50%, white 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 750ms ease;
  text-decoration: none; // text decorations are clipped in WebKit browsers
  &:hover {
    background-position: 0 100%;
    cursor: pointer;
  }
  h1 {
    font-size: 1.5em;
  }
`;
const StyledSocials = styled(motion.div)`
  order: 6;
  flex-grow: 1;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const StyledTwitter = styled(motion.div)`
  order: 1;
  flex-grow: 1;
  svg {
    /* height: 35px; */
    fill: white;
  }
  svg:hover {
    fill: #006994;
    cursor: pointer;
  }
`;
const StyledDiscord = styled(motion.div)`
  order: 2;
  flex-grow: 1;
  svg {
    height: 25px;
    fill: white;
  }
  svg:hover {
    fill: #006994;
    cursor: pointer;
  }
`;
const StyledMedium = styled(motion.div)`
  order: 3;
  flex-grow: 1;
  svg {
    /* height: 35px; */
    fill: white;
  }
  svg:hover {
    fill: #006994;
    cursor: pointer;
  }
`;
const StyledTofu = styled(motion.div)`
  order: 4;
  flex-grow: 1;
  svg {
    /* height: 35px; */
    fill: white;
  }
  svg:hover {
    fill: #006994;
    cursor: pointer;
  }
`;

export default Nav;
