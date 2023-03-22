import { Box, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import SignUp from "../components/SignUp";

const SignUpPage = () => {
  return (
    <Box>
      <Center h={"100Vh"} w={"100vw"} bg={"#f9f6fd"}>
        <Flex
          align={"center"}
          gap={"3rem"}
          bg={"#fff"}
          p={"2rem 4rem"}
          borderRadius={"1rem"}
          boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}
        >
          <Image src={"./img/login.png"} maxW={"25rem"} />
          <SignUp />
        </Flex>
      </Center>
    </Box>
  );
};

export default SignUpPage;
