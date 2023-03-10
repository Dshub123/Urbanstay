import HomeNavbar from "../../components/Header/HomeNavBar";
// import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";
import AboutUsCards from "./AboutUsCards";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import "./AboutUs.css";
const AboutUs = () => {
    return(
        <>
        <HomeNavbar/>
        <br/><br/>
        <AboutUsCards/>
        </>
    )
}

export default AboutUs;