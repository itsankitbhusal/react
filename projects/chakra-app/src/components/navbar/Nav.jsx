import {
  Flex,
  Heading,
  HStack,
  Button,
  Box,
  useColorMode,
  IconButton,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  DrawerContent,
  DrawerFooter,
} from "@chakra-ui/react";

import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./Drawer";

const Nav = () => {
  const { toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box w="100%" fontWeight="bold" align="center" boxShadow="lg">
        <Flex align="center" p={4} justify="space-between" maxW="90vw">
          {/* Logo section */}
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

          {/* Main Links  */}
          <HStack gap={2} display={["none", "none", "flex", "flex"]}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>

            <Button variant="ghost">Contact</Button>
          </HStack>

          {/* toggle color mode */}
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

          {/* navbar on mobile */}
          <Flex align="center" display={["flex", "flex", "none", "none"]}>
            <Box mx={4} _hover={{ color: "gray", cursor: "pointer" }}>
              <MdOutlineDarkMode
                size="1.5rem"
                my={4}
                onClick={toggleColorMode}
              />
            </Box>

            {/* hamburger icon */}
            <IconButton
              ref={btnRef}
              icon={<GiHamburgerMenu />}
              onClick={onOpen}
              // ref={btnRef}
            />

            {/* Drawer Starts */}
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu List</DrawerHeader>

                <DrawerBody>
                  <HStack gap={2} display={["none", "none", "flex", "flex"]}>
                    <Button variant="ghost">Home</Button>
                    <Button variant="ghost">About</Button>
                    <Button variant="ghost">Contact</Button>
                  </HStack>
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
