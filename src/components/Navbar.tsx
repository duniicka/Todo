import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
                <div className="flex-1 flex justify-between items-center">
                    <a href="#" className="text-xl">Company</a>
                </div>
                <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                            <li><NavLink to={"/"} className="md:p-4 py-3 px-0 block">Home</NavLink></li>
                            <li><NavLink to={"/Completed"} className="md:p-4 py-3 px-0 block">Completed</NavLink></li>
                            <li><NavLink to={"/Pending"} className="md:p-4 py-3 px-0 block">Pending</NavLink></li>
                            <li><NavLink to={"/AddTodo"} className="md:p-4 py-3 px-0 block md:mb-0 mb-2">Add Todo</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
