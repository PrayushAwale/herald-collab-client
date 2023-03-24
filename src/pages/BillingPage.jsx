import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import CookOrderList from "../components/CookOrderList";
import { useQuery } from "react-query";
import SkeletonLoader from "../components/SkeletonLoader";

const BillingPage = () => {
  const getFacts = async () => {
    const res = await fetch("http://localhost:5500/order/getBilling");
    return res.json();
  };

  const { data, error, isLoading } = useQuery("randomFacts", getFacts);
  return (
    <Box h={"100vh"} bg={"#fff"}>
      <Box p={"2rem 5rem"}>
        <Heading>Bills</Heading>
      </Box>
      <Box p={"2rem 2.5rem"} w={"78rem"}>
        <Flex align={"center"} p={"0 1rem"} w={"100%"}>
          <Text w={"33rem"}>Food Name</Text>
          <Flex justify={"space-between"} w={"100%"}>
            <Text>Quantity</Text>
            <Text>Table Number</Text>
            <Text>Status</Text>
          </Flex>
        </Flex>
        {data &&
          data.orders.map((order) => {
            return <CookOrderList key={order.id} {...order} />;
          })}
        {isLoading && <SkeletonLoader />}
      </Box>
    </Box>
  );
};

export default BillingPage;
