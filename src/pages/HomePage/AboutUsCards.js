import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AboutUs.css";

export default function AboutUsCards(){
    return(
        <>
                   <Row style={{margin:"2rem",width:"90%",padding:"1rem"}} id="rowslide1">
            
            <Col sm={4}>
            <img
                src="https://images.unsplash.com/photo-1623625434462-e5e42318ae49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="fpImg"
            />
            </Col>
            <Col sm={8}>
                <p class="text-center fw-bold lh-lg" style={{padding:"3rem"}}>
                Our mission is to provide travelers
                with affordable and comfortable 
                accommodation options all around 
                the world. We understand that 
                traveling can be expensive, 
                which is why we strive to 
                offer budget-friendly options 
                that don't compromise on quality.
                </p>
            </Col>
        </Row>
        <Row style={{margin:"2rem",width:"90%",padding:"1rem"}} id="rowslide2">
            
            <Col sm={8}>
            <p class="text-center fw-bold lh-lg" style={{padding:"3rem"}}>
            Our website features a wide selection of hostels, 
            ranging from cozy and intimate spaces to larger, 
            more bustling locations. We have options for solo travelers 
            all with the aim of providing a unique and enjoyable experience.
                </p>
            </Col>
            <Col sm={4}>
            <img
                src="https://media.istockphoto.com/id/1303589705/photo/stack-of-fresh-white-bath-towels-on-bed-sheet-in-modern-hotel-bedroom-interior-with-window-on.jpg?b=1&s=170667a&w=0&k=20&c=lXMPOh-29QvziANL1_cVPt-2KSo19FOrZJX_LLHLSOg="
                alt=""
                className="fpImg"
            />
            </Col>
        </Row>
        <Row style={{margin:"2rem",width:"90%",padding:"1rem"}} id="rowslide3">
            
            <Col sm={4}>
            <img
                src="https://media.istockphoto.com/id/1414156193/photo/modern-college-dorm-room-with-cardboard-boxes-and-luggages.jpg?b=1&s=170667a&w=0&k=20&c=sZ3qh4FWpc12sOBb-Pw1KtEmPHhXgiIM-H8PmbD2uio="
                alt=""
                className="fpImg"
            />
            </Col>
            <Col sm={8}>
                <p class="text-center fw-bold lh-lg" style={{padding:"3rem"}}>
                We pride ourselves on our user-friendly platform that 
                makes it easy for you to browse and book your preferred hostel. 
                Our team is dedicated to providing excellent customer service
                 and ensuring that your booking experience is hassle-free.
                </p>
            </Col>
        </Row>

        <hr/>
        <h3>Our Developers Team</h3>
        <Row style={{margin:"2rem",width:"90%",padding:"1rem"}}>
        <Col>
        <Card style={{ width: '12rem', border:"1px solid goldernrod"}}>
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
        <Card style={{ width: '12rem', border:"1px solid goldernrod"}}>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?b=1&s=170667a&w=0&k=20&c=9cS9Dj2jKbJGqfI0X0U-jZNURFc-foLzDm1Ls-Q_fgo=" />
        <Card.Body>
            <Card.Title><b><i>Piyush Gandhi</i></b></Card.Title>
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