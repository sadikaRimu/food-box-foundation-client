import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import LeftNavbar from '../components/Home/Home/shared/LeftNavbar/LeftNavbar';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayoutRight = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <LeftNavbar></LeftNavbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu w-56 text-base-content">
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard/addBlog'>Add a New Blog</Link></li>
                        <li><Link to='/dashboard/manageBlog'>Manage Blog</Link></li>
                        <li><Link to='/dashboard/addEvent'>Add a New Event</Link></li>
                        <li><Link to='/dashboard/manageEvent'>Manage Events</Link></li>
                        <li><Link to='/dashboard/addGallery'>Add Gallery</Link></li>
                        <li><Link to='/dashboard/manageGallery'>Manage Gallery</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayoutRight;