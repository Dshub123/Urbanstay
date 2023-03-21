import { useEffect } from 'react';
import AdminNavbar from '../../components/Header/AdminNav';
import AdminDashboard from '../DAshboard/AdminDashboard'
const AdminHome = () => {
    const adminhome = () => {

        return (
            <>
                <AdminNavbar></AdminNavbar>
                <AdminDashboard />
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
