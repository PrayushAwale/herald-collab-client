import { Box, Button, HStack, IconButton, Input } from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const SearchandHeader = () => {
  return (
    <Box
      w={"75rem"}
      position={"fixed"}
      top={0}
      bg={"#fff"}
      borderBottom={"1.5px solid"}
      borderBottomColor={"gray.100"}
    >
      <HStack py={"1.8rem"}>
        <Input type={"text"} placeholder={"Search for the Food"} bg={"#fff"} />
        <Button bg={"#fdb78b"} _hover={{ bg: "#ffd0b4" }}>
          Search
        </Button>
        <IconButton icon={<IoNotifications size={"2rem"} />} />
        <IconButton icon={<FaUserCircle size={"2rem"} />} />
      </HStack>
    </Box>
  );
};

export default SearchandHeader;
