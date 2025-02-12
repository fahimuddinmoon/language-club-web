import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './ContextAPI';

const NavBer = () => {
    const { user, logout, dark, setDark } = useContext(AuthContext)
    console.log(dark)
    return (
        <div className="navbar bg-black text-white fixed pb-5 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow">
                        <NavLink to='/' className='text-sm font-bold text-black '>Home</NavLink>
                        <NavLink to='/find-tutors' className='text-sm font-bold text-black '>Find tutors</NavLink>
                        <NavLink to='/add-tutorials' className='text-sm font-bold text-black '>Add Tutorials</NavLink>
                        <NavLink to='/my-tutorials' className='text-sm font-bold text-black '>My Tutorials</NavLink>
                        <NavLink to='/my-booked-tutors' className='text-sm font-bold text-black '>My booked tutors</NavLink>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl  sm:text-4xl font-extrabold">Language Course</Link>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal px-1 mt-3">
                    <NavLink to='/' className='text-sm font-bold mx-2 px-2 '>Home</NavLink>
                    <NavLink to='/find-tutors' className='text-sm font-bold  mx-2 px-2'>Find tutors</NavLink>
                    <NavLink to='/add-tutorials' className='text-sm font-bold  mx-2 px-2'>Add Tutorials</NavLink>
                    {
                        user &&
                        <div>
                            <NavLink to='/my-tutorials' className='text-sm font-bold  mx-2 px-2'>My Tutorials</NavLink>
                            <NavLink to='/my-booked-tutors' className='text-sm font-bold  mx-2 px-2'>My booked tutors</NavLink>
                        </div>
                    }
                </ul>
            </div>
            <div className="navbar-end mt-3">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input onClick={() => setDark(!dark)} type="checkbox" className="toggle" defaultChecked />
                    </label>
                </div>
                {
                    user ?
                        <span className='flex justify-center items-center'>
                            <div className="dropdown dropdown-end justify-center items-center">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            referrerPolicy='noreferrer'
                                            title={user?.displayName}
                                            alt=""
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        {user?.displayName}
                                    </li>
                                </ul>
                            </div>
                            <Link onClick={logout} className="btn mx-3 text-sm font-bold text-gray-600">log Out</Link>
                        </span>
                        :
                        <Link to='/login' className="btn mx-3 text-sm font-bold text-gray-600">login</Link>
                }




            </div>
        </div>
    );
};

export default NavBer;