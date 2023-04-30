import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CardSales = ({ dataLength }) => {
  return (
    <Box bg={"gray.100"} p={"2rem"} borderRadius={"1rem"} flex={1}>
      <Text color={"gray.600"}>Total Numbers Sales</Text>
      <Heading color={"gray.600"}>
        {dataLength ? dataLength?.length : 0}
      </Heading>
    </Box>
  );
};

export default CardSales;
