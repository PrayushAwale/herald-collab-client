import {
  Box,
  Button,
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
import { getTokenHolder } from "../features/authSlice";
import setCookie from "../hooks/setCookie";

const SignUp = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const emailRef = useRef();
  const usernameRef = useRef();
  const companyNameRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();

  const handleClick = () => setShow(!show);

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
        const data = await response.json();
        const { token, user } = data;
        setCookie("token", token);
        setCookie("id", user.id);
        dispatch(getTokenHolder(data));
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
                autoComplete="off"
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
            bg={"#eea551"}
            color={"#000"}
            _hover={{ bg: "#f3b772" }}
            boxShadow={"0px 5px 10px -3px rgba(0,0,0,0.1)"}
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
