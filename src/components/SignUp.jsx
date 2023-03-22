import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const companyNameRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };
  return (
    <>
      <FormControl>
        <VStack align={"stretch"} spacing={"1.5rem"} w={"25rem"}>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input
              type={"email"}
              borderColor={"gray.300"}
              placeholder="Enter email"
              ref={emailRef}
            />
          </Box>
          <Box>
            <FormLabel>Username</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.300"}
              placeholder="Enter username"
              ref={usernameRef}
            />
          </Box>
          <Box>
            <FormLabel>Company Name</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.300"}
              placeholder="Enter company name"
              ref={companyNameRef}
            />
          </Box>
          <Box>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.300"}
              placeholder="Enter phone number"
              ref={phoneNumberRef}
            />
          </Box>
          <Box>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                borderColor={"gray.300"}
                ref={passwordRef}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Button
            bg={"#fdb78b"}
            color={"#000"}
            _hover={{ bg: "#ffbf98" }}
            onClick={(e) => handleSubmit(e)}
          >
            Sign Up
          </Button>
          <Text>
            Already Registered?{" "}
            <Link
              as={NavLink}
              textDecoration={"underline"}
              color={"#fdb78b"}
              _hover={{ color: "#ff9350" }}
              fontWeight={"bold"}
              to={"/"}
            >
              Sign In
            </Link>
          </Text>
        </VStack>
      </FormControl>
    </>
  );
};

export default SignUp;
