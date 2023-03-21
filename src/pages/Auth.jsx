import {
  Box,
  Button,
  Center,
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
import React, { useState } from "react";

const Auth = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box>
      <Center h={"100Vh"} w={"100vw"} bg={"#f9f6fd"}>
        <Box
          bg={"#fff"}
          p={"2rem 4rem"}
          borderRadius={"1rem"}
          boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}
        >
          <FormControl>
            <VStack align={"stretch"} spacing={"2rem"} w={"25rem"}>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input
                  type={"email"}
                  borderColor={"gray.300"}
                  placeholder="Enter email"
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
                  <Checkbox defaultChecked>Stay Logged In</Checkbox>
                </Flex>
                <Link>Forget Password?</Link>
              </Flex>
              <Button bg={"#6a2cd8"} color={"#fff"} _hover={{ bg: "#7830f5" }}>
                Sign In
              </Button>
              <Text>
                Not a member yet?{" "}
                <Link
                  as={"span"}
                  textDecoration={"underline"}
                  color={"#6a2cd8"}
                  fontWeight={"bold"}
                >
                  Sign Up
                </Link>
              </Text>
            </VStack>
          </FormControl>
        </Box>
      </Center>
    </Box>
  );
};

export default Auth;
