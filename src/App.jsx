import Home from "./Pages/Home";
import MainLayOut from "./rootLayouts/MainLayOut";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
 
  return <RouterProvider router={router} />;
}

export default App;
