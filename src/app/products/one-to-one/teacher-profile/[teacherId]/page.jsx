"use client";
import EduBackground from "@/app/components/products/one-to-one/EduBackground";
import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import SubHeading from "@/app/components/profile/teacher-profile/SubHeading";
import SectionBox from "@/app/components/profile/teacher-profile/SectionBox";
import {
  AssessmentOutlined,
  DescriptionOutlined,
  DocumentScannerOutlined,
  EmailOutlined,
  FavoriteOutlined,
  InfoOutlined,
} from "@mui/icons-material";
import EducationCard from "@/app/components/profile/teacher-profile/EducationCard";
import { dummyEducation, dummySectionData } from "@/app/utils/constant";

const page = () => {
  const [currSelSec, setcurrSelSec] = useState(dummySectionData[0]);
  const arr = [1, 2, 3, 1, 1, 1, 1, 1, 1];
  return (
    <Box px="81px" py={"30px"} sx={{ backgroundColor: "#E9F8FF" }}>
      <Breadcrumbs separator="=>">
        <Typography>Teacher Profile</Typography>
        <Typography>Myat Hsu Mon</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          gap: 3,
          mt: 5,
          px: "auto",
          // flexDirection: isTablet ? "column" : "row",
        }}
      >
        <Box
          display="flex"
          sx={{
            flex: 0.4,
            flexDirection: "column",
          }}
          gap={3}
        >
          <SectionBox height="220px" dir="row">
            <Box>
              <Image
                src="/images/profile.jpg"
                alt="profile"
                width={200}
                height={220}
                objectFit="cover"
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={3}
              flex={1}
              px={4}
              py={6}
            >
              <Stack direction="column" gap={0.5}>
                <Typography
                  fontSize="25px"
                  fontWeight={700}
                  sx={{
                    color: "#243C4F",
                  }}
                >
                  Micheal Jordan
                </Typography>
                <Typography
                  variant="span"
                  fontSize="16px"
                  fontWeight={400}
                  sx={{
                    color: "#757575",
                  }}
                >
                  English Teacher
                </Typography>
                <Typography
                  variant="span"
                  fontSize="12px"
                  fontWeight={500}
                  sx={{
                    color: "#757575",
                  }}
                >
                  3.4k followers
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  background: "#6598D3",
                  textTransform: "initial",
                }}
              >
                Follow
              </Button>
            </Box>
          </SectionBox>
          <SectionBox height="360px" dir="column" pad="25px 33px">
            <SubHeading>About Me</SubHeading>
            <Stack
              mt={2}
              display="flex"
              flex={1}
              className="mod-scroll"
              pr={1}
              sx={{
                overflowY: "scroll",
                lineHeight: "17px",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              eaque fugiat impedit minima minus nobis possimus quibusdam sed
              voluptate voluptatibus. Cumque dolores esse eveniet fugiat,
              maiores mollitia obcaecati odit pariatur provident quae qui
              reiciendis reprehenderit rerum tempora unde. Autem blanditiis
              delectus eligendi fuga illo ipsa ipsam iste minus, tempore.
              Accusantium adipisci atque eligendi facere molestias nihil nulla.
              Animi aspernatur, autem culpa cum deserunt hic, id ipsum
              laboriosam molestias nobis obcaecati officiis, placeat similique
              sit vitae. Adipisci aperiam at consectetur corporis, culpa dolore,
              doloribus eaque est illum ipsam laborum nobis non officiis omnis
              quis quisquam recusandae saepe sed similique tempora
              voluptatum.Animi aspernatur, autem culpa cum deserunt hic, id
              ipsum laboriosam molestias nobis obcaecati officiis, placeat
              similique sit vitae. Adipisci aperiam at consectetur corporis,
              culpa dolore, doloribus eaque est illum ipsam laborum nobis non
              officiis omnis quis quisquam recusandae saepe sed similique
              tempora voluptatum.ipsum laboriosam molestias nobis obcaecati
              officiis, placeat similique sit vitae. Adipisci aperiam at
              consectetur corporis, culpa dolore, doloribus eaque est illum
              ipsam laborum nobis non officiis omnis quis quisquam recusandae
              saepe sed similique tempora voluptatum.
            </Stack>
          </SectionBox>
          <SectionBox height="110px" dir="column" pad="25px 33px">
            <SubHeading>Policy</SubHeading>
            <Stack direction="row" mt={1.5} gap={1}>
              <DescriptionOutlined fontSize="small" />
              <Typography
                variant="a"
                sx={{
                  color: "#757575",
                  textDecoration: "underline",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                terms and privacy and policy link
              </Typography>
            </Stack>
          </SectionBox>
          <SectionBox height="150px" dir="column" pad="25px 33px">
            <SubHeading>Contact Info</SubHeading>
            <Stack direction="row" gap={1} mt={2}>
              <EmailOutlined fontSize="small" />
              <Typography sx={{ color: "#757575", fontSize: "14px" }}>
                michealjodan@gmail.com
              </Typography>
            </Stack>
          </SectionBox>
        </Box>
        <Box display="flex" sx={{ flex: 0.6, flexDirection: "column" }} gap={3}>
          <SectionBox height="270px" dir="column" pad="25px 33px">
            <SubHeading>Education Background</SubHeading>
            <Stack
              direction="row"
              display="flex"
              p={2}
              flexWrap="wrap"
              flex={1}
            >
              {dummyEducation.map((item) => (
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  width="45%"
                  p={1}
                  key={item.id}
                  sx={{ cursor: "pointer" }}
                >
                  <EducationCard
                    title={item.title}
                    src={item.src}
                    uni={item.uni}
                    date={item.date}
                  />
                </Box>
              ))}
            </Stack>
          </SectionBox>
          <SectionBox flexWidth={1} dir="column" pad="25px 33px">
            <SubHeading>Courses</SubHeading>
            <Stack direction="row" justifyContent="flex-end" gap={2}>
              {dummySectionData.map((item) =>
                item.available ? (
                  <Box
                    key={item.id}
                    component="button"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    padding="8px 24px"
                    borderRadius="10px"
                    border="1px solid #42AAFF"
                    sx={{
                      transition: "background .2s ease",
                    }}
                    bgcolor={
                      currSelSec.id === item.id ? "#42AAFF" : "transparent"
                    }
                    onClick={() => setcurrSelSec(item)}
                  >
                    <Typography
                      fontSize="10px"
                      sx={{
                        color: currSelSec.id === item.id ? "#FFF" : "#42AAFF",
                      }}
                      fontWeight={700}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      fontSize="7px"
                      sx={{
                        color: currSelSec.id === item.id ? "#FFF" : "#42AAFF",
                      }}
                    >
                      {item.schedule}
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    component="button"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    padding="8px 24px"
                    borderRadius="10px"
                    border="1px solid red"
                    bgcolor="transparent"
                    disabled={!item.available}
                  >
                    <Typography
                      fontSize="10px"
                      sx={{
                        color: "red",
                      }}
                      fontWeight={700}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      fontSize="7px"
                      sx={{
                        color: "red",
                      }}
                    >
                      {!item.available && "unavailable"}
                    </Typography>
                  </Box>
                ),
              )}
            </Stack>
            <Box
              className="mod-scroll"
              // direction="column"
              sx={{
                overflowY: "auto",
              }}
              height="400px"
              my={2}
              pr={2}
              py={2}
              gap={1}
            >
              {arr.map((item) => (
                <Stack
                  direction="row"
                  bgcolor="#FFF"
                  borderRadius="25px"
                  overflow="hidden"
                  height="155px"
                  my={1}
                  boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.10)"
                >
                  <Box width="175px" height="135px">
                    <Image
                      src="/images/harvard.png"
                      alt="course_logo"
                      width={175}
                      height={135}
                      objectFit="cover"
                    />
                  </Box>
                  <Box
                    display="flex"
                    flex={1}
                    flexDirection="column"
                    height="150px"
                    p={2}
                  >
                    <Typography>Introduction English Grammer</Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      mt={1}
                    >
                      <Stack direction="column">
                        <Stack
                          direction="row"
                          justifyContent="center"
                          gap={1}
                          alignItems="center"
                          sx={{ color: "#757575" }}
                        >
                          <AssessmentOutlined fontSize="small" />
                          <Typography fontSize="12px">Basic Level</Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          gap={1}
                          alignItems="center"
                          sx={{ color: "#757575", mt: 1 }}
                        >
                          <AssessmentOutlined fontSize="small" />
                          <Typography fontSize="12px">Basic Level</Typography>
                        </Stack>
                      </Stack>
                      <Stack direction="column" alignItems="flex-end">
                        <IconButton>
                          <FavoriteOutlined
                            fontSize="medium"
                            sx={{ color: "red" }}
                          />
                        </IconButton>

                        <Typography
                          fontSize="12px"
                          fontWeight={500}
                          sx={{ color: "#42AAFF" }}
                        >
                          Basic Level
                        </Typography>
                      </Stack>
                    </Stack>
                    <Divider sx={{ borderWidth: "1px", my: 1 }} />
                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Typography fontSize="13px" color="#243C4F">
                        3000 MMK
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              ))}
            </Box>
          </SectionBox>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
