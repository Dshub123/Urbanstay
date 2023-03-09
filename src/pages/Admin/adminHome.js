import { useEffect } from 'react';
import AdminNavbar from '../../components/Header/AdminNav';
import Dashboard from '../DAshboard/dashboard'
const AdminHome = () => {
    const adminhome = () => {

        return (
            <>
                <AdminNavbar></AdminNavbar>
                <br></br>
                <br></br>
                <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
                <Dashboard></Dashboard>
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
