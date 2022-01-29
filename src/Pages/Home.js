import React from "react";
import Header from "../Components/Header/Header";
import SideMenu from "../Components/SideMenu/SideMenu";
import MainContent from "../Components/MainContent/MainContent";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SideMenu />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
