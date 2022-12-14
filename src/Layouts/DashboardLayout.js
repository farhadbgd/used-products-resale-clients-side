import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';

const DashboardLayout = () => {
    const { user, isLoading } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-40 text-base-content">

                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/admin">All Buyer & Seller</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/seller">My Products</Link></li>
                            </>
                        }
                        {
                            !isSeller && !isAdmin && <>
                                <li><Link to="/dashboard/buyer">My Orders</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default DashboardLayout;