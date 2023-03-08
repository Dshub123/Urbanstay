import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.css";
import "./Error404.css";
const ErrorPage = () => {  
  return (
    <>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery.  Click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button variant="outline-primary">Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};


export default ErrorPage;
