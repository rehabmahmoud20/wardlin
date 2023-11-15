import { Box, Typography, styled } from "@mui/material";
import headerImg from "../../assets/images/home/header.png";
import MainBtn from "../../UI/MainBtn";

const Header = () => {
  const HeaderWraper = styled("header")(({ theme }) => ({
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
    height: "60vh",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      height: "80vh",
    },
  }));
  return (
    <HeaderWraper>
      <Box
        sx={{
          backgroundColor: "black.main",

          position: "absolute",
          top: "0",
          bottom: "0",
          right: "0",
          left: "0",
          opacity: "0.5",

          zIndex: "1",
        }}
      ></Box>
      <Box
        sx={{
          height: "100%",
          color: "light.main",
          position: "relative",
          zIndex: "2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "light.main",
          flexDirection: "column",
        }}
      >
        <h1>Start your learning journey with us</h1>
        <Typography
          component="p"
          sx={{
            textTransform: "capitalize",

            marginBottom: "56px",
            fontSize: { lg: "1.5rem" },
          }}
        >
          Grab The Chances & Invest in your future
        </Typography>
        <MainBtn
          sx={{
            width:{md:'150px', lg: "306px" } ,
            height: {md:'40px', lg: "62px" }  ,
            backgroundColor: "light.main",
            borderColor:'light.main',
            color: "primary.main",
            fontSize: { lg: "1.5rem" },
          }}
        >
          get started
        </MainBtn>
      </Box>
    </HeaderWraper>
  );
};

export default Header;
