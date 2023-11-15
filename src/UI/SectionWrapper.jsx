import { styled } from "@mui/material";

function SectionWrapper({ children, ...rest }) {
  const Wrapper = styled("section")(({ theme }) => ({
    padding: "20px 0",
    margin: "0 auto",
    width: "95%",
    textAlign: "center",

    [theme.breakpoints.up("sm")]: {
      width: "90%",
      padding: "30px 0",
    },

    [theme.breakpoints.up("md")]: {
      width: "85%",
      padding: "40px 0",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      padding: "50px 0",
    },
  }));
  return <Wrapper {...rest}>{children}</Wrapper>;
}

export default SectionWrapper;
