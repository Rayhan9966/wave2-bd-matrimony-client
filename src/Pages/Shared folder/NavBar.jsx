import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUsers } from "react-icons/fa6";
import useView from "../../Hooks/useView";


const NavBar = () => {
  const {user,logOut}=useContext(AuthContext);
  const [view]=useView();
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
.catch(error => console.log(error));

  }

    const navOptions=<>
    
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/biodata">Biodata</Link></li>
        <li><Link to="/allbiodata">All Biodata</Link></li>
        <li><a>About Us</a></li> 
        <li><a>DashBoard</a></li>
        <li><Link to='/dashboard/view'> 
        <FaUsers className="mr-2 font-2xl"></FaUsers> <div className="badge badge-primary border-l-indigo-600">+{view.length}</div></Link></li>
   
        
        {/* <li><Link to='/login'>Login</Link></li> */}
    
    </>
    return (
        <div>
           <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-40  bg-white text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navOptions} 
      </ul>
    </div>
<Link to='/'>
<img
              className="w-auto h-7 sm:h-8"
              style={{width:40, height:40, borderRadius: 40/ 2}} 
              src="/src/assets/New folder/bgimg/img1.jpg"
              alt=""
            /></Link>
    <Link to='/' className="btn btn-ghost text-xl">BdMatrimony</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
   { user ? <>
   <p>{user?.displayName}</p>
   <br />
   
        <div className="w-10 rounded-full">
          <img
          
            src={user?.photoURL} />
        </div>
     
    <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
   </> : <>
   <Link to ='/login' className="btn">Login</Link></>
   }
  </div>
</div> 
        </div>
    );
};

export default NavBar;