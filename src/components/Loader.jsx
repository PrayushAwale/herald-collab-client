import React from "react";
import { Center, Spinner, Text, VStack } from "@chakra-ui/react";
const Loader = () => {
  return (
    <Center
      h={"100vh"}
      w={"100%"}
      bg={"rgba(255,255,255,0.8)"}
      position={"absolute"}
      top={0}
      left={0}
      zIndex={3}
    >
      <VStack>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text>Loading Please Wait...</Text>
      </VStack>
    </Center>
  );
};

export default Loader;
