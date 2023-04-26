import { Flex, IconButton, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { queryClient } from "../App";
import { useDispatch } from "react-redux";
import { setLoader } from "../features/loaderSlice";

const FoodItemList = ({ food_name, category, price, id }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoader());
      const response = await fetch(
        `http://localhost:5500/employee/deletefooditem/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        dispatch(setLoader());
        queryClient.invalidateQueries("getFoodItems");
        toast({
          title: "Deleted Sucessfully.",
          description: "Sucessfully deleted the food item",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        return;
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <SimpleGrid
      columns={3}
      spacing={5}
      p={"2rem 2rem"}
      bg={"gray.100"}
      cursor={"pointer"}
      borderRadius={"1rem"}
    >
      <Text>{food_name}</Text>
      <Text>{price}</Text>
      <Flex justify={"space-between"} align={"center"}>
        <Text>{category}</Text>
        <IconButton icon={<AiOutlineDelete />} onClick={handleClick} />
      </Flex>
    </SimpleGrid>
  );
};

export default FoodItemList;
