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

const Notification = () => {
  const getFacts = async () => {
    const res = await fetch("http://localhost:5500/order/getBilling");
    return res.json();
  };

  const { data, error, isLoading } = useQuery("randomFacts", getFacts, {
    // Refetch the data every 1 second = 1000 ms
    refetchInterval: 1000,
  });
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
          data.data.map((i) => {
            return (
              <MenuItem>
                <Flex direction={"column"}>
                  <Text fontWeight={900}>Completed</Text>
                  <Text>Dish ready for table {i.table_number}.</Text>
                </Flex>
              </MenuItem>
            );
          })}
      </MenuList>
    </Menu>
  );
};

export default Notification;
