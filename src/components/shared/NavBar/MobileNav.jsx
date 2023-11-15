import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../assets/images/home/logo.png";
import Cart from "../../../assets/images/home/cart.png";
import Language from "../../../assets/images/home/lang.png";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import { Box, InputBase, Stack, alpha, styled } from "@mui/material";
import NavLink from "../../../UI/NavLink";
import MainBtn from "../../../UI/MainBtn";
import { useState } from "react";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // ui
  const MobileContent = styled("nav")(({ theme }) => ({
    height: "100vh",
    width: "80%",
    boxShadow: "5px 10px 18px #888888",
    position: "fixed",
    top: "0",

    left: openMenu ? "0" : "-100%",
    transition: "left 0.2s linear",
    zIndex: "3",
    background: theme.palette.light.main,
    [theme.breakpoints.up("lg")]: {
      display: "none",
      // visibilty:'hidden'
    },
  }));
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
      <Box
        sx={{
          padding: "20px 0 20px 20px",
          display: { xs: "flex", lg: "none" },
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <MenuIcon />
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for anything"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>

      {/* menue */}
      <MobileContent>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Box sx={{ padding: "10px " }}>
            <img src={Logo} alt="logo" height="50px" />
          </Box>

          <Box
            sx={{ cursor: "pointer", paddingRight: "50px " }}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <CloseIcon />
          </Box>
        </Stack>
        <Stack direction="column" spacing={10} sx={{ padding: "50px" }}>
          <NavLink sx={{ fontSize: "20px" }}>categories</NavLink>

          <NavLink sx={{ fontSize: "20px" }}>teach on zaheen </NavLink>
          <NavLink sx={{ fontSize: "20px" }}>contact us</NavLink>
          <Box>
            <img src={Cart} alt="cart" />
          </Box>
          <Stack direction="row" spacing={2}>
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
      </MobileContent>
    </>
  );
};

export default MobileNav;
