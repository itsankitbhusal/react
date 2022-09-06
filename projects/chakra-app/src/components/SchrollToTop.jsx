import { Box, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaAngleUp } from "react-icons/fa";

const SchrollToTop = () => {
  return (
    <Box pos="fixed" right="1rem" bottom="1rem">
      <Flex>
        <IconButton borderRadius="100%" icon={<FaAngleUp />} />
      </Flex>
    </Box>
  );
};

export default SchrollToTop;
