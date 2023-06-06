import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="pattern-background"> 
        <>
            <Header/>
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </>
        </div>
    )
};

export default Layout;
