import Logo from "../../../assets/images/home/logo.png";
import {
  Box,
  InputBase,
  Stack,
 
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "../../../assets/images/home/cart.png";
import Language from "../../../assets/images/home/lang.png";

import MainBtn from "../../../UI/MainBtn";
import MobileNav from "./MobileNav";
import NavLink from "../../../UI/NavLink";

const Nav = () => {

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "solid 1px ",
    borderColor: theme.palette.black.main,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "598px",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <>
      <MobileNav />
      <Stack
        direction="row"
        justifyContent='space-between'
        sx={{
        
padding:'0 10px',
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Box sx={{padding:'10px 0'}}>
          <img src={Logo} alt="logo"  height='50px'/>
        </Box>

        <Stack direction="row" alignItems="center" spacing={2}>
          <NavLink>categories</NavLink>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for anything"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <NavLink>teach on zaheen </NavLink>
          <NavLink>contact us</NavLink>
          <img src={Cart} alt="cart" />
          <MainBtn>sign in</MainBtn>
          <Box
            sx={{
              border: "solid 1px",
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Language} alt="Language" />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Nav;
