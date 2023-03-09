import Dashboard from "../../pages/DAshboard/dashboard";
import OwnerNavbar from "../Header/OwnerNav";

export default function Owner(){
    return(
        <>
        <OwnerNavbar/>
        <br></br>
        <br></br>
        <h1 style={{textAlign : "center"}}>Owner Dashboard</h1>
        <Dashboard/>
        </>
    );
}