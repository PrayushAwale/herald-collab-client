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
  Heading,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import removeCookie from "../hooks/removeCookie";
import { FiSettings, FiLogOut, FiBell } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "../features/filterSlice";
import { useNavigate } from "react-router-dom";

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

        <Menu>
          <Center>
            <MenuButton
              // as={Button}
              bg={"none"}
              _hover={{ bg: "none" }}
              _active={{ bg: "none" }}
              pos={"relative"}
            >
              <FiBell size={"2rem"} />
              <Badge
                variant="solid"
                colorScheme="red"
                pos={"absolute"}
                h={"1rem"}
                w={"1rem"}
                borderRadius={"full"}
                top={0}
                right={0}
                // fontSize={"1rem"}
              >
                <Center>4</Center>
              </Badge>
            </MenuButton>
          </Center>
          <MenuList>
            <MenuItem>
              <Flex direction={"column"}>
                <Text fontWeight={900}>Completed</Text>
                <Text>Dish ready for table 1.</Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex direction={"column"}>
                <Text fontWeight={900}>Completed</Text>
                <Text>Dish ready for table 5.</Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex direction={"column"}>
                <Text fontWeight={900}>Completed</Text>
                <Text>Dish ready for table 4.</Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex direction={"column"}>
                <Text fontWeight={900}>Completed</Text>
                <Text>Dish ready for table 8.</Text>
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <Center>
            <MenuButton
              // as={Button}
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
            <MenuItem
              onClick={() => {
                removeCookie("token");
                removeCookie("id");
                navigate("/");
              }}
            >
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
