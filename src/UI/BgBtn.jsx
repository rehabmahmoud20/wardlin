import { Button, styled } from "@mui/material";

const AppButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.light.main,
  borderRadius: "5px",
  boxShadow: "none",
  width:'306px',
  height: "45px",
  fontSize: "18px",
  fontWeight: "500",
  textTransform: "capitalize",
  fontFamily:'cairo',

 
}));
function BgBtn({ children, ...rest }) {
  return (
    <AppButton variant="contained" {...rest} >
      {children}
    </AppButton>
  );
}

export default BgBtn;
