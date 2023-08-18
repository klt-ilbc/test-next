import React from "react";
import { Box } from "@mui/material";

const SectionBox = ({ height, children, dir, pad = 0, flexWidth }) => {
  return (
    <Box
      display="flex"
      flex={flexWidth}
      flexDirection={dir}
      sx={{
        boxSizing: "border-box",
        borderRadius: "25px",
        overflow: "hidden",
        background: "#FFFAFA",
        maxHeight: height,
        padding: pad,
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      {children}
    </Box>
  );
};
export default SectionBox;
