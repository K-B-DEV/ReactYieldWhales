import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* overflow-x: hidden !important; */
        scroll-behavior: smooth;
        &::-webkit-scrollbar{
            width: 0.5rem !important;
            background-color: #0D0D0D !important;
            border: 1px solid #0D0D0D !important;
        }
        &::-webkit-scrollbar-thumb{
            background-color: white !important;
        }
        /* text-shadow: 1px 1px black; */
        font-family: 'Poppins', sans-serif;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem !important;
            background-color: #00000f !important;
            border: 1px solid white !important;
        }
        &::-webkit-scrollbar-thumb{
            background-color: white !important;
        }
    }
    body{
        a {
            all: unset;
            cursor: pointer;
            text-shadow: 1px solid black;
        }

        a {
  text-decoration:none;
  color:#FFF;
}
.rainbow-button {
  width:calc(200px + 8px);
  height:calc(75px + 8px);
  background-image: linear-gradient(90deg, #00C0FF 0%, #000599 49%, #006994 80%, #00C0FF 100%);
  /* background-image: linear-gradient(90deg, #000599 0%, #006994 49%, #006994 80%, #000599 100%); */
  border-radius:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-transform:uppercase;
  font-size:1.5em;
  font-weight:bold;
  animation:slidebg 5s linear infinite;

  @media only screen and (max-width: 600px) {
        width:calc(100px + 4px);
        height:calc(50px + 4px);
        font-size:.8em;
        animation: slidesmall 5s linear infinite;
    }
}
.rainbow-button:after {
  content:attr(alt);
  width:200px;
  height:75px;
  border-radius: 16px;
  background-color: #00000f;
  display:flex;
  align-items:center;
  justify-content:center;

  @media only screen and (max-width: 600px) {
        width:100px;
        height:50px;
    }
}
.rainbow-button2 {
  width:calc(200px + 8px);
  height:calc(75px + 8px);
  background-image: linear-gradient(90deg, #00C0FF 0%, #000599 49%, #006994 80%, #00C0FF 100%);
  border-radius:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-transform:uppercase;
  font-size:1.5em;
  font-weight:bold;
  animation:slidebg 5s linear infinite;

  @media only screen and (max-width: 600px) {
        width:calc(100px + 4px);
        height:calc(50px + 4px);
        font-size:.8em;
        animation: slidesmall 5s linear infinite;
    }
}
.rainbow-button2:after {
  content:attr(alt);
  width:200px;
  height:75px;
  border-radius: 16px;
  background-color: #00000f;
  display:flex;
  align-items:center;
  justify-content:center;

  @media only screen and (max-width: 600px) {
        width:100px;
        height:50px;
    }
}
.rainbow-button:hover {
  
}
@keyframes slidesmall {
  to {
    background-position:206px;
  }
}
@keyframes slidebg {
  to {
    background-position:206px;
  }
}
        font-family: 'Russo One', sans-serif;
    
        @keyframes wave1 {
        0%   { background-position-x: 0; }
        100% { background-position-x: 1000px; }
        }
        @keyframes wave2 {
        0%   { background-position-x: 0; }
        100% { background-position-x: -1000px; }
        }
        @keyframes animate {
            0%,100%{
                clip-path: polygon(0 46%, 16% 44%, 33% 47%, 44% 55%, 53% 61%, 66% 62%, 80% 61%, 91% 57%, 100% 53%, 100% 100%, 0% 100%);
            }
            50%{
                clip-path: polygon(0 52%, 11% 57%, 24% 62%, 42% 65%, 56% 62%, 65% 56%, 76% 45%, 87% 41%, 100% 41%, 100% 100%, 0% 100%);
            }
        }
        @keyframes whale-gill {
          0% {height: 2vmin; box-shadow: 2px 2px 2px #62728A;}
          10% {height: 3vmin; box-shadow: none;}
          70% {height: 3vmin; box-shadow: none;}
          80% {height: 2vmin; box-shadow: 2px 2px 2px #62728A;}
          100% {height: 2vmin; box-shadow: 2px 2px 2px #62728A;}
          }

          @-webkit-keyframes whale-gill {
          0% {height: 2vmin; box-shadow: 2px 2px 2px #62728A;}
          10% {height: 3vmin; box-shadow: none;}
          70% {height: 3vmin; box-shadow: none;}
          80% {height: 2vmin; box-shadow: 2px 2px 2px #62728A;}
          100% {height: 2vmin; box-shadow: 2px 2px 2px #62728A;}
          }
                  @keyframes raymove {
          0% {transform: rotate(10deg) translateX(60%); opacity:.0;}
          50% {transform: rotate(10deg) translateX(0%); opacity:.2;}
          100% {transform: rotate(10deg) translateX(-60%); opacity:.0;}
        }
        @keyframes whale-swim-back {
        0% {border-radius: 10% 0% 0% 100%}
        25% {border-radius: 10% 0% 0% 100%}
        50% {border-radius: 100% 0% 0% 10%}
        75% {border-radius: 100% 0% 0% 10%}
        100% {border-radius: 10% 0% 0% 100%}
        }

        @-webkit-keyframes whale-swim-back {
        0% {border-radius: 20% 0% 0% 100%}
        50% {border-radius: 100% 0% 0% 20%}
        100% {border-radius: 20% 0% 0% 100%}
        }

        @keyframes flipper-simple {
        0% {transform: rotate(-73deg); }
        25% {transform: rotate(-13deg);}
        70% {transform: rotate(-13deg);}
        100% {transform: rotate(-73deg);}
        }

        @-webkit-keyframes flipper-simple {
        0% {transform: rotate(-73deg); }
        25% {transform: rotate(-13deg);}
        50% {transform: rotate(-13deg);}
        100% {transform: rotate(-73deg);}
        }

        @keyframes flipper-move {
        0% {top: -35%; transform: rotate(-73deg); }
        25% {top: -35%; transform: rotate(25deg); }
        50% {top: 58%; transform: rotate(25deg);}
        75% {top: 58%; transform: rotate(-73deg);}
        100% {top: -35%; transform: rotate(-73deg);}
        }

        @-webkit-keyframes flipper-move {
        0% {top: -35%; transform: rotate(-73deg); }
        25% {top: -35%; transform: rotate(25deg); }
        50% {top: 58%; transform: rotate(25deg);}
        75% {top: 58%; transform: rotate(-73deg);}
        100% {top: -35%; transform: rotate(-73deg);}
        }
        @keyframes whale-swim {
        0% {transform: translateX(-50%) rotate(0deg);}
        25% {transform: translateX(-50%) rotate(-3deg);}
        50% {transform: translateX(-50%) rotate(0deg);}
        75% {transform: translateX(-50%) rotate(3deg);}
        100% {transform: translateX(-50%) rotate(0deg);}
        }

        @-webkit-keyframes whale-swim {
        0% {border-radius: 20% 0% 0% 100%}
        50% {border-radius: 100% 0% 0% 20%}
        100% {border-radius: 20% 0% 0% 100%}
        }
        @keyframes whale-move {
        0% {transform: translateX(-1000%);}
        100% {transform: translateX(1000%);}
        }

        @-webkit-keyframes whale-move {
        0% {transform: translateX(-500%);}
        100% {transform: translateX(1000%);}
        }

        @keyframes bubble {
        0% {
            transform: translateY(0%);
            opacity: 0.06;
        }
        100% {
            transform: translateY(-120vh);
        }
        }

        @keyframes sideWays {
        0% {
            margin-left: 0px;
        }
        100% {
            margin-left: 3em;
        }
        }
        .blue-ocean .blue-whale-gill{
          animation: whale-gill1 1s ease-in-out infinite;
        }
        .blue-ocean .blue-whale{
          animation:whale-move 15s linear infinite;
        }

        .blue-ocean .blue-whale-main{
          animation:whale-swim 2s linear infinite;
        }

        .blue-ocean .blue-whale-backside{
          animation:whale-swim-back 2s linear infinite;
        }

        .blue-ocean .blue-whale-flipper{
          animation:flipper-move 2s linear infinite;
        }
        .blue-whale-flipper:after {
            content: "";
            left: 0%;
            top: 0%;
            position: absolute;
            width: 6vmin;
            height: 2.5vmin;
            background-color: #758AA7;
            -moz-border-radius: 0px 20vmin 0px 20vmin;
            -webkit-border-radius: 0px 20vmin 0px 20vmin;
            border-radius: 0px 20vmin 0px 20vmin;
            transform-origin: 100% 100%;
            -webkit-transition: .4s ease-in-out;
            -moz-transition: .4s ease-in-out;
            -o-transition: .4s ease-in-out;
            transition: .4s ease-in-out;
            transform: rotate(-20deg);
        }
        overflow-x: hidden;
    }
    
    .MuiTypography-body1{
        /* font-family: 'Russo One', sans-serif !important; */
        overflow: hidden;
    }
    .MuiInputBase-root{
        background: hsla(0,0%,100%,.2);
        border-radius: 8px;
        padding: 10px;
        border: 1px solid hsla(0,0%,100%,.2);
        color: hsla(0,0%,100%,.6) !important;
        width: 100%;
        height: 3rem;
        overflow: hidden;
    
    }
    .MuiButtonBase-root{
        background: hsla(0,0%,100%,.2) !important;
        border: 1px solid hsla(0,0%,100%,.2) !important;
        color: white !important;
        height: 3rem;
        overflow: hidden;
    }
    .MuiIconButton-root{
        background: none !important;
        border: none !important;
        overflow: hidden;
    }
    .MuiListItem-root{
        background: none !important;
        border: none !important;
        overflow: hidden;
    }
    .MuiTypography-colorTextSecondary{
        color: white !important;
        overflow: hidden;
    }
    .MuiInput-underline:after, .MuiInput-underline:before{
        border-bottom: none !important;
        overflow: hidden;
    }
   .MuiTableCell-body{
        color: white;
        text-shadow: 1px 1px black;
        text-align: center;
        overflow: hidden;
   }
   .MuiTableCell-head{
       font-size: 20px;
       color: #366a7d;
       text-shadow: 1px 1px black;
       overflow: hidden;
   }
   .MuiTableCell-root{
    border-bottom: 1px solid black;
    overflow: hidden;
   }
   .MuiTableCell-head{
       text-align: center;
       overflow: hidden;
   }
   .MuiTablePagination-toolbar{
       color: white;
       overflow: hidden;
   }
   .MuiSelect-icon{
       color: white;
       overflow: hidden;
   }
   .MuiSvgIcon-root{
    color: white;
    overflow: hidden;
   }
   .MuiIconButton-root.Mui-disabled{
       .MuiIconButton-label{
        .MuiSvgIcon-root{
            color: black !important;
            overflow: hidden;
        }
       }
       
   }
   .MuiSelect-select:not([multiple]) option, .MuiSelect-select:not([multiple]) optgroup{
       background: #232323;
       overflow: hidden;
   }
   .particles-wrapper {
        background-color: #222;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        overflow: hidden;
        overflow: hidden;
    }
    .MuiDrawer-paper{
        background-color: #121415 !important;
        color: white !important;
        overflow: hidden;
    }
    .MuiIconButton-root{
        overflow:hidden !important;
    }

    .navigation {
    height: 10vmin;
    border-bottom: 1px solid #BDBDBD;
    box-shadow: 0px 2px 2px #888888;
    background-color: #387CEF;
    padding: 3.4vmin 0vmin 0vmin 5vmin;
    color: #fff;
    position: absolute;
    width: 100%;
    z-index: 1000000000;
}

    .MuiButtonBase-root{
        background: none !important;
        font-family: 'Poppins', sans-serif;
    }



   

`;

export default GlobalStyles;
