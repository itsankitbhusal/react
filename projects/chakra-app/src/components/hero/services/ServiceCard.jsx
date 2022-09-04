import React from "react";
import { IconButton, HStack, Text, VStack, Flex } from "@chakra-ui/react";

const ServiceCard = ({ name, icon }) => {
  return (
    <>
      <Flex
        border="2px"
        borderRadius="md"
        borderColor="gray.100"
        width="25vw"
        p={2}
        _hover={{
          backgroundColor: "gray.100",
          cursor: "pointer",
          color: "black",
          transition: ".3s all",
        }}
      >
        <HStack>
          <IconButton
            p="3rem"
            fontSize="3.5rem"
            variant="ghost"
            alignSelf="flex-start"
            icon={icon}
            color="green.400"
          />
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
