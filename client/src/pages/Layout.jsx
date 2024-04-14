import { Outlet } from "react-router-dom"
import Header from "./Header"
function Layout() {
    return (
        <div className="flex flex-col">


            <div>
                <Header />
            </div>
            <div className="min-h-screen p-6">
                <Outlet />

            </div>
            <div className="bg-gray-900 py-40 text-white items-center text-center">
                <div>Copyright @ csabdulgaffar@gmail.com</div>
            </div>
        </div>)
}

export default Layout