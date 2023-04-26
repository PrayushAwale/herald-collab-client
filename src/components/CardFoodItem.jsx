import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import getCookie from "../hooks/getCookie";
import { useQuery } from "react-query";

const CardFoodItem = () => {
  const getTotalFoodItems = async () => {
    const id = getCookie("id");
    const res = await fetch(`http://localhost:5500/getTotalFoodItems/${id}`);
    return res.json();
  };
  const { data, error, isLoading } = useQuery(
    "getTotalFoodItems",
    getTotalFoodItems
  );
  console.log("This is the Data", data?.data);
  return (
    <Box bg={"gray.100"} p={"2rem"} borderRadius={"1rem"} flex={1}>
      <Text color={"gray.600"}>Total Numbers Food Items</Text>
      <Heading color={"gray.600"}>{data ? data?.data : 0}</Heading>
    </Box>
  );
};

export default CardFoodItem;
