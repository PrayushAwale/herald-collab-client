import { Box, Heading, Flex, Link, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
// import "../Links.css";
const SideBar = () => {
  const linkStyles = {
    after: {
      content: '""',
      h: "2rem",
      w: "2rem",
      position: "absolute",
      top: "-57.8%",
      right: 0,
      borderBottomRightRadius: "40%",
      boxShadow: "7.5px 7.5px 0 7.5px #fff",
    },
    before: {
      content: '""',
      h: "2rem",
      w: "2rem",
      position: "absolute",
      bottom: "-57.8%",
      right: 0,
      borderTopRightRadius: "40%",
      boxShadow: "7.5px -7.5px 0 7.5px #fff",
    },
    link: {
      position: "relative",
      borderRadius: "100rem 0 0 100rem",
      w: "100%",
      p: "1rem",
      _hover: { bg: "rgba(255,255,255,0.2)" },
      cursor: "pointer",
      _activeLink: {
        bg: "#fff",
      },
    },
  };
  return (
    // <Box></Box>
    <Box
      h={"100vh"}
      w={"inherit"}
      bg={
        "linear-gradient(130deg, rgba(253,197,162,1) 0%, rgba(253,183,139,1) 100%)"
      }
      py={"1rem"}
      borderRadius={"0 1.7rem 1.7rem 0"}
      position={"fixed"}
      top={0}
      left={0}
    >
      <Flex flexDirection={"column"} gap={"1rem"}>
        <Flex align={"center"} justify={"center"} gap={"1rem"} p={"0.5rem"}>
          <Image src="./img/restaurant (2).png" h={"4rem"} w={"4rem"} />
          <Heading fontSize={"2rem"} fontWeight={400}>
            RMS
          </Heading>
        </Flex>
        <Box fontWeight={500}>
          <Flex gap={"0.5rem"} flexDirection={"column"} w={"100%"} pl={"1rem"}>
            <Link as={NavLink} sx={linkStyles.link} to="home">
              <Text>Home</Text>
            </Link>
            <Link as={NavLink} sx={linkStyles.link} to="cook">
              <Text>Cook</Text>
            </Link>
            <Link as={NavLink} sx={linkStyles.link} to="order">
              <Text>Order</Text>
            </Link>
            <Link as={NavLink} sx={linkStyles.link} to="billing">
              <Text>Billing</Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SideBar;
