import { Outlet } from "react-router-dom";
import Nav from "../components/shared/NavBar/Nav";
import Footer from "../components/shared/footer/Footer";

const MainLayOut = () => {
  return (
    <>
      <Nav />
      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayOut;
