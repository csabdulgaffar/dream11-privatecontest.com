import { Outlet } from "react-router-dom"
import Header from "./Header"
function Layout() {
    return (
        <div >


            <div className="">
                <Header />
            </div>
            <div   >
                <Outlet />

            </div>
            <div className="bg-gray-900 py-40 text-white items-center text-center mt-20">
                <div>Copyright @ csabdulgaffar@gmail.com</div>
            </div>
        </div>)
}

export default Layout