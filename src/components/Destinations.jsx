import React from 'react'

import Bali from '../assets/bali.jpg'
import Thai from '../assets/thailand.jpg'
import Suisse from '../assets/suisse.jpg'
import Mexico from '../assets/mexico.jpg'
import Maldive from '../assets/maldive.jpg'

import Kyoto from '../assets/kyoto.jpg'
import Santorin from '../assets/santorin.jpg'
import Michel from '../assets/Michel.jpg'
import Laponie from '../assets/laponie.jpg'
import Ny from '../assets/ny.jpg'

const Destinations = () => {
  return (
    <div name='destinations' className='max-w-[1400px] mx-auto py-16 px-4 text-center' >
        <h1>Pour se relaxer</h1>
        <p>Nos meilleurs destinations pour se ressourcer.</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md-gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Bali} loading='eager' alt="Bali beach" />
            <img className='w-full h-full object-cover' src={Thai} loading='eager' alt="Thailand beach" />
            <img className='w-full h-full object-cover' src={Maldive} loading='eager' alt="Maldice beach" />
            <img className='w-full h-full object-cover' src={Suisse} loading='eager' alt="Montagne suisse" />
            <img className='w-full h-full object-cover' src={Mexico} loading='eager' alt="cenote mexico" />
        </div>
        <h1 className='mt-20'>Pour découvrir</h1>
        <p>Nos meilleurs destinations culturelle.</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md-gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Michel} loading='eager' alt="Mont st-Michel" />
            <img className='w-full h-full object-cover' src={Kyoto} loading='eager' alt="Kyoto" />
            <img className='w-full h-full object-cover' src={Laponie} loading='eager' alt="Pays du pere noel" />
            <img className='w-full h-full object-cover' src={Ny} loading='eager' alt="New-York-City" />
            <img className='w-full h-full object-cover' src={Santorin} loading='eager' alt="santorini" />
        </div>
    </div>
  )
}

export default Destinations