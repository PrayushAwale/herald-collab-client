import { Box, Button, HStack, Input } from "@chakra-ui/react";
import React from "react";
import removeCookie from "../hooks/removeCookie";
import { FiSettings, FiLogOut, FiBell } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "../features/filterSlice";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Notification from "./Notification";

const SearchandHeader = () => {
  const dispatch = useDispatch();
  const { username, email } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  return (
    <Box
      w={"inherit"}
      maxW={"inherit"}
      bg={"#fff"}
      borderBottom={"1.5px solid"}
      borderBottomColor={"gray.100"}
      potision={"relative"}
    >
      <HStack py={"1.8rem"} spacing={4}>
        <Input
          type={"text"}
          placeholder={"Search for the Food"}
          bg={"#fff"}
          onChange={(e) => dispatch(handleInput(e.target.value))}
        />
        <Button bg={"#eea551"} _hover={{ bg: "#f3b772" }}>
          Search
        </Button>
        <Notification />
        <Profile />
      </HStack>
    </Box>
  );
};

export default SearchandHeader;
