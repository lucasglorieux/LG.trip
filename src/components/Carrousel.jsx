import React, {useState} from 'react'
import { BsArrowLeftSquareFill } from 'react-icons/bs'
import { BsArrowRightSquareFill } from 'react-icons/bs'


const slideImage = [
    {
        url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1584669727833-88b47506defb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2562&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1597030608130-ed3208658e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80'
    },
    {
        url:'https://images.unsplash.com/photo-1610650499378-34d5aaf719d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        url:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1788&q=80'
    }
]

const Carrousel = () => {

    const [slide, setSlide]= useState(0);
    const length = slideImage.length
    console.log(length);

    const leftSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1 )
    }

    const rightSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }

  return (
    <div name ='carousel' className='max-w-[1300px] mx-auto px-4 py-16 relative flex justify-center itmes-center'>
    <BsArrowLeftSquareFill
      onClick={leftSlide}
      className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
      size={25}
    />
    <BsArrowRightSquareFill
      onClick={rightSlide}
      className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
      size={25}
    />
        {slideImage.map((item, index) =>(
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && (<img className='w-full rounded-md' src={item.url} alt="/" />)}
            </div>
        ))}
    </div>
  )
}

export default Carrousel