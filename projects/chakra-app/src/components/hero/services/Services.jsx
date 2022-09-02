import { Container, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import ServiceCard from "./ServiceCard";
import { CgWebsite } from "react-icons/cg";

const Services = () => {
  return (
    <>
      <Container maxW="100%">
        <Flex>
          <Stack>
            <ServiceCard name="Developer" icon={<CgWebsite />} />
            <ServiceCard name="Ui/Ux" icon={<CgWebsite />} />
            <ServiceCard name="Design" icon={<CgWebsite />} />
          </Stack>

          <Heading>My awesome services</Heading>
        </Flex>
      </Container>
    </>
  );
};

export default Services;
