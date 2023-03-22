import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function RouterPage() {
  return (
    <>
      <Flex>
        <Box position={"relative"} width={"15vw"}>
          <SideBar />
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Flex>
    </>
  );
}

export default RouterPage;
