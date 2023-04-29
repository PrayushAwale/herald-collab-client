import { Flex, IconButton, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { queryClient } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../features/loaderSlice";

import ModalFoodItem from "./ModalFoodItem";

const FoodItemList = ({ food_name, category, price, id }) => {
  const [isActive, setIsActive] = useState(false);
  const alterIsActive = (value) => {
    setIsActive(value);
  };
  const dispatch = useDispatch();
  const toast = useToast();

  const handleModal = (e) => {
    setIsActive(!isActive);
    e.stopPropagation();
  };

  const handleClickDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
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
      onClick={handleModal}
      alignItems={"center"}
    >
      <Text>{food_name}</Text>
      <Text>{price}</Text>
      <Flex justify={"space-between"} align={"center"}>
        <Text>{category}</Text>
        <IconButton icon={<AiOutlineDelete />} onClick={handleClickDelete} />
      </Flex>
      {isActive && (
        <ModalFoodItem
          id={id}
          food_name={food_name}
          price={price}
          category={category}
          isActive={isActive}
          alterIsActive={alterIsActive}
        />
      )}
    </SimpleGrid>
  );
};

export default FoodItemList;
