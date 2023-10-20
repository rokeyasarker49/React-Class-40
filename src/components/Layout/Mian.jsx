import { Outlet } from "react-router-dom";
import  Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <>
       <h1>Hello I am from main page</h1> 
       <Header></Header>

       <Outlet></Outlet>

       <Footer></Footer>
       </>
    );
};

export default Main;