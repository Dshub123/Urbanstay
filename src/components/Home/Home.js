import React from "react";
import Featured from "../../pages/HomePage/featured/Featured";
import HomeNavbar from "../Header/HomeNavBar";
import FeaturedProperties from '../../pages/HomePage/featuredProperties/FeaturedProperties';
import MailList from "../../pages/HomePage/mailList/MailList";
// import HomeMain from "../../pages/HomePage/HomeMain";
import "./home.css";

const Home = () => {
  const data = {
    name: "Urban Stay",
  };
  return (
    <>
      <HomeNavbar />
      <h3>Home Page</h3>
      <Featured></Featured>
      <br />
      <FeaturedProperties></FeaturedProperties>
      <br />
      <MailList></MailList>
      {/* <HomeMain myData={data}/> */}
    </>
  );
}



export default Home;