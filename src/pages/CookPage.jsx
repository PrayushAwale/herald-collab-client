import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import CookOrderList from "../components/CookOrderList";
import { useQuery } from "react-query";
import SkeletonLoader from "../components/SkeletonLoader";
import Profile from "../components/Profile";
import getCookie from "../hooks/getCookie";

const CookPage = () => {
  const id = getCookie("id");
  const getFacts = async () => {
    const res = await fetch(`http://localhost:5500/order/getorder/${id}`);
    return res.json();
  };
  const { data, error, isLoading } = useQuery("randomFacts", getFacts, {
    // Refetch the data every 1 second = 1000 ms
    refetchInterval: 1000,
  });

  return (
    <Box h={"100vh"} bg={"#fff"}>
      <Flex
        p={"2rem 5rem"}
        w={"100%"}
        align={"center"}
        justify={"space-between"}
      >
        <Heading>The Cook</Heading>
        <Profile />
      </Flex>
      <Box p={"2rem 2.5rem"} w={"78rem"}>
        <Flex
          align={"center"}
          p={"0 1rem"}
          w={"100%"}
          borderBottom={"2px solid"}
          pb={"1rem"}
          borderColor={"gray.200"}
        >
          <Text w={"33rem"}>Food Name</Text>
          <Flex justify={"space-between"} w={"100%"}>
            <Text>Quantity</Text>
            <Text>Table Number</Text>
            <Text>Status</Text>
          </Flex>
        </Flex>
        {isLoading && <SkeletonLoader />}
        {data &&
          data.data.map((order) => {
            return <CookOrderList key={order.id} {...order} />;
          })}
      </Box>
    </Box>
  );
};

export default CookPage;
