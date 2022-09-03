import {
  Button,
  Container,
  Flex,
  Heading,
  Img,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import Image from "../../assets/image/model.png";
import { FiPhone, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <Container maxW="100vw" my={4} alignItems="center">
        <Flex
          height={["auto", "auto", "50vh", "75vh"]}
          align="center"
          justify="center"
          gap={4}
        >
          <VStack w="50vw" display={["none", "none", "flex", "flex"]}>
            <Img src={Image} width="full"></Img>
          </VStack>
          <VStack w="50vw" gap={4}>
            <Heading
              as="h1"
              // size="4xl"
              fontSize={"6em"}
              alignSelf="flex-start"
              noOfLines={2}
            >
              Hi! I Am{" "}
              <Heading
                as="h1"
                // size="4xl"
                fontSize={"1em"}
                color="green.400"
              >
                Ankit Bhusal
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
