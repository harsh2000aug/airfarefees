import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer.component";
import Header from "../../components/header/Header.component";

const Layout = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Header />
      {/* {props.children} */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
