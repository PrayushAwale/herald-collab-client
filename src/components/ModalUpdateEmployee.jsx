import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Select,
  SimpleGrid,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../features/loaderSlice";
import { GrClose } from "react-icons/gr";
import getCookie from "../hooks/getCookie";
import { queryClient } from "../App";

const ModalUpdateEmployee = ({
  f_name,
  l_name,
  password,
  email,
  work_as,
  phone_number,
  setIsActive,
  id,
}) => {
  const dispatch = useDispatch();
  const f_nameRef = useRef();
  const l_nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const work_asRef = useRef();
  const phone_numberRef = useRef();
  const adminid = getCookie("id");
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoader());
      const body = {
        id,
        f_name: f_nameRef.current.value,
        l_name: l_nameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
        work_as: work_asRef.current.value,
        phone_number: phone_numberRef.current.value,
        adminid: adminid,
      };
      const response = await fetch(
        "http://localhost:5500/employee/updateemployee",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        dispatch(setLoader());
        setIsActive((prev) => !prev);
        queryClient.invalidateQueries("getEmployees");
        toast({
          title: "Edited Sucessfully.",
          description: "Sucessfully edited employee.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        return;
      }
    } catch (err) {}
  };

  return (
    <Center
      h={"100%"}
      w={"100%"}
      bg={"rgba(255,255,255,0.8)"}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={3}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <Box
        pos={"relative"}
        bg={"gray.100"}
        p={"2rem 3rem"}
        borderRadius={"1rem"}
        boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}
        onClick={(e) => e.stopPropagation()}
      >
        <Heading>Edit Employee</Heading>
        <FormControl my={"1rem"}>
          <SimpleGrid columns={2} spacing={5}>
            <Box>
              <FormLabel htmlFor="employeeName">First Name</FormLabel>
              <Input
                type="text"
                bg={"#fff"}
                borderColor={"gray.300"}
                placeholder="Enter first name"
                id="employeeName"
                ref={f_nameRef}
                defaultValue={f_name}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="employeeName">Last Name</FormLabel>
              <Input
                type="text"
                bg={"#fff"}
                borderColor={"gray.300"}
                placeholder="Enter last name"
                id="employeeName"
                ref={l_nameRef}
                defaultValue={l_name}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="employeeName">Email</FormLabel>
              <Input
                type="text"
                bg={"#fff"}
                borderColor={"gray.300"}
                placeholder="Enter email"
                id="employeeName"
                ref={emailRef}
                defaultValue={email}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="employeeName">Phone Number</FormLabel>
              <Input
                type="text"
                bg={"#fff"}
                borderColor={"gray.300"}
                placeholder="Enter phone number"
                id="employeeName"
                ref={phone_numberRef}
                defaultValue={phone_number}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="employeeName">Password</FormLabel>
              <Input
                type="text"
                bg={"#fff"}
                borderColor={"gray.300"}
                placeholder="Enter password"
                id="employeeName"
                ref={passwordRef}
                defaultValue={password}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="employeeName">Work as</FormLabel>
              <Select
                placeholder="Select option"
                ref={work_asRef}
                defaultValue={work_as}
              >
                <option value="Waiter">Waiter</option>
                <option value="Cashier">Cashier</option>
                <option value="Cook">Cook</option>
              </Select>
            </Box>
          </SimpleGrid>

          <Button
            mt={"1rem"}
            bg={"#eea551"}
            color={"#000"}
            _hover={{ bg: "#f3b772" }}
            boxShadow={"0px 5px 10px -3px rgba(0,0,0,0.1)"}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </FormControl>
        <Icon
          as={GrClose}
          cursor={"pointer"}
          pos={"absolute"}
          top={"1rem"}
          right={"1rem"}
          onClick={() => setIsActive((prev) => !prev)}
        />
      </Box>
    </Center>
  );
};

export default ModalUpdateEmployee;
