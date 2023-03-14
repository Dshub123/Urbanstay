import OwnerDashboard from "../../pages/DAshboard/OwnerDashboard";
import UpdateProfile from "../../pages/User/UpdateProfile/updateProfile";
import OwnerNavbar from "../Header/OwnerNav";

export default function Owner(){
    return(
        <>
        <OwnerNavbar/>
        <OwnerDashboard/>
        </>
    );
}