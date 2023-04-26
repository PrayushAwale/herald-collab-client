import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { setModalItem } from "../features/modalSlice";
import Profile from "../components/Profile";
import getCookie from "../hooks/getCookie";
import { useQuery } from "react-query";
import FoodItemList from "../components/FoodItemList";
import ModalItem from "../components/ModalItem";

const FoodItem = () => {
  const { isActiveItem } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const getFoodItem = async () => {
    const id = getCookie("id");
    const res = await fetch(
      `http://localhost:5500/fooditem/getfooditems/${id}`
    );
    return res.json();
  };
  0;
  const { data, error, isLoading } = useQuery("getFoodItems", getFoodItem);

  return (
    <Box pos={"relative"} h={"100vh"}>
      <Box p={"2rem 5rem"}>
        <Flex align={"center"} justify={"space-between"} pb={"1rem"}>
          <Flex w={"100%"} align={"center"} justify={"space-between"}>
            <Heading>The Orders</Heading>
            <Flex align={"center"} gap={"2rem"}>
              <Button onClick={() => dispatch(setModalItem())}>Add</Button>
              <Profile />
            </Flex>
          </Flex>
        </Flex>
        <SimpleGrid
          columns={3}
          spacing={5}
          p={"0 1rem"}
          w={"100%"}
          borderBottom={"2px solid"}
          pb={"1rem"}
          borderColor={"gray.200"}
        >
          <Text>Food name</Text>
          <Text>Price</Text>
          <Text>Category</Text>
        </SimpleGrid>
        <VStack p={"1rem 0.5rem"} align={"stretch"} spacing={"1rem"}>
          {data &&
            data.data.map((item) => <FoodItemList key={item.id} {...item} />)}
        </VStack>
      </Box>
      {isActiveItem && <ModalItem />}
    </Box>
  );
};

export default FoodItem;
