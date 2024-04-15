import { NavLink } from "react-router-dom"
function Header() {
    return (
        <>
            <div className=" flex-col flex md:flex-row justify-around p-5 items-center bg-red-700">
                <div className="text-2xl font-bold text-white py-2">
                    PrivateContest.com

                </div>
                <div className="flex flex-col md:flex-row gap-3 text-md">
                    <NavLink activeClassName="active" className="text-white font-bold " to="/">Contests List</NavLink>
                    <NavLink activeClassName="active" className="text-white font-bold " to="/add-contest">Add Contest</NavLink>
                </div>
                <div className="flex flex-col md:flex py-3 text-md ">
                    <NavLink activeClassName="active" className="text-white font-bold " to="/about">About Us</NavLink>

                </div>
            </div>
        </>
    )
}

export default Header