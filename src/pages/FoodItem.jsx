import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../features/modalSlice";

const FoodItem = () => {
  const { isActive } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <Box pos={"relative"} h={"100vh"}>
      <Box p={"2rem 5rem"}>
        <Flex
          align={"center"}
          justify={"space-between"}
          borderBottom={"2px solid"}
          pb={"1rem"}
          borderColor={"gray.200"}
        >
          <Heading>Food Items</Heading>
          <Button onClick={() => dispatch(setModal())}>Add</Button>
        </Flex>
      </Box>
      {isActive && <Modal />}
    </Box>
  );
};

export default FoodItem;
