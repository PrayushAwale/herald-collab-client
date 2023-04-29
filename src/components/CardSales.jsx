import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import getCookie from "../hooks/getCookie";
import { useQuery } from "react-query";

const CardSales = () => {
  const getTotalFoodItems = async () => {
    const id = getCookie("id");
    const res = await fetch(`http://localhost:5500/getTotalSales/${id}`);
    return res.json();
  };
  const { data, error, isLoading } = useQuery(
    "getTotalFoodItems",
    getTotalFoodItems
  );

  return (
    <Box bg={"gray.100"} p={"2rem"} borderRadius={"1rem"} flex={1}>
      <Text color={"gray.600"}>Total Numbers Sales</Text>
      <Heading color={"gray.600"}>{data ? data?.data : 0}</Heading>
    </Box>
  );
};

export default CardSales;
