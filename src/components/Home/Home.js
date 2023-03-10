import React from "react";
import Featured from "../../pages/HomePage/featured/Featured";
import HomeNavbar from "../Header/HomeNavBar";
import FeaturedProperties from '../../pages/HomePage/featuredProperties/FeaturedProperties';
import MailList from "../../pages/HomePage/mailList/MailList";
// import HomeMain from "../../pages/HomePage/HomeMain";
import "./home.css";
import AboutUsCards from "../../pages/HomePage/AboutUsCards";
// import { Button, Form } from "react-bootstrap";

const Home = () => {
  
  return (
    <>
      <HomeNavbar />
      {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
      <Featured></Featured>
      <br />
      <FeaturedProperties></FeaturedProperties>
      <br/>
      <hr/>
      <h3 style={{textAlign:"center", color:""}}>About Us</h3>
      <AboutUsCards/>
      <br />
      <MailList></MailList>
      {/* <HomeMain myData={data}/> */}
    </>
  );
}



export default Home;