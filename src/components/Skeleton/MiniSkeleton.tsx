import React from "react";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const MiniSkeleton = () => {
  const ww = window.innerWidth;
  const width =
    ww > 1000 ? 150 : ww > 770 ? 120 : ww > 600 ? 90 : ww > 350 ? 180 : 140;
  return (
    <>
      <Box
        padding="6"
        boxShadow="lg"
        bg="white"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div>
          <SkeletonCircle size="12" />
        </div>
        <div>
          <SkeletonText
            width={width}
            noOfLines={2}
            spacing={2}
            skeletonHeight={2}
            speed={1}
          />
        </div>
      </Box>
    </>
  );
};

export default MiniSkeleton;
