import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer"
import PortfolioContainer from "./components/PortContainer";
import Portfolio from "./components/pages/Portfolio"
function App() {
  return (
    <div>
      
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;