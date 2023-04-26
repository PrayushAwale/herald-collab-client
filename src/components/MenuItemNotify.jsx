import { Flex, MenuItem, Text } from "@chakra-ui/react";
import React from "react";

const MenuItemNotify = ({ food_name, table_number, id, isServed }) => {
  const handleCheck = async () => {
    try {
      const body = {
        id,
        isServed: !isServed,
      };
      const response = await fetch("http://localhost:5500/order/updateserve", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <MenuItem onClick={handleCheck}>
      <Flex direction={"column"}>
        <Text fontWeight={900}>Completed {food_name}</Text>
        <Text>Dish ready for table {table_number}.</Text>
      </Flex>
    </MenuItem>
  );
};

export default MenuItemNotify;
