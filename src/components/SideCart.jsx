import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useToast,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SideCartList from "./SideCartList";
import { setLoader } from "../features/loaderSlice";
import {
  emptyCart,
  onChangeInput,
  emptyTableNumber,
  updateTableNumber,
} from "../features/orderSlice";
import getCookie from "../hooks/getCookie";

const SideCart = () => {
  const { cartItem, tableNumber } = useSelector((state) => state.order);
  const toast = useToast();
  const dispatch = useDispatch();
  const handleOrder = async () => {
    dispatch(setLoader());
    try {
      const adminid = getCookie("id");
      const body = cartItem.map((item) => {
        return {
          price: item.price,
          food_name: item.food_name,
          quantity: item.quantity,
          description: item.description,
          table_number: Number(tableNumber),
          isCompleted: item.isCompleted,
          adminid,
        };
      });
      const response = await fetch("http://localhost:5500/order/placeorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        dispatch(emptyTableNumber());
        dispatch(emptyCart());
        toast({
          title: "Ordered Sucessfully.",
          description: "Sucessfully placed the order.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        dispatch(setLoader());
      } else {
        throw new Error("Cannot place the order.");
      }
    } catch (error) {
      dispatch(setLoader());
      toast({
        title: "Ordered Unsucessfully.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Box
      h={"30rem"}
      w={"30rem"}
      bg={"gray.100"}
      borderRadius={"2rem"}
      p={"2rem"}
      position={"fixed"}
      top={200}
      // left={0}
    >
      <Flex align={"center"} justify={"space-between"}>
        <Heading fontSize={"2rem"}>Your Order</Heading>
        <Flex align={"center"} gap={"0.8rem"}>
          <Text>Table No.</Text>
          <NumberInput
            // position={"static"}
            value={tableNumber}
            onInput={(e) => {
              dispatch(onChangeInput({ value: e.target.value }));
            }}
          >
            <NumberInputField bg={"#fff"} width={"5rem"} />
            <NumberInputStepper>
              <NumberIncrementStepper
                onClick={() => dispatch(updateTableNumber(true))}
              />
              <NumberDecrementStepper
                onClick={() => dispatch(updateTableNumber(false))}
              />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
      </Flex>
      <Box h={"100%"} w={"100%"} pt={"1rem"}>
        <Box>
          {cartItem.length ? (
            <VStack align={"stretch"}>
              <Flex
                mb={"0.5rem"}
                fontSize={"0.8rem"}
                align={"center"}
                justify={"space-between"}
                px={"2rem"}
              >
                <Box>
                  <Text>Name</Text>
                </Box>
                <Box>
                  <Text>Price</Text>
                </Box>
                <Box>
                  <Text>Quantity</Text>
                </Box>
              </Flex>
              <VStack
                spacing={"1rem"}
                bg={"#fff"}
                h={"17rem"}
                p={"1rem"}
                borderRadius={"1rem"}
                overflowY={"auto"}
                divider={<StackDivider borderColor="gray.200" />}
              >
                {cartItem.map((item) => {
                  return <SideCartList key={item.id} {...item} />;
                })}
              </VStack>

              <Button
                bg={"#eea551"}
                _hover={{ bg: "#f3b772" }}
                onClick={handleOrder}
              >
                Order
              </Button>
            </VStack>
          ) : (
            <Image src="/img/empty-box.png" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SideCart;
