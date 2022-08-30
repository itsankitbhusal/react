import {
  Flex,
  Heading,
  HStack,
  Button,
  Box,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

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
          <HStack gap={2} display={["none", "none", "flex", "flex"]}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>

            <Button variant="ghost">Contact</Button>
          </HStack>
          <HStack display={["none", "none", "flex", "flex"]}>
            <Box mx={4} _hover={{ color: "gray", cursor: "pointer" }}>
              <MdOutlineDarkMode
                size="1.5rem"
                my={4}
                onClick={toggleColorMode}
              />
            </Box>
            <Button>Get Started</Button>
          </HStack>

          <Flex align="center" display={["flex", "flex", "none", "none"]}>
            <Box mx={4} _hover={{ color: "gray", cursor: "pointer" }}>
              <MdOutlineDarkMode
                size="1.5rem"
                my={4}
                onClick={toggleColorMode}
              />
            </Box>
            <IconButton
              aria-label="Open Menu"
              size="lg"
              mr={2}
              icon={<GiHamburgerMenu />}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
