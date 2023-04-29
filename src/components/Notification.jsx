import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Text,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { FiSettings, FiLogOut, FiBell } from "react-icons/fi";
import { useQuery } from "react-query";
import getCookie from "../hooks/getCookie";
import MenuItemNotify from "./MenuItemNotify";

const Notification = () => {
  const id = getCookie("id");
  const getFacts = async () => {
    const res = await fetch(`http://localhost:5500/order/unserved/${id}`);
    return res.json();
  };

  const { data, error, isLoading } = useQuery("getNotifications", getFacts);
  return (
    <Menu>
      <Center>
        <MenuButton
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
          >
            <Center>{data?.data?.length}</Center>
          </Badge>
        </MenuButton>
      </Center>
      <MenuList>
        {data &&
          data.data.map((item) => {
            return <MenuItemNotify key={item.id} {...item} />;
          })}
      </MenuList>
    </Menu>
  );
};

export default Notification;
