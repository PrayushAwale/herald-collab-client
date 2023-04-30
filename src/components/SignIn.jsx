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
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setLoader } from "../features/loaderSlice";
import { useToast } from "@chakra-ui/react";
import { getTokenHolder, setCredential } from "../features/authSlice";
import setCookie from "../hooks/setCookie";

const SignIn = () => {
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const work_asRef = useRef();

  const handleClick = () => setShow(!show);
  const toast = useToast();
  const handleSubmit = async (e) => {
    dispatch(setLoader());
    e.preventDefault();
    //For Emplyoee
    if (work_asRef.current.value) {
      try {
        const body = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        const response = await fetch("http://localhost:5500/signinemployee", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (response.ok) {
          const data = await response.json();
          const { token, user } = data;
          setCookie("token", token);
          setCookie("id", user.adminid);
          setCookie("role", user.work_as);
          setCookie("email", user.email);
          setCookie("name", user.f_name);
          dispatch(getTokenHolder(token));
          dispatch(setCredential(user));
          dispatch(setLoader());
          if (user.work_as === "Cook") {
            navigate("/rms/cook");
          } else if (user.work_as === "Waiter") {
            navigate("/rms/order");
          } else if (user.work_as === "Cashier") {
            navigate("/rms/billing");
          }
          return;
        }
        setData(data);
        dispatch(setLoader());
      } catch (err) {
        dispatch(setLoader());
        console.error(err.message);
        toast({
          title: "Unable Log In",
          description: "There was some problem while logging in",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } else {
      //For Admin
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
          const data = await response.json();
          const { token, user } = data;
          setCookie("token", token);
          setCookie("id", user.id);
          setCookie("role", "Admin");
          setCookie("email", user.email);
          setCookie("name", user.username);

          dispatch(getTokenHolder(token));
          dispatch(setCredential(user));
          dispatch(setLoader());
          navigate("/rms/home");
          return;
        }
        setData(data);
        dispatch(setLoader());
      } catch (err) {
        dispatch(setLoader());
        console.error(err.message);
        toast({
          title: "Unable Log In",
          description: "There was some problem while logging in",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };
  return (
    <>
      <FormControl>
        <VStack align={"stretch"} spacing={"2rem"} w={"25rem"}>
          <Heading fontSize={"1.5rem"} textTransform={"uppercase"}>
            Never miss an{" "}
            <Text
              as={"span"}
              color={"#ffae7c"}
              bgGradient="linear(to-l, #ffc6a2, #ff873d)"
              bgClip="text"
              fontWeight="extrabold"
            >
              update
            </Text>{" "}
            With our{" "}
            <Text
              as={"span"}
              color={"#ee7b33"}
              bgGradient="linear(to-r, #ffc6a2, #ff873d)"
              bgClip="text"
              fontWeight="extrabold"
            >
              prompt
            </Text>{" "}
            services.
          </Heading>
          <Box>
            <Text color={"red"} textAlign={"center"}>
              {data && data.message}
            </Text>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id={"email"}
              type={"email"}
              borderColor={"gray.300"}
              placeholder="Enter email"
              ref={emailRef}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md">
              <Input
                id={"password"}
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
          <Box>
            <FormLabel htmlFor="employeeName">Work as</FormLabel>
            <Select placeholder="Admin" ref={work_asRef}>
              <option value={"true"}>Employee</option>
            </Select>
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
            bg={"#eea551"}
            color={"#000"}
            _hover={{ bg: "#f3b772" }}
            boxShadow={"0px 5px 10px -3px rgba(0,0,0,0.1)"}
            onClick={(e) => handleSubmit(e)}
            // onClick={() => {
            //   if (work_asRef.current.value) {
            //     console.log("Employee");
            //   } else {
            //     console.log("admin");
            //   }
            // }}
          >
            Sign In
          </Button>
          <Text>
            Not a member yet?{" "}
            <Link
              as={NavLink}
              textDecoration={"underline"}
              color={"#eea551"}
              _hover={{ color: "#f3b772" }}
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
