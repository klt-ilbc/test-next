import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const EducationCard = ({ src, title, uni, date }) => {
  return (
    <Stack direction="row" height="62px" gap={2}>
      <Box
        width="60px"
        height="60px"
        borderRadius="50%"
        overflow="hidden"
        border="1px solid #ddd"
      >
        <Image src={src} width={60} height={60} objectFit="cover" />
      </Box>
      <Box display="flex" justifyContent="space-between" flexDirection="column">
        <Typography
          sx={{ color: "#243c4F", fontSize: "14px", fontWeight: 500 }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ color: "#757575", fontSize: "11px", fontWeight: 400 }}
        >
          {uni}
        </Typography>
        <Typography
          sx={{ color: "#757575", fontSize: "11px", fontWeight: 400 }}
        >
          {date}
        </Typography>
      </Box>
    </Stack>
  );
};

export default EducationCard;
