import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../rootLayouts/MainLayOut";
import Home from "../Pages/Home";
import SubjectDetails from "../components/home/subjects/SubjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
   
      
      
        children: [
          {
            path: "",
            element:<Home />,
          },
          {
            path: "/subject/:id",
            element: <SubjectDetails />,
          },
        ],
      
    
    
  },
]);
