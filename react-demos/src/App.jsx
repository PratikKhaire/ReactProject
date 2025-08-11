import React from "react";
import Header from "./componets/Header";
import MainContent from "./componets/MainContent";
import Footer from "./componets/Footer";
import WelcomeMessage from "./componets/WelcomeMessage";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage/>
    </div>
  );
};

export default App;
