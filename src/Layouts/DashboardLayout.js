import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import MyProducts from '../Dashboard/MyProducts/MyProducts';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import AdminBoard from '../Pages/AdminBoard/AdminBoard';
import MyOrders from '../Pages/MyOrders/MyOrders';
import NavBar from '../Shared/NavBar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <NavBar></NavBar>
            <AdminBoard></AdminBoard>
            <MyOrders></MyOrders>
            <MyProducts></MyProducts>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;