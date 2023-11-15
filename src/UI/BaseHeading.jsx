import { Typography, styled } from "@mui/material";

function BaseHeading({ children, ...rest }) {
  const BaseHeader = styled(Typography)(({ theme }) => ({
    textTransform: "capitalize",
    fontSize: "1.25rem",
    marginBottom: "55px",
    fontWeight:'700',

    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },

    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "3rem",
    // },
  }));
  return (
    <BaseHeader variant="h2" component="h2" {...rest}>
      {children}
    </BaseHeader>
  );
}

export default BaseHeading;
