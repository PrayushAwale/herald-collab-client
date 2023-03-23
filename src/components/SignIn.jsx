import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
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

const SignIn = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleSubmit = async (e) => {
    dispatch(setLoader());
    e.preventDefault();
    try {
      const body = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const response = await fetch("http://localhost:5500/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        dispatch(setLoader());
        navigate("rms/order");
        return;
      }
      setData(await response.json());
      dispatch(setLoader());
    } catch (err) {
      dispatch(setLoader());
      console.error(err.message);
    }
  };
  return (
    <>
      <FormControl>
        <VStack align={"stretch"} spacing={"2rem"} w={"25rem"}>
          <Heading fontSize={"2rem"}>
            Never miss an{" "}
            <Text as={"span"} color={"#ffae7c"}>
              update
            </Text>{" "}
            With our{" "}
            <Text as={"span"} color={"#ffae7c"}>
              prompt
            </Text>{" "}
            services.
          </Heading>
          <Box>
            <Text color={"red"} textAlign={"center"}>
              {data && data.message}
            </Text>
            <FormLabel>Email</FormLabel>
            <Input
              type={"email"}
              borderColor={"gray.300"}
              placeholder="Enter email"
              ref={emailRef}
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
          <Flex align={"center"} justify={"space-between"}>
            <Flex>
              <Checkbox defaultChecked colorScheme={"yellow"}>
                Stay Logged In
              </Checkbox>
            </Flex>
            <Link>Forget Password?</Link>
          </Flex>

          <Button
            bg={"#fdb78b"}
            color={"#000"}
            _hover={{ bg: "#ffbf98" }}
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </Button>
          <Text>
            Not a member yet?{" "}
            <Link
              as={NavLink}
              textDecoration={"underline"}
              color={"#fdb78b"}
              _hover={{ color: "#ff9350" }}
              fontWeight={"bold"}
              to={"/signup"}
            >
              Sign Up
            </Link>
          </Text>
        </VStack>
      </FormControl>
    </>
  );
};

export default SignIn;
