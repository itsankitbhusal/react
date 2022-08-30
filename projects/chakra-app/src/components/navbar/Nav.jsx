import {
  Text,
  Flex,
  Heading,
  HStack,
  Button,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const Nav = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Box w="100%" fontWeight="bold" align="center" boxShadow="lg">
        <Flex align="center" p={4} justify="space-between" maxW="90vw">
          <HStack>
            <Heading
              _hover={{
                color: "gray",
                cursor: "pointer",
              }}
            >
              Logo
            </Heading>
          </HStack>
          <HStack gap={2}>
            <Text _hover={{ color: "gray", cursor: "pointer" }}>Home</Text>
            <Text _hover={{ color: "gray", cursor: "pointer" }}>Features</Text>
            <Text _hover={{ color: "gray", cursor: "pointer" }}>About</Text>
            <Text _hover={{ color: "gray", cursor: "pointer" }}>Contact</Text>
          </HStack>

          <HStack>
            <Box mx={4} _hover={{ color: "gray", cursor: "pointer" }}>
              <MdOutlineDarkMode
                size="1.5rem"
                my={4}
                onClick={toggleColorMode}
              />
            </Box>
            <Button>Get Started</Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
