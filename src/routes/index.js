import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import SignIn from "../pages/User/SignIn/SignIn";
import SignUp from "../pages/User/SignUp/SignUp";
import ContactUs from "../pages/HomePage/ContactUs";
import AboutUs from "../pages/HomePage/AboutUs";
import AdminHome from "../pages/Admin/adminHome";
import ErrorPage from "../pages/ErrorPages/Error404";
import Checkout from "../pages/PaymentPage";
import Users from "../pages/Tables/User";
import Tenant from "../components/Tenant/Tenant";
const USER_ROLE = {
    TENANT: "Tenant",
    OWNER: "Owner",
    ADMIN: "Admin",
};

const CURRENT_USER_ROLE = sessionStorage.getItem("role");


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<PublicElement><Home /></PublicElement>}>
                </Route>
                <Route
                    path="/signin"
                    element={<PublicElement><SignIn /></PublicElement>}>
                </Route>
                <Route
                    path="/signup"
                    element={<PublicElement><SignUp /></PublicElement>}>
                </Route>
                {/* <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/updateProfile" element={<UpdateProfile />}></Route> */}
                <Route
                    exact path="/contact"
                    element={<PublicElement><ContactUs /></PublicElement>}>
                </Route>
                <Route
                    exact path="/about"
                    element={<PublicElement><AboutUs /></PublicElement>} />
                <Route
                    exact path="/admin"
                    element={<AdminElement><AdminHome /></AdminElement>} />
                <Route
                    exact path="/admin/users"
                    element={<AdminElement><Users /></AdminElement>} />
                {/* Room details Page route */}
                {/* <Route exact path="/room/:id" element={<RoomDetails/>}/> */}
                <Route
                    exact path="/checkout"
                    element={<TenantElement><Checkout /></TenantElement>} />
                <Route
                    exact path="/tenant"
                    element={<TenantElement><Tenant /></TenantElement>} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>

        </BrowserRouter>
    )
}

function PublicElement({ children }) {
    return <>{children}</>;
}

function TenantElement({ children }) {
    if (CURRENT_USER_ROLE == USER_ROLE.TENANT) {
        return <>{children}</>;
    }
    else {
        return <><ErrorPage /></>
    }
}
function OwnerElement({ children }) {
    if (CURRENT_USER_ROLE == USER_ROLE.OWNER) {
        return <>{children}</>;
    }
    else {
        return <><ErrorPage /></>
    }
}
function AdminElement({ children }) {
    if (CURRENT_USER_ROLE == USER_ROLE.ADMIN) {
        return <>{children}</>;
    }
    else {
        return <><ErrorPage /></>
    }
}

export default Router;