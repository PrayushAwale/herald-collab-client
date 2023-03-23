import { Box, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import SignIn from "../components/SignIn";

const SignInPage = () => {
  const { isLoading } = useSelector((state) => state.loader);

  return (
    <Box position={"relative"}>
      <Center h={"100Vh"} w={"100vw"} bg={"#f9f6fd"} position={"relative"}>
        <Box
          position={"absolute"}
          top={0}
          left={0}
          h={"100vh"}
          w={"100%"}
          opacity={0.06}
          bgImage={"/img/patternBG.png"}
        ></Box>
        <Flex
          zIndex={1}
          align={"center"}
          gap={"3rem"}
          bg={"#fff"}
          p={"2rem 4rem"}
          borderRadius={"1rem"}
          boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}
        >
          <Image src={"/img/login.png"} maxW={"25rem"} />
          <SignIn />
        </Flex>
      </Center>
      {isLoading && <Loader />}
    </Box>
  );
};

export default SignInPage;
