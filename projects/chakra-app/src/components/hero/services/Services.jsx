import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ServiceCard from "./ServiceCard";
import { CgWebsite } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { DiPhotoshop } from "react-icons/di";
import { FiDownload } from "react-icons/fi";

const Services = () => {
  return (
    <>
      <Container my="2rem" maxW={["100%", "100%", "70%", "70%"]}>
        <Flex
          align="center"
          flexWrap={["wrap-reverse", "wrap-reverse", "nowrap", "nowrap"]}
          gap="2rem"
        >
          <Stack>
            <ServiceCard name="Website Development" icon={<CgWebsite />} />
            <ServiceCard name="Ui/Ux Design" icon={<FiFigma />} />
            <ServiceCard name="Graphics Design" icon={<DiPhotoshop />} />
          </Stack>

          <VStack>
            <Heading as="h1" size="4xl" alignSelf="flex-start">
              My awesome{" "}
              <Text as="span" color="green.400">
                services
              </Text>
            </Heading>
            <Box alignSelf="flex-start" py={4}>
              <Text py={1}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                laudantium ab molestiae soluta aut dignissimos?
              </Text>
              <Text py={1}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                laudantium ab molestiae, soluta aut dignissimos? Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Ipsum dicta facere
                eos neque consequatur. Alias, quibusdam nobis repellat minima,
                tenetur voluptas, aliquid eos expedita earum molestias natus
                commodi cum nisi?
              </Text>
            </Box>
            <Button size="lg" gap={2} alignSelf="flex-start">
              <FiDownload />
              Download CV
            </Button>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Services;
