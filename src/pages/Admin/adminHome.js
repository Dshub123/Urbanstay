import { useEffect } from 'react';
import AdminNavbar from '../../components/Header/AdminNav';
import Dashboard from '../DAshboard/dashboard'
const AdminHome = () => {
    const adminhome = () => {

        return (
            <>
                <AdminNavbar></AdminNavbar>
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
