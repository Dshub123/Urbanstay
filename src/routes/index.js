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

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}>
                </Route>
                <Route
                    path="/signin"
                    element={<SignIn />}>
                </Route>
                <Route
                    path="/signup"
                    element={<SignUp />}>
                </Route>
                {/* <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/updateProfile" element={<UpdateProfile />}></Route> */}
                <Route
                    exact path="/contact"
                    element={<ContactUs />}>
                </Route>
                <Route
                    exact path="/about"
                    element={<AboutUs />} />
                <Route
                    exact path="/admin"
                    element={<AdminHome />} ></Route>
                <Route
                    exact path="/admin/users"
                    element={<Users />} />
                {/* Room details Page route */}
                {/* <Route exact path="/room/:id" element={<RoomDetails/>}/> */}
                <Route
                    exact path="/checkout"
                    element={<Checkout />} />
                <Route
                    exact path="/tenant"/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>

        </BrowserRouter>
    )
}

// function PublicElement({ children }) {
//     return <>{children}</>;
// }

// function TenantElement({ children }) {
//     if (CURRENT_USER_ROLE == USER_ROLE.TENANT) {
//         return <>{children}</>;
//     }
//     else {
//         return <><ErrorPage /></>
//     }
// }
// function OwnerElement({ children }) {
//     if (CURRENT_USER_ROLE == USER_ROLE.OWNER) {
//         return <>{children}</>;
//     }
//     else {
//         return <><ErrorPage /></>
//     }
// }
// function AdminElement({ children }) {

//     if (CURRENT_USER_ROLE == "Admin") {

//         return <>{children}</>;
//     }
//     else {
//         return <><ErrorPage /></>
//     }
// }

export default Router;