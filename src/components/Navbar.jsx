import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FiLogOut, FiMenu, FiX, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
    document.documentElement.setAttribute("data-theme", !darkTheme ? "dark" : "light");
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold underline"
      : "hover:text-blue-500 transition";
console.log(user)
  return (
    <nav className="bg-gray-100 text-gray-800 border-b border-gray-300 shadow-sm">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo + Theme Toggle */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://i.ibb.co/j97kPPM1/hobbyhub.png" alt="logo" className="h-6 w-6" />
            <span className="text-2xl font-bold text-blue-700">HobbyHub</span>
          </Link>
          <button onClick={handleThemeToggle} className="text-xl text-blue-600 hover:text-blue-800">
            <FiMoon />
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/groups" className={navLinkStyle}>All Groups</NavLink>
          {user && (
            <>
              <NavLink to="/createGroup" className={navLinkStyle}>Create Group</NavLink>
              <NavLink to="/myGroups" className={navLinkStyle}>My Groups</NavLink>
            </>
          )}
        </div>

        {/* Auth Buttons / Profile */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          {!user ? (
            <>
              <NavLink
  to="/login"
  className="btn btn-outline btn-md rounded-lg text-md font-medium"
      >
        Login
      </NavLink>

      <NavLink
        to="/register"
        className="btn btn-primary btn-md rounded-lg text-md font-medium"
      >
        Register
      </NavLink>

            </>
          ) : (
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full border-2 cursor-pointer"
              />
              {/* Hover Dropdown */}
              <div className="absolute hidden group-hover:block bg-white text-black text-sm p-3 rounded shadow-md right-0  z-50 w-44 transition-all duration-300 ease-in-out">
                <p className="mb-2 font-semibold">{user.displayName}</p>
                <button
                  onClick={logout}
                  className="text-red-600 hover:underline flex items-center"
                >
                  <FiLogOut className="mr-1" /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 px-4 flex flex-col pb-4 text-lg space-y-3 text-gray-800">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/groups" className={navLinkStyle}>All Groups</NavLink>
          {user && (
            <>
              <NavLink to="/createGroup" className={navLinkStyle}>Create Group</NavLink>
              <NavLink to="/myGroups" className={navLinkStyle}>My Groups</NavLink>
            </>
          )}
          {!user ? (
            <>
              <NavLink to="/login" className={navLinkStyle}>Login</NavLink>
              <NavLink to="/register" className={navLinkStyle}>Register</NavLink>
            </>
          ) : (
            <div className="mt-1">
              <p>{user.displayName}</p>
              <button
                onClick={logout}
                className="text-red-500 hover:underline flex items-center mt-1"
              >
                <FiLogOut className="mr-1" /> Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
