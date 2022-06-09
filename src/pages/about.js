import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

import whale from "../img/3864.jpg";
import def from "../img/def.png";
import pfp from "../img/pfp.png";
import pearl from "../img/pearl.png";
import linkedin from "../img/indeed.png";

import Bubbles from "../components/Bubbles";
//img
import { useInView } from "react-intersection-observer";
//animation

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
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
          delay: 1.5,
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
      animation2.start({ opacity: 0 });
    }
  }, [inView]);
  return (
    <>
      <StyledLandingContainer id="about" ref={ref}>
        <AnimatePresence>
          <StyledHeader animate={animation}>
            <h1>About</h1>
          </StyledHeader>

          {/* <StyledAboutContentContainer animate={animation2}>
            <StyledAboutImg>
              <img src={pfp} alt="Node Whales Owner" />
            </StyledAboutImg>
            <StyledAboutDesc1>
              <p>
                My name is Kyle, I'm the owner and developer of Node Whales
                based in Ontario, Canada. Throughout the past year I have gained
                a huge interest in DeFi, some may say an obsession. This has led
                me to create a project which will help support other projects in
                the DeFi space.
              </p>
            </StyledAboutDesc1>
            <StyledAboutDesc2>
              <p>
                My long term goal with this project is to continously grow our
                treasury investments to sustain this project for as long as
                possible. Throughout the journey of Node Whales, I aspire to
                enrich as many of our community members as possible. Financial
                freedom and passive income is the ultimate goal, and I hope to
                make that a reality for as many of you as possible.
              </p>
            </StyledAboutDesc2>
          </StyledAboutContentContainer> */}
          <StyledAboutOwner animate={animation2}>
            <StyledAboutLinkedin>
              <a href="https://www.linkedin.com/in/kylebayer/" target="#_">
                <img src={linkedin} alt="Kyle Bayer" />
              </a>
            </StyledAboutLinkedin>
            <StyledAboutImg>
              <img src={pfp} alt="Node Whales Owner" />
            </StyledAboutImg>
            <StyledAboutDesc1>
              <p>
                My name is Kyle Bayer, I'm the owner and developer of this
                project. I live in Ontario, Canada.
              </p>
            </StyledAboutDesc1>
          </StyledAboutOwner>
          <StyledAboutProject animate={animation2}>
            <StyledAboutProjectTitle>
              <h2>Project Goal</h2>
            </StyledAboutProjectTitle>
            <StyledAboutDesc2>
              <p>
                The goal for this project is to provide an service for small and
                large scale investors to earn consistent passive income. With
                this project, I will be eliminating many barriers of entry that
                are presented to investors by other platforms. I want to make
                the process of earning passive income as simple and as hands off
                as possible.
              </p>
            </StyledAboutDesc2>
          </StyledAboutProject>
        </AnimatePresence>
      </StyledLandingContainer>
      <StyledWhaleContainer className="card">
        <StyledWhaleCard className="card">
          <StyledBlueOcean className="blue-ocean">
            <Bubbles />
            <StyledBlueWhaleLine1 className="blue-whale-line1"></StyledBlueWhaleLine1>
            <StyledBlueWhale className="blue-whale">
              <StyledBlueWhaleMain className="blue-whale-main">
                <StyledBlueWhaleEye className="blue-whale-eye"></StyledBlueWhaleEye>
                <StyledGillContainer className="gill-container">
                  <StyledBlueWhaleGill className="blue-whale-gill"></StyledBlueWhaleGill>
                </StyledGillContainer>
                <StyledBlueWhaleColor className="blue-whale-color"></StyledBlueWhaleColor>
                <StyledBlueWhaleColorBottom className="blue-whale-color-bottom"></StyledBlueWhaleColorBottom>
              </StyledBlueWhaleMain>
              <StyledBlueWhaleBackside className="blue-whale-backside">
                <div></div>
              </StyledBlueWhaleBackside>
              <StyledBlueWhaleFlipper className="blue-whale-flipper"></StyledBlueWhaleFlipper>
            </StyledBlueWhale>
          </StyledBlueOcean>
        </StyledWhaleCard>
      </StyledWhaleContainer>
    </>
  );
};

const StyledLandingContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  /* pointer-events: none; */
  color: white;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 1em;
  column-gap: 1em;
  z-index: 20;

  @media screen and (max-width: 350px) {
    // 568px - 768px
    /* grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.5fr;
    pointer-events: auto; */
    grid-template-columns: 0.01fr 1fr 1fr 0.01fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.5fr;
    height: 170vh;
    max-height: 170vh;
  }
  @media screen and (min-width: 350px) and (max-width: 420px) {
    // 568px - 768px
    /* grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.5fr;
    pointer-events: auto; */
    grid-template-columns: 0.01fr 1fr 1fr 0.01fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.5fr;
    height: 130vh;
    max-height: 130vh;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 420px) and (max-width: 650px) {
    /* grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 0.5fr 1fr 1fr 1fr 0.5fr; */
    grid-template-columns: 0.01fr 1fr 1fr 0.01fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.5fr;
    height: 100vh;
    max-height: 100vh;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    grid-template-columns: 0.01fr 1fr 1fr 0.01fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.5fr;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.5fr;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-template-columns: 0.2fr 1fr 1fr 0.2fr;
    grid-template-rows: 0.5fr 1fr 1fr 1fr 0.5fr;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
    grid-template-rows: 0.5fr 1fr 1fr 1fr 0.5fr;
  }
`;
const StyledHeader = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/4;
  align-self: center;
  justify-self: center;
  h1 {
    font-size: 8em;
    text-shadow: 1px 1px black;
  }
  @media screen and (max-width: 420px) {
    // 568px - 768px
    h1 {
      font-size: 3em;
    }
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 421px) and (max-width: 650px) {
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
const StyledAboutOwner = styled(motion.div)`
  grid-row: 3/5;
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  padding: 1em;
  border: 1px solid white;
  border-radius: 16px;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 420px) {
    // 568px - 768px
    h1 {
      font-size: 3em;
    }
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 1px) and (max-width: 650px) {
    grid-row: 3/4;
    grid-column: 2/4;
  }
`;
const StyledAboutLinkedin = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: start;
  justify-self: end;

  cursor: pointer;
  /* box-shadow: 2vmin -6vmin 6vmin #fff; */
  a {
    img {
      height: 50px;
    }
  }

  z-index: 100;
`;
const StyledAboutProject = styled(motion.div)`
  grid-row: 3/5;
  grid-column: 3/4;
  width: 100%;
  height: 100%;
  padding: 1em;
  border: 1px solid white;
  border-radius: 16px;

  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 1fr;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media only screen and (min-width: 1px) and (max-width: 650px) {
    grid-row: 4/5;
    grid-column: 2/4;
  }
`;
const StyledAboutContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-row: 3/5;
  grid-column: 2/4;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 0.3fr 1fr;
  border: 1px solid white;
  border-radius: 16px;

  padding: 1em;
  @media only screen and (max-width: 330px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    overflow-y: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 0.3fr 1fr;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 0.3fr 1fr;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 0.3fr 1fr;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 0.3fr 1fr;
  }
`;
const StyledAboutImg = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 100%;
  img {
    max-height: 200px;
  }
  @media only screen and (min-width: 1px) and (max-width: 650px) {
    img {
      max-height: 150px;
    }
  }
  @media only screen and (min-width: 1500px) {
    img {
      max-height: 200px;
    }
  }

  @media only screen and (max-width: 600px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`;
const StyledAboutDesc1 = styled(motion.div)`
  grid-row: 2/3;
  /* grid-column: 2/3; */
  grid-column: 1/2;

  align-self: center;
  justify-self: center;
  p {
    text-align: start;
  }
  @media only screen and (max-width: 330px) {
    p {
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 331px) and (max-width: 420px) {
    p {
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 1px) and (max-width: 600px) {
    /* grid-row: 1/2; */
    grid-row: 2/3;
    grid-column: 1/2;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    /* grid-row: 1/2; */
    grid-row: 2/3;
    grid-column: 1/2;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    /* grid-row: 1/2; */
    grid-row: 2/3;
    grid-column: 1/2;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    /* grid-row: 1/2; */
    grid-row: 2/3;
    grid-column: 1/2;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) and (max-width: 1300px) {
    /* grid-row: 1/2; */
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;
const StyledAboutProjectTitle = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
`;
const StyledAboutDesc2 = styled(motion.div)`
  /* grid-row: 2/2;
  grid-column: 1/3; */
  grid-row: 2/2;
  grid-column: 1/2;

  align-self: center;
  justify-self: center;
  p {
    text-align: start;
  }
  @media only screen and (max-width: 330px) {
    p {
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 331px) and (max-width: 420px) {
    p {
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 1px) and (max-width: 600px) {
    /* grid-row: 3/4;
    grid-column: 1/2; */
    grid-row: 2/3;
    grid-column: 1/2;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    /* grid-row: 2/2;
    grid-column: 1/3; */
    grid-row: 2/3;
    grid-column: 1/2;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    /* grid-row: 2/2;
    grid-column: 1/3; */
    grid-row: 2/3;
    grid-column: 1/2;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    /* grid-row: 2/2;
    grid-column: 1/3; */
    grid-row: 2/3;
    grid-column: 1/2;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    /* grid-row: 2/2;
    grid-column: 1/3; */
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;
// const StyledUserContent = styled(motion.div)`
//   width: 100%;
//   max-height: 100%;
//   grid-row: 3/4;
//   grid-column: 2/4;

//   display: grid;
//   grid-template-rows: 1fr;
//   grid-template-columns: 1fr 2fr;
//   /* background-color: white; */
//   border: 1px solid white;
//   border-radius: 16px;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

//   /* Extra small devices (phones, 600px and down) */
// `;
// const StyledProjectContent = styled(motion.div)`
//   width: 100%;
//   height: 100%;
//   grid-row: 4/5;
//   grid-column: 2/4;

//   display: grid;
//   grid-template-rows: 1fr;
//   grid-template-columns: 2fr 1fr;
//   /* background-color: white; */
//   border: 1px solid white;
//   border-radius: 16px;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//   color: black;
// `;

// const StyledProjectOwnerPic = styled(motion.div)`
//   align-self: center;
//   justify-self: center;
//   grid-row: 1/2;
//   grid-column: 1/2;

//   padding: 1rem;
//   @media only screen and (max-width: 600px) {
//     img {
//       max-height: 100px;
//     }
//   }

//   /* Small devices (portrait tablets and large phones, 600px and up) */
//   @media only screen and (min-width: 600px) {
//     img {
//       max-height: 100px;
//     }
//   }

//   /* Medium devices (landscape tablets, 768px and up) */
//   @media only screen and (min-width: 768px) {
//     img {
//       max-height: 100px;
//     }
//   }

//   /* Large devices (laptops/desktops, 992px and up) */
//   @media only screen and (min-width: 992px) {
//     img {
//       max-height: 100px;
//     }
//   }

//   /* Extra large devices (large laptops and desktops, 1200px and up) */
//   @media only screen and (min-width: 1200px) {
//     img {
//       max-height: 200px;
//     }
//   }
// `;
// const StyledProjectOwnerDesc = styled(motion.div)`
//   max-height: 20vh;
//   grid-row: 1/2;
//   grid-column: 2/3;
//   align-self: end;
//   justify-self: start;
//   color: white;
//   align-self: center;
//   justify-self: center;
//   text-align: start;
//   padding: 1rem;

//   padding: 1rem;
// `;
// const StyledProjectGoalDesc = styled(motion.div)`
//   grid-row: 1/2;
//   grid-column: 1/2;
//   align-self: center;
//   justify-self: center;
//   text-align: start;
//   padding: 1rem;
//   color: white;
// `;
// const StyledProjectGoalImg = styled(motion.div)`
//   grid-row: 1/2;
//   grid-column: 2/3;
//   padding: 1rem;
//   align-self: center;
//   justify-self: center;
//   padding: 1rem;
//   @media only screen and (max-width: 600px) {
//     img {
//       max-height: 100px;
//     }
//   }

//   /* Small devices (portrait tablets and large phones, 600px and up) */
//   @media only screen and (min-width: 600px) {
//     img {
//       max-height: 100px;
//     }
//   }

//   /* Medium devices (landscape tablets, 768px and up) */
//   @media only screen and (min-width: 768px) {
//     img {
//       max-height: 100px;
//     }
//   }

//   /* Large devices (laptops/desktops, 992px and up) */
//   @media only screen and (min-width: 992px) {
//     img {
//       max-height: 100px;
//     }
//   }

//   /* Extra large devices (large laptops and desktops, 1200px and up) */
//   @media only screen and (min-width: 1200px) {
//     img {
//       max-height: 200px;
//     }
//   }
// `;

const StyledWhaleContainer = styled(motion.div)`
  z-index: 1;
  position: absolute;
  top: 100vh;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 3;
  @media screen and (max-width: 350px) {
    // 568px - 768px
    /* grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.5fr;
    pointer-events: auto; */
    grid-template-columns: 0.01fr 1fr 1fr 0.01fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.5fr;
    height: 170vh;
    max-height: 170vh;
  }
  @media screen and (min-width: 350px) and (max-width: 420px) {
    // 568px - 768px

    height: 130vh;
    max-height: 130vh;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 420px) and (max-width: 650px) {
    height: 100vh;
    max-height: 100vh;
  }
`;
const StyledWhaleCard = styled(motion.div)`
  /* border: 1px solid #ececec; */
  /*box-shadow: 2px 2px 3px 1px #B3B3B3;*/
  position: relative;
  height: 100vh;
`;
const StyledBlueOcean = styled(motion.div)`
  position: relative;
  background-image: linear-gradient(#006994, #000599);
  /* background-color: #607aa0; */
  /* background-color: #006994; */
  width: 100%;
  height: 100%;

  @media screen and (max-width: 350px) {
    // 568px - 768px
    /* grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.5fr;
    pointer-events: auto; */
    height: 170vh;
    max-height: 170vh;
  }
  @media screen and (min-width: 350px) and (max-width: 420px) {
    // 568px - 768px

    height: 130vh;
    max-height: 130vh;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 420px) and (max-width: 650px) {
    height: 100vh;
    max-height: 100vh;
  }
`;
const StyledBlueRay = styled(motion.div)`
  width: 8vmin;
  height: 105%;
  position: absolute;
  right: 2%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    /* #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100% */
      #f7e6d3 0%,
    #000599 80%,
    #000599 82%,
    #000599 84%,
    #000599 100%,
    #000599 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    /* color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0) */
      color-stop(0%, #f7e6d3),
    color-stop(80%, #000599),
    color-stop(82%, #000599),
    color-stop(84%, #000599),
    color-stop(100%, #000599),
    color-stop(100%, #000599)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    /* #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100% */
      #f7e6d3 0%,
    #000599 80%,
    #000599 82%,
    #000599 84%,
    #000599 100%,
    #000599 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    /* #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100% */
      #f7e6d3 0%,
    #000599 80%,
    #000599 82%,
    #000599 84%,
    #000599 100%,
    #000599 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    /* #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100% */
      #f7e6d3 0%,
    #000599 80%,
    #000599 82%,
    #000599 84%,
    #000599 100%,
    #000599 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    /* #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100% */
      #f7e6d3 0%,
    #000599 80%,
    #000599 82%,
    #000599 84%,
    #000599 100%,
    #000599 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4s linear infinite;
`;
const StyledBlueRay2 = styled(motion.div)`
  width: 6vmin;
  height: 105%;
  position: absolute;
  right: 20%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4s linear infinite;
`;
const StyledBlueRay3 = styled(motion.div)`
  width: 2vmin;
  height: 105%;
  position: absolute;
  right: 12%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 6s linear infinite;
`;
const StyledBlueRay5 = styled(motion.div)`
  width: 12vmin;
  height: 105%;
  position: absolute;
  right: 12%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 5s linear infinite;
`;
const StyledBlueRay9 = styled(motion.div)`
  width: 5vmin;
  height: 105%;
  position: absolute;
  right: 29%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4s linear infinite;
`;
const StyledBlueRay10 = styled(motion.div)`
  width: 7vmin;
  height: 105%;
  position: absolute;
  right: 34%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4s linear infinite;
`;
const StyledBlueRay11 = styled(motion.div)`
  width: 6vmin;
  height: 105%;
  position: absolute;
  right: 37%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4.3s linear infinite;
`;
const StyledBlueRay12 = styled(motion.div)`
  width: 5vmin;
  height: 105%;
  position: absolute;
  right: 42%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4s linear infinite;
`;
const StyledBlueRay13 = styled(motion.div)`
  width: 6vmin;
  height: 105%;
  position: absolute;
  right: 48%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4s linear infinite;
`;
const StyledBlueRay14 = styled(motion.div)`
  width: 7vmin;
  height: 105%;
  position: absolute;
  right: 48%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4s linear infinite;
`;
const StyledBlueRay15 = styled(motion.div)`
  width: 10vmin;
  height: 105%;
  position: absolute;
  right: 60%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4.5s linear infinite;
`;
const StyledBlueRay16 = styled(motion.div)`
  width: 3vmin;
  height: 105%;
  position: absolute;
  right: 70%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4s linear infinite;
`;
const StyledBlueRay17 = styled(motion.div)`
  width: 5vmin;
  height: 105%;
  position: absolute;
  right: 74%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4s linear infinite;
`;
const StyledBlueRay18 = styled(motion.div)`
  width: 7vmin;
  height: 105%;
  position: absolute;
  right: 80%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 5s linear infinite;
`;
const StyledBlueRay19 = styled(motion.div)`
  width: 8vmin;
  height: 105%;
  position: absolute;
  right: 90%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4s linear infinite;
`;
const StyledBlueRay20 = styled(motion.div)`
  width: 11vmin;
  height: 105%;
  position: absolute;
  right: 100%;
  transform: rotate(10deg);
  top: -8%;
  background: #f7e6d3; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7e6d3),
    color-stop(80%, #607aa0),
    color-stop(82%, #607aa0),
    color-stop(84%, #607aa0),
    color-stop(100%, #607aa0),
    color-stop(100%, #607aa0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #f7e6d3 0%,
    #607aa0 80%,
    #607aa0 82%,
    #607aa0 84%,
    #607aa0 100%,
    #607aa0 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7e6d3', endColorstr='#607aa0',GradientType=0 ); /* IE6-9 */
  opacity: 0.2;
  animation: raymove 4.5s linear infinite;
`;
const StyledBlueWhaleLine1 = styled(motion.div)`
  width: 40vmin;
  height: 5vmin;
  background-color: transparent;
  position: absolute;
  left: 40%;
  top: -10%;
  /* box-shadow: 1vmin 2vmin 25vmin #f5daf4; */
`;
const StyledBlueWhale = styled(motion.div)`
  height: 8vmin;
  width: 13vmin;
  background-color: transparent;
  position: absolute;
  left: 50%;
  transform: translateX(-1000%) rotate(0deg);
  border-radius: 0% 30% 5% 0%;
  top: 30%;
`;
const StyledBlueWhaleMain = styled(motion.div)`
  height: 7vmin;
  width: 20vmin;
  background: #758aa7;
  position: absolute;
  left: 30%;
  transform: translateX(-50%) rotate(0deg);
  border-radius: 0% 30% 2% 0%;
  transform-origin: 0% 50%;
  overflow: hidden;
  z-index: 1;
`;
const StyledBlueWhaleEye = styled(motion.div)`
  height: 0.3vmin;
  width: 1vmin;
  background-color: #6e798a;
  position: absolute;
  right: 30%;
  top: 70%;
  border-radius: 50%;
`;
const StyledGillContainer = styled(motion.div)`
  background-color: transparent;
  height: 3vmin;
  width: 4vmin;
  -moz-border-radius: 150px 0 0 0;
  border-radius: 0 0 4vmin 0;
  position: absolute;
  left: 25%;
  top: 70%;
  transform-origin: 100% 100%;
  overflow: hidden;
`;
const StyledBlueWhaleGill = styled(motion.div)`
  background-color: #9da6b5;
  height: 3vmin;
  width: 5vmin;
  -moz-border-radius: 150px 0 0 0;
  border-radius: 0 0 4vmin 0;
  position: absolute;
  animation: whale-gill 3s ease-in-out infinite;
  transform-origin: 100% 100%;
  transform: rotate(15deg);
`;
const StyledBlueWhaleColor = styled(motion.div)`
  height: 2vmin;
  width: 17vmin;
  background-color: transparent;
  position: absolute;
  top: 4vmin;
  left: 1vmin;
  box-shadow: 2vmin -6vmin 6vmin #fff;
  z-index: 1;
`;
const StyledBlueWhaleColorBottom = styled(motion.div)`
  height: 0.5vmin;
  width: 17vmin;
  background-color: transparent;
  position: absolute;
  top: 2.5vmin;
  left: 1vmin;
  box-shadow: -1vmin 4vmin 4vmin #090e15;
  z-index: 1;
`;
const StyledBlueWhaleBackside = styled(motion.div)`
  height: 7vmin;
  width: 12vmin;
  background: #758aa7;
  position: absolute;
  left: -124%;
  border-radius: 0% 0% 0% 100%;
  overflow: hidden;
  box-shadow: inset 0vmin -2vmin 3vmin #71819a;
  z-index: 100000000;
  /*background: -moz-linear-gradient(top, #ffffff 0%, #f4f0eb 19%, #f7e6d3 56%, #607aa0 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(19%,#f4f0eb), color-stop(56%,#f7e6d3), color-stop(100%,#607aa0));
    background: -webkit-linear-gradient(top, #ffffff 0%,#f4f0eb 19%,#f7e6d3 56%,#607aa0 100%);
    background: -o-linear-gradient(top, #ffffff 0%,#f4f0eb 19%,#f7e6d3 56%,#607aa0 100%);
    background: -ms-linear-gradient(top, #ffffff 0%,#f4f0eb 19%,#f7e6d3 56%,#607aa0 100%);
    background: linear-gradient(to bottom, #ffffff 0%,#f4f0eb 19%,#f7e6d3 56%,#607aa0 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#607aa0',GradientType=0 );*/
`;
const StyledBlueWhaleFlipper = styled(motion.div)`
  left: -166%;
  top: -36%;
  position: absolute;
  width: 6vmin;
  height: 2.5vmin;
  background-color: #687b96;
  -moz-border-radius: 0px 20vmin 0px 20vmin;
  -webkit-border-radius: 0px 20vmin 0px 20vmin;
  border-radius: 0px 20vmin 0px 20vmin;
  transform-origin: 100% 100%;
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  -webkit-transform: rotate(-23deg);
  -moz-transform: rotate(-23deg);
  -o-transform: rotate(-23deg);
  -ms-transform: rotate(-23deg);
  transform: rotate(-73deg);
  animation: flipper-simple 3s ease-in-out infinite;
  &:after {
    content: "";
    left: 0%;
    top: 0%;
    position: absolute;
    width: 6vmin;
    height: 2.5vmin;
    background-color: #758aa7;
    -moz-border-radius: 0px 20vmin 0px 20vmin;
    -webkit-border-radius: 0px 20vmin 0px 20vmin;
    border-radius: 0px 20vmin 0px 20vmin;
    transform-origin: 100% 100%;
    -webkit-transition: 0.4s ease-in-out;
    -moz-transition: 0.4s ease-in-out;
    -o-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    transform: rotate(-20deg);
  }
`;
export default About;
