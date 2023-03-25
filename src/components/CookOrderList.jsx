import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CookOrderList = ({
  food_name,
  price,
  isCompleted,
  table_number,
  id,
  quantity,
}) => {
  const handleUpdate = async () => {
    try {
      const body = {
        id,
        isCompleted: !isCompleted,
      };
      const response = await fetch("http://localhost:5500/order/updateorder", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
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
          <Text> {isCompleted ? "Completed" : "Incomplete"} </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CookOrderList;
