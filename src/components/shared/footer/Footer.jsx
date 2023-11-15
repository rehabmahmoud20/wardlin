import { Box, Button, Grid, Typography } from "@mui/material";
import logo from "../../../assets/images/home/logo.png";
import SectionWrapper from "../../../UI/SectionWrapper";
import Title from "../../../UI/Title";
import { Link } from "react-router-dom";
import { about, support } from "../../../../utilities/footerLinks";
import Instgram from "../../../assets/icons/home/insta.png";
import face from "../../../assets/icons/home/facebook.png";
import twitter from "../../../assets/icons/home/twitter.png";
import youtube from "../../../assets/icons/home/youtube.png";
import Globe from "../../../assets/icons/home/Globe";

const titleStyle = {
  borderBottom: "1px solid ",
  borderColor: "primary.main",
  width: "fit-content",
  marginBottom: "10px",
width:'fit-content',
margin: {
  xs:'0 auto 10px',
  md:'0 0 10px'
} 
};
const gridItemStyle = {textAlign:{xs:'center',md:'start'}}
const Footer = () => {
  return (
    <Box
      component="div"
      varient="div"
      sx={{ backgroundColor: "black.main", color: "light.main" }}
    >
      <SectionWrapper sx={{ textAlign: "start", lineHeight: "26px" }}>
        <Grid container direction='row' justifyContent="center" spacing={2}>
          <Grid item xs={12} sx={gridItemStyle}  md={3}>
            <Box sx={{ marginBottom: "20px" }}>
              <img src={logo} alt="logo" height='50px'/>
            </Box>
            <Typography component="p" variant="p" sx={{ fontSize: "12px",width: {xs:'100%',md:'65%' }}}>
              Our website to fulfill customer demand by making them satisfied
              with growing their Knowledge.
            </Typography>
          </Grid>
          <Grid item  xs={12} sx={gridItemStyle} md={2}>
            <Title sx={titleStyle}>About</Title>
            {about.map((link) => (
              <Link key={link.id} to={link.path} className="footerLink">
                {link.link}
              </Link>
            ))}
          </Grid>

          <Grid item xs={12} sx={gridItemStyle} md={3}>
            <Title sx={titleStyle}>Support</Title>
            {support.map((link) => (
              <Link key={link.id} to={link.path} className="footerLink">
                {link.link}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sx={gridItemStyle} md={2}>
            <Title sx={titleStyle}>Follow us</Title>
            <Box sx={{ display: "flex", gap: "18px" ,justifyContent:{xs:'center',md:'start'}}}>
              <Link className="footerLink" to="" target="_blank">
                <img src={Instgram} alt="Instgram-icon" />
              </Link>
              <Link className="footerLink" target="_blank">
                <img src={twitter} alt="twitter-icon" />
              </Link>
              <Link className="footerLink" target="_blank">
                <img src={face} alt="face-icon" />
              </Link>
              <Link
                className="footerLink"
                to="https://www.youtube.com/"
                target="_blank"
              >
                <img src={youtube} alt="youtube-icon" />
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: "flex",
             
              flexDirection: {xs:'row',md:'column'},
             
              justifyContent: {
                xs:'center',
                md:'end'
              } ,
            }}
          >
            <Box>
              <Button
                variant="outlined"
                startIcon={<Globe />}
                sx={{
                  color: "light.main",
                  borderColor: "light.main",
                  borderRadius: "0",
                  textTransform: "capitalize",
                  width:'148px',
                  "&:hover": {
                    borderColor: "light.main",
                  },
                }}
              >
                english
              </Button>
            </Box>
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
};

export default Footer;
