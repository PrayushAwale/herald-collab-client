import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import getCookie from "../hooks/getCookie";

const CardEmployee = () => {
  const getTotalEmployees = async () => {
    const id = getCookie("id");
    const res = await fetch(`http://localhost:5500/getTotalEmployees/${id}`);
    return res.json();
  };
  const { data, error, isLoading } = useQuery(
    "getTotalEmployees",
    getTotalEmployees
  );
  console.log(data?.data);
  return (
    <Box bg={"gray.100"} p={"2rem"} borderRadius={"1rem"} flex={1}>
      <Text color={"gray.600"}>Total Numbers of Employees</Text>
      <Heading color={"gray.600"}>{data ? data?.data : 0}</Heading>
    </Box>
  );
};

export default CardEmployee;
