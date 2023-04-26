import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CardFoodItem = () => {
  return (
    <Box bg={"gray.100"} p={"2rem"} borderRadius={"1rem"} flex={1}>
      <Text color={"gray.600"}>Total Numbers Food Items</Text>
      <Heading color={"gray.600"}>0</Heading>
    </Box>
  );
};

export default CardFoodItem;
