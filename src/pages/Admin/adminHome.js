import { useEffect } from 'react';
import AdminNavbar from '../../components/Header/AdminNav';
import AdminDashboard from '../DAshboard/AdminDashboard'
const AdminHome = () => {
    const adminhome = () => {

        return (
            <>
                <AdminNavbar></AdminNavbar>
                <br></br>
                <br></br>
                <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
                <AdminDashboard/>
            </>
        )
    }

    useEffect(() => {
        adminhome()
    }, [])
    return (
        <>
            {adminhome()}
        </>
    )
}
export default AdminHome;
