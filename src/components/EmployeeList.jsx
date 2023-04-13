import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const EmployeeList = ({
  f_name,
  l_name,
  phone_number,
  work_as,
  createdAt,
  email,
}) => {
  return (
    <Flex
      align={"center"}
      gap={"2rem"}
      p={"2rem 1rem"}
      bg={"gray.100"}
      cursor={"pointer"}
      borderRadius={"1rem"}
    >
      <Text>{f_name}</Text>
      <Text>{l_name}</Text>
      <Text>{email}</Text>
      <Text>{phone_number}</Text>
      <Text>{work_as}</Text>
      <Text>{createdAt}</Text>
    </Flex>
  );
};

export default EmployeeList;
