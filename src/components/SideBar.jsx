import { Box, Heading, Flex, Link, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";

const SideBar = () => {
  const linkStyles = {
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
    <Box
      h={"100vh"}
      w={"inherit"}
      bg={
        "linear-gradient(130deg, rgba(238,165,81,255) 0%, rgba(243,183,114,255) 100%)"
      }
      py={"1rem"}
      borderRadius={"0 1.7rem 1.7rem 0"}
      position={"fixed"}
      top={0}
      left={0}
    >
      <Flex flexDirection={"column"} gap={"1rem"}>
        <Flex align={"center"} justify={"center"} gap={"1rem"} p={"0.5rem"}>
          <Image src="/img/logo.png" h={"4rem"} w={"4rem"} />
          <Heading fontSize={"2rem"} fontWeight={400}>
            RMS
          </Heading>
        </Flex>
        <Box fontWeight={500}>
          <Flex gap={"0.5rem"} flexDirection={"column"} w={"100%"} pl={"1rem"}>
            <Link as={NavLink} sx={linkStyles.link} to="home">
              <Flex
                align={"center"}
                gap={"0.5rem"}
                flexDirection={["column", "column", "column", "row"]}
              >
                <AiOutlineDashboard size={"1.5rem"} />
                <Text>Dashboard</Text>
              </Flex>
            </Link>
            <Link as={NavLink} sx={linkStyles.link} to="cook">
              <Flex
                align={"center"}
                gap={"0.5rem"}
                flexDirection={["column", "column", "column", "row"]}
              >
                <Image src="/img/chef-hat.png" h={"1.5rem"} w={"1.5rem"} />
                <Text>Cook</Text>
              </Flex>
            </Link>
            <Link as={NavLink} sx={linkStyles.link} to="order">
              <Flex
                align={"center"}
                gap={"0.5rem"}
                flexDirection={["column", "column", "column", "row"]}
              >
                <Image src="/img/orders.png" h={"1.5rem"} w={"1.5rem"} />
                <Text>Order</Text>
              </Flex>
            </Link>
            <Link as={NavLink} sx={linkStyles.link} to="billing">
              <Flex
                align={"center"}
                gap={"0.5rem"}
                flexDirection={["column", "column", "column", "row"]}
              >
                <Image src="/img/billing.png" h={"1.5rem"} w={"1.5rem"} />
                <Text>Bill</Text>
              </Flex>
            </Link>
            <Link as={NavLink} sx={linkStyles.link} to="employee">
              <Flex
                align={"center"}
                gap={"0.5rem"}
                flexDirection={["column", "column", "column", "row"]}
              >
                <Image src="/img/employees.png" h={"1.5rem"} w={"1.5rem"} />
                <Text>Employees</Text>
              </Flex>
            </Link>
            <Link as={NavLink} sx={linkStyles.link} to="fooditem">
              <Flex
                align={"center"}
                gap={"0.5rem"}
                flexDirection={["column", "column", "column", "row"]}
              >
                <Image src="/img/clipboard.png" h={"1.5rem"} w={"1.5rem"} />
                <Text>Items</Text>
              </Flex>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SideBar;
