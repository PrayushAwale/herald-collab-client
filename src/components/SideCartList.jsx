import {
  Box,
  Flex,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { updateAmount, onChangeInput } from "../features/orderSlice";

const SideCartList = ({ item_name, priceInt, amount, id }) => {
  const dispatch = useDispatch();
  return (
    <Flex gap={"1rem"} align={"center"}>
      <Box w={"10rem"}>
        <Text>{item_name}</Text>
      </Box>
      <Box>
        <Text>{priceInt}</Text>
      </Box>
      <Box>
        <NumberInput
          value={amount}
          onInput={(e) => {
            dispatch(onChangeInput({ id, value: e.target.value }));
          }}
        >
          <NumberInputField width={"5rem"} />
          <NumberInputStepper>
            <NumberIncrementStepper
              onClick={() => dispatch(updateAmount({ id, increment: true }))}
            />
            <NumberDecrementStepper
              onClick={() => dispatch(updateAmount({ id, increment: false }))}
            />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    </Flex>
  );
};

export default SideCartList;
