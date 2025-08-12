import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2'
const menuItems = [
  { name: 'Homepage', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'MySelf', path: '/myself' },
];

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged out successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.error('Logout error:', error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to log out!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });
  };

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4 h-16">
      {/* Left: Hamburger for mobile & Logo for desktop */}
      <div className="navbar-start">
        {/* Mobile hamburger */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? 'font-bold text-primary' : undefined
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop logo */}
        <Link to="/" className="hidden lg:flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto max-h-full"
          />
        </Link>
      </div>

      {/* Center: Logo for mobile & Menu for desktop */}
      <div className="navbar-center">
        {/* Mobile logo - centered */}
        <Link to="/" className="lg:hidden flex items-center justify-center h-full">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto max-h-full"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex menu menu-horizontal px-1 space-x-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold text-primary py-2 px-4'
                    : 'py-2 px-4 hover:text-primary transition-colors'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Actions */}
      <div className="navbar-end gap-2">
        {/* Search button */}
        <button className="btn btn-ghost btn-circle" title="Search">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Notifications */}
        <button className="btn btn-ghost btn-circle" title="Notifications">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {/* User avatar */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full bg-neutral-focus text-neutral-content flex items-center justify-center">
              <span className="font-semibold">U</span>
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
            <li><Link to="/profile">Profile</Link></li>

            {!user && <li><Link to="/login">Login</Link></li>}
            {!user && <li><Link to="/signUp">SignUp</Link></li>}
            {user && <div> <li><button onClick={handleLogOut}>Logout</button></li><Link to="/bookings">My Bookings</Link>
            </div>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;