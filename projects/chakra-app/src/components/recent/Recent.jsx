import { Container, Flex, Heading, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";
import RecentCard from "./RecentCard";

const Recent = () => {
  const [img, setImg] = useState({});

  const fetchData = async () => {
    const url = "https://picsum.photos/list";
    const res = await fetch(url);
    const data = await res.json();
    if (data) {
      setImg(data.slice(0, 9));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container maxW="100%" my="10rem">
      <VStack justify="center">
        <Heading size="4xl">Recent projects</Heading>
        <Flex py="2rem">
          <Container maxW="100%">
            <Flex flexWrap="wrap" justify="center" gap="1.5rem">
              {/* {img.map((data) => {
                console.log(data.post_url);
              })} */}
            </Flex>
          </Container>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Recent;
