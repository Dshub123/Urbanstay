import HomeNavbar from "../../components/Header/HomeNavBar";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AboutUs = () => {
    return(
        <>
        <HomeNavbar/>
        <br/><br/>
        <h3>Our Developers Team</h3>
        <Row>
        <Col>
        <Card style={{ width: '15rem', border:"1px solid goldernrod"}}>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?b=1&s=170667a&w=0&k=20&c=9cS9Dj2jKbJGqfI0X0U-jZNURFc-foLzDm1Ls-Q_fgo=" />
        <Card.Body>
            <Card.Title><b><i>Shubham Diddi</i></b></Card.Title>
            <Card.Text>
                Team Lead
          </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '15rem', border:"1px solid goldernrod"}}>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?b=1&s=170667a&w=0&k=20&c=9cS9Dj2jKbJGqfI0X0U-jZNURFc-foLzDm1Ls-Q_fgo=" />
        <Card.Body>
            <Card.Title><b><i>Piyush Gandhi</i></b></Card.Title>
            <Card.Text>
                Team Member
          </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '15rem', border:"1px solid goldernrod"}}>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?b=1&s=170667a&w=0&k=20&c=4yOdpsESNHBHt13YdrgMBAbt6mxjsDOWKGUJw0CC-Zs=" />
        <Card.Body>
            <Card.Title><b><i>Dnyaneshwari Shinde</i></b></Card.Title>
            <Card.Text>
                Team Member
          </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '15rem', border:"1px solid goldernrod"}}>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?b=1&s=170667a&w=0&k=20&c=4yOdpsESNHBHt13YdrgMBAbt6mxjsDOWKGUJw0CC-Zs=" />
        <Card.Body>
            <Card.Title><b><i>Nilima Shirse</i></b></Card.Title>
            <Card.Text>
                Team Member
          </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '15rem', border:"1px solid goldernrod"}}>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?b=1&s=170667a&w=0&k=20&c=9cS9Dj2jKbJGqfI0X0U-jZNURFc-foLzDm1Ls-Q_fgo=" />
        <Card.Body>
            <Card.Title><b><i>Swapnil Deshmukh</i></b></Card.Title>
            <Card.Text>
                Team Member
          </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </>
    )
}

export default AboutUs;