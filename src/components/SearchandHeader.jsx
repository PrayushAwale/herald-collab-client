import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  AvatarBadge,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";

import React from "react";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "../features/filterSlice";

const SearchandHeader = () => {
  const dispatch = useDispatch();
  const { username, email } = useSelector((state) => state.auth);

  return (
    <Box
      w={"inherit"}
      maxW={"inherit"}
      bg={"#fff"}
      borderBottom={"1.5px solid"}
      borderBottomColor={"gray.100"}
      potision={"relative"}
    >
      <HStack py={"1.8rem"}>
        <Input
          type={"text"}
          placeholder={"Search for the Food"}
          bg={"#fff"}
          onChange={(e) => dispatch(handleInput(e.target.value))}
        />
        <Button bg={"#eea551"} _hover={{ bg: "#f3b772" }}>
          Search
        </Button>
        <IconButton icon={<IoNotifications size={"2rem"} />} />
        {/* <IconButton icon={<FaUserCircle size={"2rem"} />} /> */}
        <Menu position={"relative"}>
          <Center>
            <MenuButton
              as={Button}
              bg={"none"}
              _hover={{ bg: "none" }}
              _active={{ bg: "none" }}
            >
              <Avatar name={"nabin"} bg={"#eea551"}>
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
            </MenuButton>
          </Center>
          <MenuList>
            <MenuItem>
              <Flex gap={"0.8rem"} align={"center"}>
                <Avatar h={"2rem"} w={"2rem"} name={"nabin"} bg={"#eea551"} />
                <Flex direction={"column"}>
                  <Text color={"gray.500"}>{email}</Text>
                  <Text>{username}</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex align={"center"} gap={"0.5rem"}>
                <FiSettings />
                <Text>Setting</Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex align={"center"} gap={"0.5rem"}>
                <FiLogOut />
                <Text>Log Out</Text>
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default SearchandHeader;
