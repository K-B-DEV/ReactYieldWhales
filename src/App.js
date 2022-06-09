import "./App.css";

import { useState } from "react";

//components
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import MainMint from "./components/MainMint";
import Landing from "./pages/landing";
import About from "./pages/about";
import Tokenomics from "./pages/tokenomics";
import Rarity from "./pages/rarity";
import Footer from "./components/Footer";
function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <>
      <div className="App">
        <GlobalStyles></GlobalStyles>
        <Nav accounts={accounts} setAccounts={setAccounts}></Nav>
        {/* <MainMint accounts={accounts} setAccounts={setAccounts}></MainMint> */}
        <Landing />
        <About />
        <Tokenomics />
        <Rarity />
        {/* <Minting accounts={accounts} setAccounts={setAccounts} /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
