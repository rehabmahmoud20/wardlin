import { Box, Grid, Rating, Stack, Typography, styled } from "@mui/material";
import Name from "../../../UI/Name";

import student from "../../../assets/images/home/student.png";

const TestimonialWrapper = styled("article")(({ theme }) => ({
  boxShadow: "4px 4px 4px 0px rgba(113, 112, 112, 0.15)",
  padding: "26px 35px",
  textAlign: "start",
height:'207px',
maxHeight:'207px',
  "& img": {
    width: "100%",
  },
}));

const Testimonial = ({testimonial}) => {

  return (
    <TestimonialWrapper>
      <Grid container spacing={2} direction="row">
        <Grid item xs={2}>
          <img src={student} alt="student" />
        </Grid>
        <Grid item xs={10}>
          <Name>{testimonial?.title}</Name>
          {/* rating */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ margin: "14px 0" }}
          >
            <Rating
              name="half-rating-read"
              defaultValue={4}
              precision={0.5}
              size="small"
              sx={{ color: "black.main" }}
              readOnly
            />
            <Typography
              component="p"
              variant="p"
              sx={{ fontSize: "12px", fontWeight: "700" }}
            >
              3 weeks ago
            </Typography>
          </Stack>

          <Typography
            component="p"
            variant="p"
            sx={{ fontSize: { xs: "14px", md: "18px" } }}
          >
           {testimonial.desc}
          </Typography>
        </Grid>
      </Grid>
    </TestimonialWrapper>
  );
};

export default Testimonial;
