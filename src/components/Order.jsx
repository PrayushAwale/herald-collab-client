import {
  Box,
  VStack,
  Heading,
  Flex,
  Link,
  Divider,
  StackDivider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import OrderList from "./OrderList";
import SideCart from "./SideCart";
import SearchandHeader from "./SearchandHeader";
import { useSelector } from "react-redux";
import getCookie from "../hooks/getCookie";
import { useQuery } from "react-query";

const Order = () => {
  const [category, setCategory] = useState("");

  const getOrders = async () => {
    const id = getCookie("id");
    const res = await fetch(
      `http://localhost:5500/fooditem/getFoodItems/${id}`
    );
    return await res.json();
  };

  const { data, error, isLoading } = useQuery("key", getOrders);

  //Getting the Global State value stored in searched
  const { searched } = useSelector((state) => state.filter);
  // A custom styles variable for category link
  const categoryLink = {
    bg: "black",
    color: "white",
    p: "0.5rem 2rem",
    borderRadius: "5rem",
  };
  const activeLink = {
    border: "2.5px black solid",
    color: "black",
    p: "0.5rem 2rem",
    borderRadius: "5rem",
  };

  return (
    <Box w={"100%"} px={"2rem"} position={"relative"}>
      <Box bg={"red"} w={"100%"} position={"sticky"} top={0} zIndex={1}>
        <SearchandHeader />
      </Box>
      <Box as="section" h={"100vh"} w={"100%"} bg={"#fff"}>
        <Heading mb={"1rem"}>Categories</Heading>
        <Flex align={"center"} gap={"1rem"} mb={"0.8rem"}>
          <Link
            sx={!category ? categoryLink : activeLink}
            onClick={() => setCategory("")}
          >
            All
          </Link>
          <Link
            sx={category === "dinner" ? categoryLink : activeLink}
            onClick={() => setCategory("dinner")}
          >
            Dinner
          </Link>
          <Link
            sx={category === "quick" ? categoryLink : activeLink}
            onClick={() => setCategory("quick")}
          >
            Quick
          </Link>
        </Flex>
        <Divider orientation="horizontal" />
        <Flex mt={"0.8rem"} gap={"2rem"}>
          <VStack
            w={"43rem"}
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align={"stretch"}
          >
            {/* Appling the filter to search the food item from the list  */}

            {isLoading === false &&
              data &&
              data.data
                .filter((item) =>
                  item?.food_name
                    ?.toLowerCase()
                    ?.includes(searched.toLowerCase())
                )
                .filter((item) => {
                  if (category) {
                    return item.category === category;
                  }
                  return item;
                })
                .map((item) => <OrderList key={item.id} {...item} />)}
          </VStack>
          <Box
            position={"relative"}
            display={["none", "none", "none", "inline-block"]}
            bg={"red"}
          >
            <SideCart />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Order;
