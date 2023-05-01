import { Box, SkeletonText } from "@chakra-ui/react";
import React from "react";

const AyahSkeleton = () => {
  const arr = [0, 1, 2, 3];
  return (
    <Box width={"100%"} pr={2}>
      {arr.map((a) => (
        <SkeletonText
          key={a}
          noOfLines={4}
          spacing="4"
          skeletonHeight="2"
          mb={5}
          boxShadow="lg"
          bg="white"
          p={5}
        />
      ))}
    </Box>
  );
};

export default AyahSkeleton;
