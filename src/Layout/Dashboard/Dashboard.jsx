import { FaMobileAlt, FaSignOutAlt } from "react-icons/fa";
import {  FaDatabase, FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className='flex'>
        <div className='w-64 min-h-full bg-indigo-400'>
            <ul className="menu p-4 gap-2">
                <li>
                    <NavLink> <FaUsers></FaUsers>Edit Bio Data</NavLink></li>
                <li><NavLink><FaDatabase></FaDatabase>View BioData</NavLink></li>
                <li><NavLink><FaMobileAlt></FaMobileAlt>My Contact Request</NavLink></li>
              
                <li><NavLink><FaDatabase></FaDatabase>Faviorite BioData</NavLink></li>
                <li><NavLink><FaSignOutAlt></FaSignOutAlt>Logout</NavLink></li>
                
                <li></li>
            </ul>

        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;