import { NavLink } from "react-router-dom"
function Header() {
    return (
        <div>
            <div className="flex justify-around p-5 items-center bg-red-700">
                <div className="text-3xl font-bold text-white">
                    PrivateContest.com

                </div>
                <div className="flex gap-4 text-xl">
                    <NavLink activeClassName="active" className="text-white font-bold " to="/">Contest List</NavLink>
                    <NavLink activeClassName="active" className="text-white font-bold " to="/add-contest">Add Contest</NavLink>
                </div>
                <div className="text-white font-bold ">
                    <NavLink activeClassName="active" className="text-white font-bold " to="/about">About Us</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Header