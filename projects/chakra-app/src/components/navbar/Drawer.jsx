import React from "react";
import {
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  HStack,
  Button,
} from "@chakra-ui/react";

const Drawer = () => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerCloseButton />
          <DrawerHeader>Menu List</DrawerHeader>

          <DrawerBody>
            <HStack gap={2} display={["none", "none", "flex", "flex"]}>
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>

              <Button variant="ghost">Contact</Button>
            </HStack>
          </DrawerBody>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Drawer;
