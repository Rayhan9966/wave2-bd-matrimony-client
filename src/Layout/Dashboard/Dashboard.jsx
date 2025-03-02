import { FaAddressBook, FaAddressCard, FaEdit, FaHistory, FaHome, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import {   FaBackward, FaDatabase, FaUsers } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import useView from "../../Hooks/useView";
import useAdmin from "../../Hooks/useAdmin";
// import { PiFacebookLogoThin } from "react-icons/pi";


const Dashboard = () => {
    const [view]=useView();
    //todo get isadmin friom database
    const [isAdmin]= useAdmin();

    return (
        <div className='flex'>
        <div className='w-64 min-h-screen bg-indigo-400'>
            <ul className="menu p-4 gap-2">
           {
            isAdmin ?<>
                
                    {/*  <li><NavLink to='/dashboard/adminedit'> <FaUsers></FaUsers> Admin Edit Bio Data</NavLink></li> */}
                <li><NavLink to='/dashboard/adminhome'><FaUserAlt></FaUserAlt> Admin Home</NavLink></li>
                <li><NavLink to='/dashboard/users'><FaUsers></FaUsers> Manage Users</NavLink></li>
                <li>
        <Link to='/dashboard/view'>

          <FaUsers className="mr-2 font-2xl"></FaUsers>
          User Favourite
          <div className="badge badge-primary border-l-indigo-600">+{view.length}</div>
        </Link>
      </li>
                {/* <li><NavLink to='/dashboard/addbiodata'><FaDatabase></FaDatabase>Add BioData</NavLink></li> */}
                {/* <li><NavLink to='/dashboard/addbiodata'><FaList></FaList>Add BioData</NavLink></li> */}
                {/* <li><NavLink to='/dashboard/addbio'><FaDatabase></FaDatabase>Add BioData</NavLink></li>
                <li><NavLink to='/dashboard/editbiodata'><FaEdit></FaEdit>Edit BioData</NavLink></li> */}
                <li><NavLink to='/dashboard/premium'><FaAddressCard></FaAddressCard>Approved Premium</NavLink></li>


                <li><NavLink to='/'><FaAddressBook></FaAddressBook>Approved Contact Request</NavLink></li>
                
            </>:
            <>
                 {/* <li>
                    <NavLink to='/'> <FaUsers></FaUsers>Edit Bio Data</NavLink></li>
                <li><NavLink to='/allbiodata'><FaDatabase></FaDatabase>View BioData</NavLink></li>
                <li><NavLink to='/'><FaMobileAlt></FaMobileAlt>My Contact Request</NavLink></li>
              
                <li><NavLink to='/'><FaDatabase></FaDatabase>Faviorite BioData</NavLink></li>
                <li><NavLink to='/'><FaSignOutAlt></FaSignOutAlt>Logout</NavLink></li> */}
            </>
           }

             {/* /* shared nav link */}

                <div className="divider"></div>

                <li><NavLink to='/'><FaBackward></FaBackward>Go to Home</NavLink></li>
                <li><NavLink to='/dashboard/userhome'><FaHome></FaHome>UserHome</NavLink></li>
                <li><NavLink to='/dashboard/addbio'><FaDatabase></FaDatabase>Add BioData</NavLink></li>
                <li><NavLink to='/dashboard/editbiodata'><FaEdit></FaEdit>Edit BioData</NavLink></li>
                <li><NavLink to='/dashboard/payhistory'><FaHistory></FaHistory>Payment History</NavLink></li>
                {/* <li><NavLink to='/dashboard/contact'><FaEnvelope></FaEnvelope>Contact</NavLink></li> */}
                <li><NavLink to='/'><FaSignOutAlt></FaSignOutAlt>Logout</NavLink></li>
                
            </ul>

        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;