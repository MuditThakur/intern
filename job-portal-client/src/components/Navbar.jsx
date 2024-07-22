import React, { useState } from 'react';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for authentication

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My jobs" },
    // { path: "/salary", title: "Salary Estimate" },
  ];

  return (
    <div>
      <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
          <a href="/" className='flex items-center gap-2 text-2xl text-black'>
            <img src="/images/icon2.jpeg" alt="InternsPortal Logo" width={29} height={30} />
            <span>InternsPortal</span>
          </a>
          {/* nav items for large screens */}
          <ul className='hidden md:flex gap-12'>
            {navItems.map(({ path, title }) => (
              <li key={path} className='text-base text-primary'>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Login / Signup / Logout */}
          {!isLoggedIn ? (
            <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
              <Link to="/login" className='py-2 px-5 border rounded'>Log in</Link>
              <Link to="/sign-up" className='py-2 px-5 border rounded bg-blue text-white'>Sign up</Link>
            </div>
          ) : (
            <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
              <button onClick={handleLogout} className='py-2 px-5 border rounded bg-red-500 text-white'>Log out</button>
            </div>
          )}
          {/* Mobile menu toggle */}
          <div className='md:hidden block'>
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBarsStaggered className='w-5 h-5 text-primary' />}
            </button>
          </div>
        </nav>
        {/* Mobile menu items */}
        {isMenuOpen && (
          <ul className='md:hidden flex flex-col gap-4 bg-cyan-400'>
            {navItems.map(({ path, title }) => (
              <li key={path} className='text-base text-primary'>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }>
                  {title}
                </NavLink>
              </li>
            ))}
            {!isLoggedIn ? (
              <>
                <li className='text-base text-primary'>
                  <Link to="/login">Log in</Link>
                </li>
                <li className='text-base text-primary'>
                  <Link to="/sign-up">Sign up</Link>
                </li>
              </>
            ) : (
              <li className='text-base text-primary'>
                <Link to="/logout" onClick={handleLogout}>Log out</Link>
              </li>
            )}
          </ul>
        )}
      </header>
    </div>
  );
}

export default Navbar;
