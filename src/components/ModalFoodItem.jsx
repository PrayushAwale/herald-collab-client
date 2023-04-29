import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Select,
  SimpleGrid,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setModalItem } from "../features/modalSlice";
import { GrClose } from "react-icons/gr";
import getCookie from "../hooks/getCookie";
import { setLoader } from "../features/loaderSlice";
import { queryClient } from "../App";

const ModalFoodItem = ({
  food_name,
  price,
  id,
  category,
  alterIsActive,
  isActive,
}) => {
  const dispatch = useDispatch();
  const food_nameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const adminid = getCookie("id");
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoader());
      const body = {
        id,
        food_name: food_nameRef.current.value,
        category: categoryRef.current.value.toLowerCase(),
        price: parseFloat(priceRef.current.value),
        ingredients: "null",
        isTrending: false,
        imgSrc: "null",
        adminid: adminid,
      };
      console.log(body);
      const response = await fetch(
        "http://localhost:5500/fooditem/updateFoodItem",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.ok) {
        dispatch(setLoader());
        alterIsActive(!isActive);
        queryClient.invalidateQueries("getFoodItems");
        toast({
          title: "Added Sucessfully.",
          description: "Sucessfully Added new employee.",
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
    <Center
      h={"100%"}
      w={"100%"}
      bg={"rgba(255,255,255,0.8)"}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={3}
      onClick={(e) => {
        e.stopPropagation();
        alterIsActive(!isActive);
      }}
    >
      <Box
        pos={"relative"}
        bg={"gray.100"}
        p={"2rem 3rem"}
        borderRadius={"1rem"}
        boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}
        onClick={(e) => e.stopPropagation()}
      >
        <Heading>Edit Food Items</Heading>
        <FormControl my={"1rem"}>
          <VStack align={"stretch"}>
            <Box>
              <FormLabel htmlFor="employeeName">Food Name</FormLabel>
              <Input
                type="text"
                bg={"#fff"}
                borderColor={"gray.300"}
                placeholder="Enter food name"
                id="employeeName"
                ref={food_nameRef}
                defaultValue={food_name}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="employeeName">Price</FormLabel>
              <Input
                type="text"
                bg={"#fff"}
                borderColor={"gray.300"}
                placeholder="Enter the price"
                id="employeeName"
                ref={priceRef}
                defaultValue={price}
              />
            </Box>

            <Box>
              <FormLabel htmlFor="employeeName">Category</FormLabel>
              <Select
                placeholder="Select option"
                ref={categoryRef}
                defaultValue={category}
              >
                <option value="quick">Quick</option>
                <option value="dinner">Dinner</option>
                <option value="breakfast">Breakfast</option>
              </Select>
            </Box>
          </VStack>

          <Button
            mt={"1rem"}
            bg={"#eea551"}
            color={"#000"}
            _hover={{ bg: "#f3b772" }}
            boxShadow={"0px 5px 10px -3px rgba(0,0,0,0.1)"}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </FormControl>
        <Icon
          as={GrClose}
          cursor={"pointer"}
          pos={"absolute"}
          top={"1rem"}
          right={"1rem"}
          onClick={() => {
            alterIsActive(!isActive);
          }}
        />
      </Box>
    </Center>
  );
};

export default ModalFoodItem;
