import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../.firebase.init';
import { signOut } from 'firebase/auth';





const Header = () => {

    const [user, loading, error] = useAuthState(auth);


    const [open, setOpen] = useState(false);

    const handleTaggler = () => {
        setOpen(open ^ 1);
    }
    const handleSingOut = () => {
        signOut(auth);
        oneHeaderSelected();
    }

    const oneHeaderSelected = () => {
        setOpen(false);
    }


    let location = useLocation();

    const navigate = useNavigate();

    const handleImageClicked = () => {
        navigate('/home');
    }

    return (
        <div className='sticky top-0 z-50'>

            <div className='bg-black relative'>

                <nav className='flex items-center justify-between mx-5 lg:mx-5 xl:mx-20'>

                    <div>
                        <img className='cursor-pointer' onClick={handleImageClicked} width={200} src="logo.png" alt="" />
                    </div>

                    <div className={` ${open ? `
                    w-full bg-black top-20   left-0 absolute flex flex-col pb-3

                    lg:w-auto lg:bg-black lg:top-auto  lg:left-auto lg:static lg:flex lg:flex-row

                    gap-3  items-center  tracking-widest font-bold text-white` : `
                    hidden lg:flex gap-3  items-center  tracking-widest font-bold text-white`}`}  >



                        <Link onClick={oneHeaderSelected} className={`  ${location.pathname === "/home" ? `text-yellow-500` : `text-white`}`} to='/home'>HOME</Link>

                        <Link onClick={oneHeaderSelected} className={`  ${location.pathname === "/inventory" ? `text-yellow-500` : `text-white`}`} to='/inventory'>INVENTORY</Link>


                        {/* 
                        <Link className={`  ${location.pathname === "/manage-items" ? `text-yellow-500` : `text-white`}`} to='/manage-items'>MANAGE ITEMS</Link>
                         */}


                        {
                            user?.uid ? <Link onClick={oneHeaderSelected} className={`  ${location.pathname === "/my-items" ? `text-yellow-500` : `text-white`}`} to='/my-items'>MY ITEMS</Link> : ""
                        }
                        {
                            user?.uid ? <Link onClick={oneHeaderSelected} className={`  ${location.pathname === "/add-items" ? `text-yellow-500` : `text-white`}`} to='/add-items'>ADD ITEMS</Link> : ""
                        }







                        <Link onClick={oneHeaderSelected} className={`  ${location.pathname === "/about" ? `text-yellow-500` : `text-white`}`} to='/about'>ABOUT</Link>
                        <Link onClick={oneHeaderSelected} className={`  ${location.pathname === "/contact-us" ? `text-yellow-500` : `text-white`}`} to='/contact-us'>CONTACT US</Link>

                        {
                            user?.uid ?

                                <h1 className='cursor-pointer bg-blue-600 px-2 py-1 rounded-lg  ' onClick={handleSingOut}>LOGOUT</h1>
                                :
                                <Link onClick={oneHeaderSelected} className={`  ${location.pathname === "/login" ? `text-yellow-500` : `text-white`}`} to='/login'>LOG IN</Link>
                        }

                        {
                            user?.uid ? '' :
                                <Link onClick={oneHeaderSelected} className={`bg-blue-600 px-2 py-1 rounded-lg  ${location.pathname === "/signup" ? `text-yellow-500` : `text-white`}`} to='/signup'>SING UP</Link>
                        }

                        {
                            user?.uid ?

                                <>
                                    {
                                        user?.photoURL ? <img title={user.displayName} width={40} className='cursor-pointer' style={{ borderRadius: '50%' }} src={user.photoURL} alt="" srcset="" /> : <FontAwesomeIcon style={{ borderRadius: '50%' }} className='bg-slate-600 p-3' icon={faUser} />
                                    }
                                </>
                                :
                                ""
                        }


                    </div>


                    <div className='block lg:hidden'>
                        {
                            open ? <FontAwesomeIcon className='text-white' onClick={handleTaggler} icon={faXmark} size="xl" /> :
                                <FontAwesomeIcon className='text-white' onClick={handleTaggler} icon={faBars} size="xl" />
                        }
                    </div>



                </nav>

            </div>


        </div>
    );
};

export default Header;