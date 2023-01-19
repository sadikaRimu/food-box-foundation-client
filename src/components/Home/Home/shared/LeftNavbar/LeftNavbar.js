import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider';
import logotext from '../../../../../assets/icons/small_icon.png';

const LeftNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const menuItems = (
      <React.Fragment>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/member">Members</Link>
        </li>
        <li>
          <Link to="/blog">Blogs</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <a href="/donate">
            <button className="btn btn-primary btn-md rounded-none bg-gradient-to-r from-cyan-500 to-blue-700 border-0 hover:bg-gradient-to-l from-cyan-500 to-blue-500 text-white">
              Donate Now
            </button>
          </a>
        </li>

        {user && 
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {/* <li>
              <button onClick={handleLogout}>Sign Out</button>
            </li> */}
          </>
        }
      </React.Fragment>
    );
    return (
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img className="w-44 h-16" src={logotext} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        {user?.uid && (
          <label
            htmlFor="dashboard-drawer"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        )}
      </div>
    );
};

export default LeftNavbar;