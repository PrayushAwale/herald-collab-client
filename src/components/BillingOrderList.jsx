import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../features/loaderSlice";

const BillingOrderList = ({
  food_name,
  price,
  isCompleted,
  isBilled,
  table_number,
  id,
  quantity,
  timestamp,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleUpdate = async () => {
    try {
      dispatch(setLoader());
      const body = {
        id,
        isBilled: !isBilled,
      };
      const response = await fetch("http://localhost:5500/order/createBill", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(setLoader());
        return;
      }
    } catch (err) {
      dispatch(setLoader());
      console.error(err);
      toast({
        title: "Unable to Creat Bill",
        description: "There was some problem while creating bill",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Box
      p={"2rem 1rem"}
      bg={"gray.100"}
      w={"100%"}
      mt={"1rem"}
      _hover={{ bg: "gray.200" }}
      borderRadius={"0.5rem"}
      cursor={"pointer"}
      onClick={handleUpdate}
    >
      <Flex align={"center"} p={"0 1rem"} w={"100%"}>
        <Text w={"33rem"}>{food_name}</Text>
        <Flex justify={"space-between"} w={"100%"}>
          <Text>{quantity}</Text>
          <Text> {table_number} </Text>
          <Text
            p={"0.1rem 0.8rem"}
            bg={isCompleted ? "green" : "red.500"}
            color={"#fff"}
            borderRadius={"1rem"}
          >
            {" "}
            {isCompleted ? "Completed" : "Incomplete"}{" "}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BillingOrderList;
