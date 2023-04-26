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
import { setModal } from "../features/modalSlice";
import { GrClose } from "react-icons/gr";
import getCookie from "../hooks/getCookie";
import { queryClient } from "../App";

const Modal = () => {
  const dispatch = useDispatch();
  const f_nameRef = useRef();
  const l_nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const work_asRef = useRef();
  const phone_numberRef = useRef();
  const id = getCookie("id");
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoader());
      const body = {
        f_name: f_nameRef.current.value,
        l_name: l_nameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
        work_as: work_asRef.current.value,
        phone_number: phone_numberRef.current.value,
        adminid: id,
      };
      const response = await fetch(
        "http://localhost:5500/employee/createemployee",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.ok) {
        dispatch(setLoader());
        dispatch(setModal());
        queryClient.invalidateQueries("getEmployees");
        toast({
          title: "Added Sucessfully.",
          description: "Sucessfully Added new employee.",
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
      onClick={() => dispatch(setModal())}
    >
      <Box
        pos={"relative"}
        bg={"gray.100"}
        p={"2rem 3rem"}
        borderRadius={"1rem"}
        boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}
        onClick={(e) => e.stopPropagation()}
      >
        <Heading>Add Employee</Heading>
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
              />
            </Box>
            <Box>
              <FormLabel htmlFor="employeeName">Phone Number</FormLabel>
              <Input
                type="text"
                bg={"#fff"}
                borderColor={"gray.300"}
                placeholder="Enter email"
                id="employeeName"
                ref={phone_numberRef}
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
              />
            </Box>
            <Box>
              <FormLabel htmlFor="employeeName">Work as</FormLabel>
              <Select placeholder="Select option" ref={work_asRef}>
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
            Add
          </Button>
        </FormControl>
        <Icon
          as={GrClose}
          cursor={"pointer"}
          pos={"absolute"}
          top={"1rem"}
          right={"1rem"}
          onClick={() => dispatch(setModal())}
        />
      </Box>
    </Center>
  );
};

export default Modal;
