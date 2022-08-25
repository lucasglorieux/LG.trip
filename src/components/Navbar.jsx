import React, {useState} from 'react'

import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {RiMenu4Fill} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'
import {Link} from 'react-scroll';



const Navbar = () => {

    const [showNav, setShowNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setShowNav(!showNav)
        setLogo(!logo)
    }
  return (
    <div className='flex w-full justify-between items-center h-20  absolute z-10 text-white'>
        <div>
            <h1  onClick={handleNav} className={logo ? 'hidden' : 'block px-4'}>LG.Trip</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='hover:scale-110 duration-500 cursor-pointer'>
                <Link  to="home" smooth={true} offset={50} duration={500}>
                    Home
                </Link>
            </li>
            <li className='hover:scale-110 duration-500 cursor-pointer'>
                 <Link  to="destinations" smooth={true} offset={50} duration={500}>
                    Destinations
                </Link>
            </li>
            <li className='hover:scale-110 duration-600 cursor-pointer'>
                <Link  to="search" smooth={true} offset={50} duration={500}>
                    Réserver
                </Link>
            </li>
            <li className='hover:scale-110 duration-750 cursor-pointer'>
                <Link  to="choose" smooth={true} offset={50} duration={500}>
                    Voyages
                </Link>
                </li>
            <li className='hover:scale-110 duration-1000 cursor-pointer'>
                <Link  to="carousel" smooth={true} offset={50} duration={500}>
                Gallerie
                </Link>
            </li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2 hover:scale-110 duration-500' size={25}/>
            <BsPerson className='mr-2 hover:scale-110 duration-500' size={25}/>
        </div>

            {/*------------------ Apparition menue petits écrans -------------- */}
            <div onClick={handleNav}  className='md:hidden z-10'>
                {showNav ? <AiOutlineClose className='text-black' size={25} /> : <RiMenu4Fill size={25} /> }                
            </div>

             {/* ---------------Menue pour petits écrans --------------------*/}
            <div onClick={handleNav} className={showNav ? 'absolute top-0 w-full  text-black bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                    <h1>LG.Trip</h1>
                    <li className='border-b hover:scale-105 duration-500'><a href='/'>Home</a></li>
                    <li className='border-b hover:scale-105 duration-500'><a href='/'>Destinations</a></li>
                    <li className='border-b hover:scale-105 duration-500'><a href='/'>Voyages</a></li>
                    <li className='border-b hover:scale-105 duration-500'><a href='/'>Gallerie</a></li>
                    <li className='border-b hover:scale-105 duration-500'><a href='/'>Réserver</a></li>
                    <div className='flex flex-col'>
                        <button className='my-6 hover:scale-105 duration-500'>Chercher</button>
                        <button className='hover:scale-105 duration-500'>Mon compte</button>
                    </div>
                    <div className='flex justify-between my-6'>
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon'/>
                        <FaYoutube className='icon'/>
                        <FaPinterest className='icon'/>
                        <FaInstagram className='icon'/>
                    </div>
                </ul>
            </div>
    </div>
  )
}

export default Navbar