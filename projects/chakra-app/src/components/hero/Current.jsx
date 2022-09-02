import { Flex, Container, Heading } from "@chakra-ui/react";
import { SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import React from "react";

const Current = () => {
  return (
    <Container
      bg="green.400"
      maxW={["auto", "90vw", "90vw", "90vw"]}
      height={["25vh", "10vh", "10vh", "10vh"]}
    >
      <Flex
        align="center"
        gap={4}
        height="inherit"
        justify={["center", "space-between", "space-between", "space-between"]}
        flexWrap={["wrap", "wrap", "auto", "auto"]}
      >
        <Heading fontSize="4xl" fontWeight="bold">
          My Stack
        </Heading>
        <Flex gap={8}>
          <GrMysql size="2rem" />
          <SiExpress size="2rem" />
          <SiReact size="2rem" />
          <SiNodedotjs size="2rem" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Current;
