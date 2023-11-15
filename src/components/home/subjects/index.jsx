
import BaseHeading from "../../../UI/BaseHeading";
import SubjectItem from "./SubjectItem";
import { Grid } from "@mui/material";
import SectionWrapper from "../../../UI/SectionWrapper";
import {subjects} from "../../../../utilities/subjects"

const Subjects = () => {
 
  

  
 
  return (
    <SectionWrapper >
      <BaseHeading>top subjects</BaseHeading>
      <Grid container direction="row" spacing={4}>
        {subjects &&
          subjects.length > 0 &&
          subjects.map((subj) => (
            <Grid item xs={12} sm={6} lg={4} key={subj.id}>
              <SubjectItem  subject={subj} />
            </Grid>
          ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Subjects;
