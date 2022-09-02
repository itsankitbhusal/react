import {
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Text,
  VStack,
  WrapItem,
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
            <Heading as="h1" size="4xl" alignSelf="flex-start" noOfLines={2}>
              Hi! I Am{" "}
              <Heading as="h1" size="4xl" color="green.400">
                Ankit{" "}
                <Text as="span" size="4xl" color="white">
                  Bhusal
                </Text>
              </Heading>
            </Heading>
            <WrapItem
              //   alignSelf="flex-start"
              flexWrap={"wrap"}
              gap={4}
              alignSelf={["center", "center", "flex-start", "flex-start"]}
            >
              <Button size="lg" gap={2}>
                <FiPhone />
                Contact Me
              </Button>
              <Button size="lg" gap={2}>
                <FiDownload />
                Download CV
              </Button>
            </WrapItem>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Hero;
