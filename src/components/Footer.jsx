import React from 'react'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
          <div className='sm:flex text-center justify-between items-center'>
            <h1>LG.Trip</h1>
            <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                   <FaFacebook className='icon' />
                   <FaTwitter className='icon'/>
                   <FaYoutube className='icon'/>
                   <FaPinterest className='icon'/>
                   <FaInstagram className='icon'/>
            </div>
          </div>
          <div className='flex justify-between '>
            <ul className='lg:flex'>
              <li>À propos</li>
              <li>Partenariat</li>
              <li>Opportunités</li>
              <li>Actualités</li>
              <li>Publicité</li>
            </ul>
            <ul className='text-right lg:flex'>
            <li>
                <Link  to="home" smooth={true} offset={50} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                 <Link  to="destinations" smooth={true} offset={50} duration={500}>
                    Destinations
                </Link>
            </li>
            <li>
                <Link  to="search" smooth={true} offset={50} duration={500}>
                    Réserver
                </Link>
            </li>
            <li>
                <Link  to="choose" smooth={true} offset={50} duration={500}>
                    Voyages
                </Link>
                </li>
            <li>
                <Link  to="carousel" smooth={true} offset={50} duration={500}>
                Gallerie
                </Link>
            </li>
        </ul>
          </div>

        </div>

    </div>
  )
}

export default Footer