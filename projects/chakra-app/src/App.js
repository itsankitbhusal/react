// import { Drawer } from "@chakra-ui/react";
import React from "react";
import Current from "./components/hero/Current";
import Hero from "./components/hero/Hero";

import Nav from "./components/navbar/Nav";

const App = () => {
  return (
    <>
      <Nav />

      <Hero />
      <Current />
    </>
  );
};

export default App;
