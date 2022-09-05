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
          gap={4}
          flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
        >
          <VStack
            w={["100vw", "100vw", "30vw", "30vw"]}
            // display={["none", "none", "flex", "flex"]}
          >
            <Img src={Image} objectFit="cover"></Img>
          </VStack>
          <VStack
            w={["100vw", "100vw", "70vw", "70vw"]}
            marginTop={["-5rem", "-5rem", "0", "0"]}
            gap={4}
          >
            <Heading
              // align={["center", "center", "auto", "auto"]}
              align="center"
              as="h1"
              // size="4xl"
              fontSize={["2em", "5em", "5em", "5em"]}
            >
              Hi! I Am{" "}
              <Heading as="h1" fontSize={"1.5em"} color="green.400">
                Ankit Bhusal
              </Heading>
            </Heading>
            <WrapItem
              //   alignSelf="flex-start"
              flexWrap={"wrap"}
              gap={4}
              // alignSelf={["center", "center", "flex-start", "flex-start"]}
              alignSelf="center"
              justifyContent="center"
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
