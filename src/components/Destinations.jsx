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
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Bali} alt="Bali beach" />
            <img className='w-full h-full object-cover' src={Thai} alt="Thailand beach" />
            <img className='w-full h-full object-cover' src={Maldive} alt="Maldice beach" />
            <img className='w-full h-full object-cover' src={Suisse} alt="Montagne suisse" />
            <img className='w-full h-full object-cover' src={Mexico} alt="cenote mexico" />
        </div>
        <h1 className='mt-20'>Pour découvrir</h1>
        <p>Nos meilleurs destinations culturelle.</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md-gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Michel} alt="Mont st-Michel" />
            <img className='w-full h-full object-cover' src={Kyoto} alt="Kyoto" />
            <img className='w-full h-full object-cover' src={Laponie} alt="Pays du pere noel" />
            <img className='w-full h-full object-cover' src={Ny} alt="New-York-City" />
            <img className='w-full h-full object-cover' src={Santorin} alt="santorini" />
        </div>
    </div>
  )
}

export default Destinations