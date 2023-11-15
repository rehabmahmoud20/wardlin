import {  styled } from "@mui/material";
import { Link } from "react-router-dom";
import ImgChecker from "../../shared/ImgChecker";
import Logo from "../../../assets/images/home/logo.png";

const ItemWraper = styled("article")(({ theme }) => ({
    
  boxShadow:
    "2.9562783241271973px 4.927131652832031px 4.927131652832031px 0px rgba(86, 85, 85, 0.2)",
  "& img": {
    width: "100%",
  },
  "& a": {
    // textTransform: "capitalize",
    fontSize: "1.75rem",
    borderRadius: "0px 0px 5px 5px",
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    textAlign: "center",
    padding: "22px 0",
    width: '100%'
  },
}));
function SubjectItem({ subject }) {
  return (
    <ItemWraper>
          <ImgChecker imagePath={Logo}/> 

      <Link 
                  to={`subject/${subject.id}`}
                 
                >
                {subject.subject}
                </Link>
      
    </ItemWraper>
  );
}

export default SubjectItem;
