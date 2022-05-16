import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-Sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className=' text-2xl font-bold text-purple-500'>Wellcome to your Dashboard</h2>
                <Outlet />


            </div>
            <div class="drawer-side">
                <label for="dashboard-Sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appoinments</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;