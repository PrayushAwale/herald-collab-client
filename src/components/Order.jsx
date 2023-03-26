import {
  Box,
  VStack,
  Heading,
  Flex,
  Link,
  Divider,
  StackDivider,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { data } from "../data";
import OrderList from "./OrderList";
import SideCart from "./SideCart";
import SearchandHeader from "./SearchandHeader";
import { useSelector } from "react-redux";

const Order = () => {
  const { searched } = useSelector((state) => state.filter);
  const categoryLink = {
    bg: "black",
    color: "white",
    p: "0.5rem 2rem",
    borderRadius: "5rem",
  };
  return (
    <Box w={"100%"} px={"2rem"} position={"relative"} pt={"7rem"}>
      <SearchandHeader />
      <Box as="section" h={"100vh"} w={"100%"} bg={"#fff"}>
        <Heading mb={"1rem"}>Categories</Heading>
        <Flex align={"center"} gap={"1rem"} mb={"0.8rem"}>
          <Link sx={categoryLink}>All</Link>
          <Link sx={categoryLink}>Breakfast</Link>
          <Link sx={categoryLink}>Dinner</Link>
          <Link sx={categoryLink}>Quick</Link>
        </Flex>
        <Divider orientation="horizontal" />
        <Flex mt={"0.8rem"} gap={"2rem"}>
          <VStack
            w={"43rem"}
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align={"stretch"}
          >
            {data
              .filter((item) => item.item_name.toLowerCase().includes(searched))
              .map((item) => (
                <OrderList key={item.id} {...item} />
              ))}
          </VStack>
          <Box position={"relative"}>
            <SideCart />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Order;
