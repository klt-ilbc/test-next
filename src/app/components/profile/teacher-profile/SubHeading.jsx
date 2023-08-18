import React from "react";
import { Typography } from "@mui/material";

const SubHeading = ({ children }) => {
  return (
    <Typography fontSize="20px" fontWeight={600} sx={{ color: "#243C4F" }}>
      {children}
    </Typography>
  );
};
export default SubHeading;
