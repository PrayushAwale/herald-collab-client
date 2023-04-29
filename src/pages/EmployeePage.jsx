import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../features/modalSlice";
import { useQuery } from "react-query";
import getCookie from "../hooks/getCookie";
import EmployeeList from "../components/EmployeeList";
import Profile from "../components/Profile";
import { queryClient } from "../App";

const EmployeePage = () => {
  const { isActive } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const getEmployees = async () => {
    const id = getCookie("id");
    const res = await fetch(
      `http://localhost:5500/employee/getemployees/${id}`
    );
    return res.json();
  };
  const { data, error, isLoading } = useQuery("getEmployees", getEmployees);

  return (
    <Box pos={"relative"} h={"100vh"}>
      <Box p={"2rem 5rem"}>
        <Flex align={"center"} justify={"space-between"} pb={"1rem"}>
          <Flex w={"100%"} align={"center"} justify={"space-between"}>
            <Heading>Employees</Heading>
            <Flex align={"center"} gap={"2rem"}>
              <Button onClick={() => dispatch(setModal())}>Add</Button>
              <Profile />
            </Flex>
          </Flex>
        </Flex>
        <SimpleGrid
          columns={6}
          spacing={5}
          p={"0 1rem"}
          w={"100%"}
          borderBottom={"2px solid"}
          pb={"1rem"}
          borderColor={"gray.200"}
        >
          <Text>First name</Text>
          <Text>Last name</Text>
          <Text>Email</Text>
          <Text>Phone</Text>
          <Text>Position</Text>
          <Text>Joine On</Text>
        </SimpleGrid>
        <VStack p={"1rem 0.5rem"} align={"stretch"} spacing={"1rem"}>
          {data &&
            data.data.map((employee) => (
              <EmployeeList key={employee.id} {...employee} />
            ))}
        </VStack>
      </Box>
      {isActive && <Modal />}
    </Box>
  );
};

export default EmployeePage;
