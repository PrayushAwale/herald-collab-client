import { Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const UnauthorizedPage = () => {
  return (
    <Center h={"100vh"}>
      <Flex direction={"column"} align={"center"}>
        <Image src="/forbidden.png" />
        <Heading color={"#5b648b"}>Access Denied</Heading>
        <Text color={"#98a5bb"}>You donot have access to this page!</Text>
      </Flex>
    </Center>
  );
};

export default UnauthorizedPage;
