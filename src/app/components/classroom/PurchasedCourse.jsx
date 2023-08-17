import { Alert, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useRouter } from "next/navigation";
import CreateMeetingForm from "../profile/CreateMeetingForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "@/app/store/coursesSlice";
import RenderCircularProgress from "../RenderCircularProgress";
// import { getToken } from "next-auth/jwt";

const PurchasedCourse = () => {
  const router = useRouter();
  const [showCreateMeetingDialog, setShowCreateMeetingDialog] =
    React.useState(false);
  const { loading, haveData, haveError, courses } = useSelector((state) => ({
    ...state.coursesData,
  }));
  const dispatch = useDispatch();

  // const secret = process.env.SECRET;
  // const gToken = getToken({ req, secret });
  // console.log(gToken)

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const handleJoinMeeting = () => {
    console.log("join meeting fun hit");
    return router.push("https://meet.google.com/kcg-kxdt-cyt");
  };
  let coursess = [{ course_name: "test" }, { course_name: "test2" }];
  return (
    <Stack gap={3}>
      {
        // loading ? (
        //   <RenderCircularProgress />
        // ) : haveError ? (
        //   <Alert severity="error">Api cannot return data</Alert>
        // ) : haveData && courses.length == 0 ? (
        //   <Alert severity="success">no data yet</Alert>
        // )
        //:
        // haveData &&
        coursess.map((course) => {
          return (
            <Stack
              key={course.id}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={3}
              sx={{
                borderRadius: "25px",
                border: "1px solid #eee",
                boxShadow: "3px 3px 5px #eee",
                padding: 3,
                "&:hover": {
                  boxShadow: "3px 3px 7px #ddd",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box
                  sx={{
                    borderRadius: "25px",
                    width: 85,
                    height: 70,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    alt="next iamge"
                    src="/images/logo.png"
                    width={85}
                    height={70}
                  />
                </Box>
                <Box>
                  <Typography fontSize="18px" fontWeight="bold">
                    {course.course_name}
                  </Typography>
                  <Box display={"flex"} gap={3} mt={2}>
                    <Typography display={"flex"} alignItems="center" gap={1}>
                      <AutoStoriesIcon /> 25+ lessons
                    </Typography>
                    <Typography display={"flex"} alignItems="center" gap={1}>
                      <WatchLaterIcon /> 32 hours 23 mins
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {Object.keys(course).includes("meetLink") ? (
                <Button
                  sx={{ px: 4, py: 2, borderRadius: "15px" }}
                  variant="outlined"
                  color="inherit"
                  onClick={handleJoinMeeting}
                >
                  Join
                </Button>
              ) : (
                <>
                  <Button
                    sx={{ px: 4, py: 2, borderRadius: "15px" }}
                    variant="outlined"
                    color="inherit"
                    onClick={() => setShowCreateMeetingDialog(true)}
                  >
                    Create Meeting
                  </Button>
                  <CreateMeetingForm
                    open={showCreateMeetingDialog}
                    setOpen={setShowCreateMeetingDialog}
                    courses={courses}
                  />
                </>
              )}
            </Stack>
          );
        })
      }
    </Stack>
  );
};

export default PurchasedCourse;
