import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import SideBar from "../components/SideBar";

function RouterPage() {
  const { isLoading } = useSelector((state) => state.loader);
  return (
    <Box position={"relative"}>
      <Flex>
        <Box position={"relative"} width={"15vw"}>
          <SideBar />
        </Box>
        <Box w={"85vw"} maxW={"85vw"} position={"relative"}>
          <Outlet />
        </Box>
      </Flex>
      {isLoading && <Loader />}
    </Box>
  );
}

export default RouterPage;
