import { Typography, styled } from "@mui/material";

const Link = styled(Typography)(() => ({
    fontSize: "14px",
    fontFamily: "cairo",
    textTransform: "capitalize",
    fontWeight: "600",
  }));
const NavLink = ({ children, ...rest }) => {
  
  return (
    <Link {...rest}>
      {children}
    </Link>
  )
}

export default NavLink
