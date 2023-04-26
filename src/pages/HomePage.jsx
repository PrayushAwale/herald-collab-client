import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Chart from "../components/Chart";
import Profile from "../components/Profile";
import CardEmployee from "../components/CardEmployee";
import CardFoodItem from "../components/CardFoodItem";

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
      <Text fontSize={"2rem"} p={"0.5rem 2rem"}>
        Hello, Rohan!
      </Text>
      <Flex
        align={"center"}
        // justify={"space-between"}
        p={"2rem 1rem"}
        gap={"1rem"}
      >
        <CardEmployee />
        <CardFoodItem />
      </Flex>
      <Chart />
    </Box>
  );
};

export default HomePage;
