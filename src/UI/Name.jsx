import { Typography, styled } from "@mui/material";

const NameWrapper = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1rem",
  lineHeight: "25px",
  textTransform:'capitalize',
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.375rem",
  },


}));
function Name({ children, ...rest }) {
  return <NameWrapper {...rest}>{children}</NameWrapper>;
}

export default Name;
