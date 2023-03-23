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
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setLoader } from "../features/loaderSlice";
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const companyNameRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoader());
      const body = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        username: usernameRef.current.value,
        restaurant_name: companyNameRef.current.value,
        phone_number: phoneNumberRef.current.value,
      };
      const response = await fetch("http://localhost:5500/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        dispatch(setLoader());
        navigate("/rms/order");
        return;
      }
    } catch (err) {
      dispatch(setLoader());
      console.error(err);
      toast({
        title: "Unable to create Account",
        description: "There was some problem while creating account",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <FormControl>
        <VStack align={"stretch"} spacing={"1.5rem"} w={"25rem"}>
          <Box>
            <FormLabel>
              Email
              <Text as={"span"} color={"red"}>
                *
              </Text>
            </FormLabel>
            <Input
              type={"email"}
              borderColor={"gray.300"}
              placeholder="Enter email"
              ref={emailRef}
            />
          </Box>
          <Box>
            <FormLabel>
              Username
              <Text as={"span"} color={"red"}>
                *
              </Text>
            </FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.300"}
              placeholder="Enter username"
              ref={usernameRef}
            />
          </Box>
          <Box>
            <FormLabel>
              Company Name
              <Text as={"span"} color={"red"}>
                *
              </Text>
            </FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.300"}
              placeholder="Enter company name"
              ref={companyNameRef}
            />
          </Box>
          <Box>
            <FormLabel>
              Phone Number
              <Text as={"span"} color={"red"}>
                *
              </Text>
            </FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.300"}
              placeholder="Enter phone number"
              ref={phoneNumberRef}
            />
          </Box>
          <Box>
            <FormLabel>
              Password
              <Text as={"span"} color={"red"}>
                *
              </Text>
            </FormLabel>
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
