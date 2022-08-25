import React from 'react'

import Bali from '../assets/bali.jpg'
import Thai from '../assets/thailand.jpg'
import Suisse from '../assets/suisse.jpg'
import Mexico from '../assets/mexico.jpg'
import Maldive from '../assets/maldive.jpg'
import ChooseCard from './ChooseCard'
import Kyoto from '../assets/kyoto.jpg'
import Santorin from '../assets/santorin.jpg'
import Michel from '../assets/Michel.jpg'
import Laponie from '../assets/laponie.jpg'

const choose = () => {
  return (
    <div name='choose' className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ChooseCard bg={Maldive} text='Maldives'/>
        <ChooseCard bg={Bali} text='Bali'/>
        <ChooseCard bg={Thai} text='Thailand'/>
        <ChooseCard bg={Mexico} text='Mexico'/>
        <ChooseCard bg={Kyoto} text='Kyoto'/>
        <ChooseCard bg={Santorin} text='Santorini'/>
        <ChooseCard bg={Michel} text='Mont Saint-Michel'/>
        <ChooseCard bg={Laponie} text='Laponie'/>
        <ChooseCard bg={Suisse} text='Suisse'/>  
    </div>
  )
}

export default choose