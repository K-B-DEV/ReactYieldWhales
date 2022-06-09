import React, { useState, PureComponent, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

import whale from "../img/3864.jpg";
import ticket from "../img/ticket.png";
import compound from "../img/compound.png";
import giveaway from "../img/gift.png";
import capital from "../img/capital.png";

import Bubbles from "../components/Bubbles";

import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

import { useInView } from "react-intersection-observer";

//img
//animation
const data = [
  { name: "Initial Collection", amount: 5, color: "#00d9ff", inPercent: "5%" },
  {
    name: "Investors",
    amount: 85,
    color: "#ff0037ad",
    inPercent: "65%",
  },
  { name: "Team", amount: 10, color: "#7700ff", inPercent: "10%" },
  { name: "Reinvestment", amount: 20, color: "#15ff00", inPercent: "20%" },
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

const Tokenomics = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const width = 400;
  const half = width / 2;

  const smallWidth = 250;
  const smallHalf = smallWidth / 2;

  const tinyWidth = 175;
  const tinyHalf = tinyWidth / 2;

  // if (windowDimensions.width < 800) {
  //   width = 200;
  // }
  console.log(width);
  const [active, setActive] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
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
        opacity: 1,
        transition: {
          delay: 2.2,
          duration: 1,
        },
      });
      animation5.start({
        opacity: 1,
        transition: {
          delay: 2.6,
          duration: 1,
        },
      });
      animation6.start({
        opacity: 1,
        transition: {
          delay: 3,
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
      animation2.start({ opacity: 0 });
      animation3.start({ opacity: 0 });
      animation4.start({ opacity: 0 });
      animation5.start({ opacity: 0 });
      animation6.start({ opacity: 0 });
    }
  }, [inView]);
  return (
    <>
      <StyledLandingContainer id="tokenomics" ref={ref}>
        <AnimatePresence>
          <Bubbles />
          <StyledHeader animate={animation}>
            <h1>TOKENOMICS</h1>
          </StyledHeader>
          <StyledDivGrid>
            <StyledCard animate={animation2}>
              <div>
                <h2>Lifetime Yield</h2>
              </div>
              <div>
                <p>
                  Each Yield Whales NFT gives you lifetime access to consistant
                  passive income provided on a bi-weekly basis.
                </p>
              </div>
            </StyledCard>
            <StyledCard animate={animation3}>
              <div>
                <h2>Minting Capital</h2>
              </div>
              <div>
                <p>
                  {/* From the total sum of AVAX raised via NFT sales, 90% will be
                  immediatly invested into the{" "}
                  <a
                    href="https://medium.com/@nodewhales500/node-whales-nft-whitepaper-22d8e548fab2"
                    target="#_"
                  >
                    <u>team's investment picks</u>
                  </a>{" "}
                  and 10% will be invested into marketing. */}
                  All of the capital raised through the minting of NFTs will be
                  invested into masternodes on a daily basis.
                </p>
                {/* <p>
                  The entire sum of AVAX raised via NFT sales will be
                  immediately invested into node projects once 2500/2500 NFTs
                  have been minted.
                </p> */}
              </div>
            </StyledCard>
            <StyledCard animate={animation4}>
              <div>
                <h2>Payouts</h2>
              </div>
              <div>
                <p>
                  You will recieve payment to the wallet holding your NFT(s) on
                  a bi-weekly basis in USDC.e. There are no actions needed by
                  our investors to claim their rewards besides holding their
                  NFT(s).
                </p>
              </div>
            </StyledCard>
            <StyledCard animate={animation5}>
              <div>
                <h2>Growth</h2>
              </div>
              <div>
                <p>
                  After our collection reaches a marketcap of $1.5M, minting
                  will stop. We will then increase our reinvestment percentage
                  from 20% to 35%.
                </p>
              </div>
            </StyledCard>
          </StyledDivGrid>
          <StyledChartGrid animate={animation6}>
            <StyledGridTitle>
              {/* <h2>Rewards Distribution</h2> */}
            </StyledGridTitle>
            {windowDimensions.width > 1000 && (
              <StyledChartContainer>
                <svg width={width} height={width}>
                  <Group top={half} left={half}>
                    <Pie
                      data={data}
                      pieValue={(data) => data.amount}
                      outerRadius={half}
                      innerRadius={({ data }) => {
                        const size =
                          active && active.name == data.name ? 22 : 16;
                        return half - size;
                      }}
                      padAngle={0.01}
                    >
                      {(pie) => {
                        return pie.arcs.map((arc) => {
                          return (
                            <g
                              key={arc.data.name}
                              onMouseEnter={() => setActive(arc.data)}
                              onMouseLeave={() => setActive(null)}
                            >
                              <path
                                d={pie.path(arc)}
                                fill={arc.data.color}
                              ></path>
                            </g>
                          );
                        });
                      }}
                    </Pie>

                    {active ? (
                      <>
                        <Text textAnchor="middle" fill="#aaa" dy={20}>
                          {active.name}
                        </Text>
                        <Text textAnchor="middle" fill="#FFF" dy={-20}>
                          {active.inPercent}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text textAnchor="middle" fill="#FFF">
                          {"Profit Distribution"}
                        </Text>
                        <Text textAnchor="middle" fill="#FFF">
                          {""}
                        </Text>
                      </>
                    )}
                  </Group>
                </svg>
              </StyledChartContainer>
            )}
            {windowDimensions.width < 1000 && windowDimensions.width > 370 && (
              <StyledChartContainer>
                <svg width={smallWidth} height={smallWidth}>
                  <Group top={smallHalf} left={smallHalf}>
                    <Pie
                      data={data}
                      pieValue={(data) => data.amount}
                      outerRadius={smallHalf}
                      innerRadius={({ data }) => {
                        const size =
                          active && active.name == data.name ? 22 : 16;
                        return smallHalf - size;
                      }}
                      padAngle={0.01}
                    >
                      {(pie) => {
                        return pie.arcs.map((arc) => {
                          return (
                            <g
                              key={arc.data.name}
                              onMouseEnter={() => setActive(arc.data)}
                              onMouseLeave={() => setActive(null)}
                            >
                              <path
                                d={pie.path(arc)}
                                fill={arc.data.color}
                              ></path>
                            </g>
                          );
                        });
                      }}
                    </Pie>

                    {active ? (
                      <>
                        <Text textAnchor="middle" fill="#aaa" dy={20}>
                          {active.name}
                        </Text>
                        <Text textAnchor="middle" fill="#FFF" dy={-20}>
                          {active.inPercent}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text textAnchor="middle" fill="#FFF">
                          {"Profit Distribution"}
                        </Text>
                        <Text textAnchor="middle" fill="#FFF">
                          {""}
                        </Text>
                      </>
                    )}
                  </Group>
                </svg>
              </StyledChartContainer>
            )}
            {windowDimensions.width < 370 && (
              <StyledChartContainer>
                <svg width={tinyWidth} height={tinyWidth}>
                  <Group top={tinyHalf} left={tinyHalf}>
                    <Pie
                      data={data}
                      pieValue={(data) => data.amount}
                      outerRadius={tinyHalf}
                      innerRadius={({ data }) => {
                        const size =
                          active && active.name == data.name ? 22 : 16;
                        return tinyHalf - size;
                      }}
                      padAngle={0.01}
                    >
                      {(pie) => {
                        return pie.arcs.map((arc) => {
                          return (
                            <g
                              key={arc.data.name}
                              onMouseEnter={() => setActive(arc.data)}
                              onMouseLeave={() => setActive(null)}
                            >
                              <path
                                d={pie.path(arc)}
                                fill={arc.data.color}
                              ></path>
                            </g>
                          );
                        });
                      }}
                    </Pie>

                    {active ? (
                      <>
                        <Text textAnchor="middle" fill="#aaa" dy={20}>
                          {active.name}
                        </Text>
                        <Text textAnchor="middle" fill="#FFF" dy={-20}>
                          {active.inPercent}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text textAnchor="middle" fill="#FFF">
                          {"Profit Distribution"}
                        </Text>
                        <Text textAnchor="middle" fill="#FFF">
                          {""}
                        </Text>
                      </>
                    )}
                  </Group>
                </svg>
              </StyledChartContainer>
            )}
          </StyledChartGrid>
        </AnimatePresence>
      </StyledLandingContainer>
    </>
  );
};

const StyledLandingContainer = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-rows: 0.5fr 1fr 2.5fr 0.5fr;
  grid-template-columns: 0.1fr 1.5fr 1fr 0.1fr;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding-left: 2rem;
  padding-right: 2rem;
  /* background-color: #f7f7f7; */
  background-image: linear-gradient(#000599, #00034d);
  z-index: 2;
  column-gap: 1em;
  /* Extra small devices (phones, 600px and down) */
  @media screen and (max-width: 360px) {
    // 568px - 768px
    grid-template-rows: 2fr 1fr 1.5fr 1fr 1fr;
    row-gap: 1em;
    height: 250vh;
    max-height: 250vh;
  }
  @media screen and (min-width: 360px) and (max-width: 421px) {
    // 568px - 768px
    grid-template-rows: 1fr 1fr 1.5fr 1fr 1fr;
    row-gap: 1em;
    height: 130vh;
    max-height: 130vh;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 421px) and (max-width: 650px) {
    grid-template-rows: 2fr 1fr 1.5fr 1fr 1fr;
    row-gap: 1em;
    height: 125vh;
    max-height: 130vh;
  }
  @media only screen and (min-width: 649px) and (max-width: 650px) {
    grid-template-rows: 2fr 1fr 1.5fr 1fr 1fr;
    row-gap: 1em;
    height: 125vh;
    max-height: 130vh;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 650px) {
    grid-template-rows: 2fr 1fr 1.5fr 1fr 0.1fr;
    row-gap: 1em;
    height: 100vh;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-template-rows: 2fr 1fr 1.5fr 1fr 0.1fr;
    row-gap: 1em;
    height: 100vh;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-template-rows: 0.5fr 1fr 2.5fr 0.5fr;
    height: 100vh;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-rows: 0.5fr 1fr 2.5fr 0.5fr;
    height: 100vh;
  }
`;

const StyledHeader = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1/5;
  align-self: center;
  justify-self: center;
  color: white;
  h1 {
    font-size: 8em;
    text-shadow: 1px 1px black;
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

const StyledDivGrid = styled(motion.div)`
  height: 100%;
  width: 100%;

  grid-row: 3/4;
  grid-column: 2/3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  row-gap: 1em;
  column-gap: 1em;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 650px) {
    grid-row: 3/4;
    grid-column: 2/4;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 650px) {
    grid-row: 3/4;
    grid-column: 2/4;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-row: 3/4;
    grid-column: 2/4;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-row: 3/4;
    grid-column: 2/3;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-row: 3/4;
    grid-column: 2/3;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledChartGrid = styled(motion.div)`
  height: 100%;
  width: 100%;

  grid-row: 3/4;
  grid-column: 3/4;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr;

  /* border: 1px solid white;
  border-radius: 16px; */
  color: white;
  align-items: center;
  justify-items: center;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 650px) {
    grid-row: 4/5;
    grid-column: 2/4;

    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 650px) {
    grid-row: 4/5;
    grid-column: 2/4;

    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-row: 4/5;
    grid-column: 2/4;

    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-row: 3/4;
    grid-column: 3/4;

    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-row: 3/4;
    grid-column: 3/4;

    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr;
  }
`;

const StyledGridTitle = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
`;

const StyledChartContainer = styled(motion.div)`
  grid-row: 1/3;
  grid-column: 1/2;

  align-self: center;
  justify-self: center;
`;

// const StyledCard1Slot = styled(motion.div)`
//   grid-row: 3/4;
//   grid-column: 1/2;
// `;
// const StyledCard2Slot = styled(motion.div)`
//   grid-row: 3/4;
//   grid-column: 2/3;
// `;
// const StyledCard3Slot = styled(motion.div)`
//   grid-row: 3/4;
//   grid-column: 3/4;
// `;
// const StyledCard4Slot = styled(motion.div)`
//   grid-row: 3/4;
//   grid-column: 4/5;
// `;

const StyledCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.2fr 1fr;
  /* background-color: white; */
  color: white;
  border-radius: 16px;
  border: 1px solid white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 1em;
  align-items: center;
  justify-items: center;

  /* Extra small devices (phones, 600px and down) */
  div {
    p {
      a {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 420px) {
    // 568px - 768px
    p {
      font-size: 12px;
    }
    max-height: 100%;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 421px) and (max-width: 649px) {
    max-height: 100%;
  }
  @media only screen and (max-width: 650px) {
    max-height: 100%;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 650px) {
    height: 100%;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    height: 100%;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    height: 100%;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 100%;
  }
`;

export default Tokenomics;
