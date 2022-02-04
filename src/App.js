import * as React from "react";
import Header from "./Components/Header/Header";
import SideMenu from "./Components/SideMenu/SideMenu";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <SideMenu />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
