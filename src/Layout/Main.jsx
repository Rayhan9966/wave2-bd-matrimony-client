import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared folder/Footer";
import NavBar from "../Pages/Shared folder/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;