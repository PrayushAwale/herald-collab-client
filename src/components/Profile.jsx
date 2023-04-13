import React from "react";
import {
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
import { useDispatch, useSelector } from "react-redux";
import { FiSettings, FiLogOut, FiBell } from "react-icons/fi";
import removeCookie from "../hooks/removeCookie";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const dispatch = useDispatch();
  const { username, email } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <>
      <Menu>
        <Center>
          <MenuButton
            // as={Button}
            bg={"none"}
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
          >
            <Avatar name={email} bg={"#eea551"}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </MenuButton>
        </Center>
        <MenuList>
          <MenuItem>
            <Flex gap={"0.8rem"} align={"center"}>
              <Avatar h={"2rem"} w={"2rem"} name={email} bg={"#eea551"} />
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
          <MenuItem
            onClick={() => {
              removeCookie("token");
              removeCookie("id");
              navigate("/");
            }}
          >
            <Flex align={"center"} gap={"0.5rem"}>
              <FiLogOut />
              <Text>Log Out</Text>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Profile;
