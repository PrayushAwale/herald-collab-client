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
import { useSelector } from "react-redux";
import SideCartList from "./SideCartList";

const SideCart = () => {
  const { cartItem, table_number } = useSelector((state) => state.order);
  let isFirstTime = true;
  const toast = useToast();
  const handleOrder = async () => {
    try {
      cartItem.forEach((item) => {
        const body = {
          description: "I like MOMO",
          food_item: item.item_name,
          quantity: item.amount,
          price: item.priceInt,
          table_number: 11,
        };
        const fetcher = async () => {
          const response = await fetch("http://localhost:8800/placeorder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          if (response.ok && isFirstTime) {
            toast({
              title: "Ordered Sucessfully.",
              description: "Sucessfully placed the order.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            isFirstTime = !isFirstTime;
          } else {
            throw new Error("Cannot place the order.");
          }
        };
        fetcher();
      });
    } catch (error) {
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
    >
      <Flex align={"center"} justify={"space-between"}>
        <Heading fontSize={"2rem"}>Your Order</Heading>
        <Flex align={"center"} gap={"0.8rem"}>
          <Text>Table No.</Text>
          <NumberInput
            value={table_number}
            onInput={(e) => {
              dispatch(onChangeInput({ id, value: e.target.value }));
            }}
          >
            <NumberInputField bg={"#fff"} width={"5rem"} />
            <NumberInputStepper>
              <NumberIncrementStepper
              // onClick={() => dispatch(updateAmount({ id, increment: true }))}
              />
              <NumberDecrementStepper
              // onClick={() => dispatch(updateAmount({ id, increment: false }))}
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
                bg={"#fdb78b"}
                _hover={{ bg: "#ffd0b4" }}
                onClick={handleOrder}
              >
                Order
              </Button>
            </VStack>
          ) : (
            <Image src="./img/empty-box.png" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SideCart;
