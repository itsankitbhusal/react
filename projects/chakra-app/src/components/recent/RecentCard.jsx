import { Img } from "@chakra-ui/react";
import React from "react";

const RecentCard = ({ image, key }) => {
  return (
    <Img
      key={key}
      src={image}
      borderRadius="4px"
      _hover={{
        boxShadow: "0 0 30px  #2f524d",
        transition: ".3s all",
      }}
    />
  );
};

export default RecentCard;
