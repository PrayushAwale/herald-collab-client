import {
  Box,
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Chart from "../components/Chart";
import Profile from "../components/Profile";
import CardEmployee from "../components/CardEmployee";
import CardFoodItem from "../components/CardFoodItem";
import getCookie from "../hooks/getCookie";
import { useQuery } from "react-query";
import CardSales from "../components/CardSales";

const HomePage = () => {
  const user = getCookie("name");
  const getSales = async () => {
    const id = getCookie("id");
    const res = await fetch(`http://localhost:5500/order/complete/${id}`);
    return res.json();
  };
  const { data, error, isLoading } = useQuery("getSales", getSales);

  return (
    <Box h={"100vh"} w={"100%"} px={"2rem"}>
      <Flex
        p={"2rem 3rem"}
        align={"center"}
        justify={"space-between"}
        borderBottom={"2px solid"}
        borderColor={"gray.200"}
      >
        <Heading>Dashboard</Heading>
        <Profile />
      </Flex>
      <Heading p={"0.5rem 2rem"}>
        {" "}
        <Text
          as={"span"}
          color={"#ffae7c"}
          // bgGradient="linear(to-l, #ffc6a2, #ff873d)"
          // bgClip="text"
          fontWeight="extrabold"
        >
          Hello,
        </Text>{" "}
        {user && user.charAt(0).toUpperCase() + user.slice(1)}!
      </Heading>

      <Flex align={"center"} p={"2rem 1rem"} gap={"1rem"}>
        <CardEmployee />
        <CardFoodItem />
        <CardSales dataLength={data && data.data} />
      </Flex>
      <Tabs>
        <TabList>
          <Tab>Sales</Tab>
          <Tab>Charts</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid
              columns={4}
              spacing={5}
              gap={"5rem"}
              p={"1rem  0.5rem"}
              borderBottom={"2px solid"}
              borderColor={"gray.100"}
              mb={"0.5rem"}
            >
              <Text>Food Name</Text>
              <Text>Price</Text>
              <Text>Completed Time</Text>
              <Text>Quantity</Text>
            </SimpleGrid>
            <Flex
              flexDirection={"column"}
              gap={"1rem"}
              maxH={"12rem"}
              overflowY={"scroll"}
            >
              {data &&
                data.data.map((item) => {
                  return (
                    <SimpleGrid
                      columns={4}
                      spacing={5}
                      gap={"5rem"}
                      p={"1rem  0.5rem"}
                      bg={"gray.100"}
                      borderRadius={"0.5rem"}
                      key={item.id}
                    >
                      <Text>{item.food_name}</Text>
                      <Text>{item.price}</Text>
                      <Text>{item.timestamp.slice(0, 10)}</Text>
                      <Text>{item.quantity}</Text>
                    </SimpleGrid>
                  );
                })}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Chart />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HomePage;
