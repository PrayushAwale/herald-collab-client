import { SimpleGrid, Text, Flex, IconButton, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import ModalUpdateEmployee from "./ModalUpdateEmployee";
import { useDispatch } from "react-redux";
import { setLoader } from "../features/loaderSlice";
import { queryClient } from "../App";

const EmployeeList = ({
  f_name,
  l_name,
  phone_number,
  work_as,
  createdAt,
  email,
  password,
  id,
}) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const toast = useToast();
  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      dispatch(setLoader());
      const response = await fetch(
        `http://localhost:5500/employee/deleteemployee/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        dispatch(setLoader());
        queryClient.invalidateQueries("getEmployees");
        toast({
          title: "Deleted Sucessfully.",
          description: "Sucessfully deleted the employee",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        return;
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <SimpleGrid
      columns={6}
      spacing={5}
      p={"2rem 1rem"}
      bg={"gray.100"}
      cursor={"pointer"}
      borderRadius={"1rem"}
      onClick={() => setIsActive(!isActive)}
      alignItems={"center"}
    >
      <Text>{f_name}</Text>
      <Text>{l_name}</Text>
      <Text>{email}</Text>
      <Text>{phone_number}</Text>
      <Text>{work_as}</Text>
      <Flex justify={"space-between"} align={"center"}>
        <Text>{createdAt.slice(0, 10)}</Text>
        <IconButton icon={<AiOutlineDelete />} onClick={handleDelete} />
      </Flex>
      {isActive && (
        <ModalUpdateEmployee
          setIsActive={setIsActive}
          f_name={f_name}
          l_name={l_name}
          email={email}
          phone_number={phone_number}
          work_as={work_as}
          password={password}
          id={id}
        />
      )}
    </SimpleGrid>
  );
};

export default EmployeeList;
