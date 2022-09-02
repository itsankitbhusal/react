import React from "react";
import {
  Stack,
  IconButton,
  HStack,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";

const ServiceCard = ({ name, icon }) => {
  return (
    <>
      <Flex width="25vw">
        <HStack>
          <IconButton alignSelf="flex-start" icon={icon} />
          <VStack>
            <Text as="h2" fontWeight="bold" alignSelf="flex-start">
              {name}
            </Text>
            <Text fontSize=".7rem" fontWeight="normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              non. Laboriosam eos quos obcaecati adipisci voluptatibus
              provident.
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </>
  );
};

export default ServiceCard;
