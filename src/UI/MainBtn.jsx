import { Button, styled } from "@mui/material";

const AppButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  border: "solid 1px ",
  borderRadius: "5px",
  boxShadow: "none",
  height: "30px",
  fontSize: "14px",
  fontWeight: "500",
  textTransform: "capitalize",
  fontFamily:'cairo',

  "&:hover ": {
    
    color: theme.palette.light.main,
    borderColor:theme.palette.primary.main,
  },
 
}));
function MainBtn({ children, ...rest }) {
  return (
    <AppButton variant="contained" {...rest} >
      {children}
    </AppButton>
  );
}

export default MainBtn;
