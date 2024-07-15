import { Outlet } from "react-router-dom";
import { Header } from "@/components";
const Layout = () => {
    return (
        <div className='max-w-[1240px] mx-auto w-full px-4 lg:px-8 2xl:px-0'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};
export default Layout;
