import { FaHome, FaMobileAlt, FaSignOutAlt } from "react-icons/fa";
import {  FaDatabase, FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className='flex'>
        <div className='w-64 min-h-screen bg-indigo-400'>
            <ul className="menu p-4 gap-2">
                <li>
                    <NavLink to='/'> <FaUsers></FaUsers>Edit Bio Data</NavLink></li>
                <li><NavLink to='/allbiodata'><FaDatabase></FaDatabase>View BioData</NavLink></li>
                <li><NavLink to='/'><FaMobileAlt></FaMobileAlt>My Contact Request</NavLink></li>
              
                <li><NavLink to='/'><FaDatabase></FaDatabase>Faviorite BioData</NavLink></li>
                <li><NavLink to='/'><FaSignOutAlt></FaSignOutAlt>Logout</NavLink></li>
                <div className="divider"></div>
                <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
            </ul>

        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;