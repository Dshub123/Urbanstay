import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ProfileCard=()=>{
    const [state, setEmail] = useState(sessionStorage.getItem("values"))
    const [Role, setRole] = useState(sessionStorage.getItem("role"))
    const [user, setUser] = useState(sessionStorage.getItem("data"));
    const [Mobile, setMobile] = useState(false)
    console.log(user);
    //Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(    
        <>
            <div className="container">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img 
                                src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?b=1&s=170667a&w=0&k=20&c=9cS9Dj2jKbJGqfI0X0U-jZNURFc-foLzDm1Ls-Q_fgo=" 
                                alt="profile-pic"/>

                        </div>
                        <div className="col-md-6">
                            <div className="profileHead">
                                <b><h5 style={{color:"steelblue"}}>{state}</h5></b>
                                <h6 style={{color:"steelblue"}}>{Role}</h6>

                            </div>
                        </div>
                    <Button variant="light" onClick={handleShow} style={{width:"10%", height:"7%"}}>Edit Profile</Button>
                    </div>
                </form>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        </>
    )
}

export default ProfileCard;