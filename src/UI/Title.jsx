import { Typography, styled } from "@mui/material";

const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1rem",
  lineHeight: "48.72px",
  textTransform:'capitalize',
  color:theme.palette.light.main,
  [theme.breakpoints.up("md")]: {
    fontSize: "1.625rem",
  },

}));
function Title({ children, ...rest }) {
  return <TitleWrapper {...rest}>{children}</TitleWrapper>;
}

export default Title;
