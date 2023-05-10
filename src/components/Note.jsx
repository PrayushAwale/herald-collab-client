import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Note = () => {
  return (
    <Box>
      <Text textAlign={"center"} color={"gray.500"} fontSize={"0.8rem"}>
        Made by Prayush Awale, Rohan Shrestha, Garima Phuyal, and Hemant Bam.
      </Text>
      <Text textAlign={"center"} color={"gray.500"} fontSize={"0.8rem"}>
        Copyright © 2023 - 2023
      </Text>
    </Box>
  );
};

export default Note;
