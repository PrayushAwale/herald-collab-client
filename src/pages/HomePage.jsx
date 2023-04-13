import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Chart from "../components/Chart";
import Profile from "../components/Profile";

const HomePage = () => {
  return (
    <Box h={"100vh"} w={"100%"} px={"2rem"}>
      <Flex
        p={"2rem 3rem"}
        align={"center"}
        justify={"space-between"}
        borderBottom={"2px solid"}
        borderColor={"gray.200"}
      >
        <Heading>Dashboard</Heading>
        <Profile />
      </Flex>
      <Chart />
    </Box>
  );
};

export default HomePage;
