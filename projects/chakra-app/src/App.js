import React from "react";
import Current from "./components/hero/Current";
import Hero from "./components/hero/Hero";
import Services from "./components/hero/services/Services";

import Nav from "./components/navbar/Nav";

const App = () => {
  return (
    <>
      <Nav />

      <Hero />
      <Current />
      <Services />
    </>
  );
};

export default App;
