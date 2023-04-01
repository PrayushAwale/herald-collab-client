import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { addIntoCart, amount } from "../features/orderSlice";
import { useDispatch, useSelector } from "react-redux";

const OrderList = ({ food_name, price, id }) => {
  const priceInt = price;
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.order);
  return (
    <Flex
      gap={"2rem"}
      p={"1rem 2rem"}
      cursor={"pointer"}
      _hover={{ bg: "gray.100" }}
      borderRadius={"0.5rem"}
      onClick={() => {
        if (cartItem.some((item) => item.id == id)) {
          dispatch(amount(id));
          return;
        }
        dispatch(
          addIntoCart({
            food_name: food_name,
            price: price,
            id,
            quantity: 1,
            table_number: 1,
            description: "Empty For Now",
            isCompleted: false,
          })
        );
      }}
    >
      <Box w={"20rem"}>
        <Text>{food_name}</Text>
      </Box>
      <Box>
        <Text>{price}</Text>
      </Box>
    </Flex>
  );
};

export default OrderList;
