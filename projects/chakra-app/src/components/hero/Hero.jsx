import {
  Button,
  Container,
  Flex,
  Heading,
  Img,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Image from "../../assets/image/model.png";
import { FiPhone, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <Container maxW="100vw" my={4}>
        <Flex align="center" justify="center" gap={4}>
          <VStack w="50vw" display={["none", "none", "flex", "flex"]}>
            <Img src={Image}></Img>
          </VStack>
          <VStack w="50vw" gap={4}>
            <Heading as="h1" size="4xl" noOfLines={2}>
              Welcome to my portfolio site
            </Heading>
            <Flex alignSelf="flex-start" gap={4}>
              <Button size="lg" gap={2}>
                <FiPhone />
                Contact Me
              </Button>
              <Button size="lg" gap={2}>
                <FiDownload />
                Download CV
              </Button>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Hero;
