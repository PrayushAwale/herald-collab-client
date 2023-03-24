import React from "react";
import { Skeleton, Stack } from "@chakra-ui/react";

const SkeletonLoader = () => {
  return (
    <Stack>
      <Skeleton height="100px" borderRadius={"0.5rem"} />
      <Skeleton height="100px" borderRadius={"0.5rem"} />
      <Skeleton height="100px" borderRadius={"0.5rem"} />
      <Skeleton height="100px" borderRadius={"0.5rem"} />
    </Stack>
  );
};

export default SkeletonLoader;
