import { Box } from "@mui/material";
import BaseHeading from "../../../UI/BaseHeading";
import SectionWrapper from "../../../UI/SectionWrapper";
import Testimonial from "./Testimonial";

import Carousel from "react-grid-carousel";
import { testimonials } from "../../../../utilities/subjects";

const Testimonials = () => {
  
  
  return (
    <Box >
      <SectionWrapper>
        <BaseHeading sx={{ position: "relative" }}>
          What Students Say
        </BaseHeading>
      
         <Carousel cols={2}  rows={1} gap={10} loop  >
          {testimonials &&
            testimonials.length > 0 &&
            testimonials.map((item, i) => (
              <Carousel.Item key={item.id}>
                           <Testimonial testimonial={item}/>
              </Carousel.Item>
            ))}
        </Carousel>

      </SectionWrapper>
    </Box>
  );
};

export default Testimonials;
