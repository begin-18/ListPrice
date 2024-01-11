import React, {useState} from 'react'
import {data} from '../Shoesdata.js'
import {FaCartPlus} from 'react-icons/fa'

const LandingPage = () => {
    const [imageData] = useState(data);
  return (
    <div className='mx-[5vh] lg:mx-[15vh] py-[5rem] flex flex-col items-center'>
        <h1 className='font-bold text-lg md:text-4xl'>RECEOMMENDED FOR YOU</h1>
        <div className='gap-[4rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 pt-4'>
            {imageData.map((item, index) => (
                <div key={index} className='h-[220px]'>
                    <div className='flex flex-col items-center'>
                        <img className='h-[100px] md:h-[200px]' src={item.image} alt="" />
                    </div>
                    <div className='flex gap-5 md-gap-10'>
                        <div className='md:w-[200px]'>
                            <p className='line-clamp-2 md:line-clamp-1  hover:line-clamp-3 duration-700'>{item.name}</p>
                            <p className=' font-bold'>₱ {item.price}</p>
                        </div>
                        <span className='flex items-start pt-2 cursor-pointer'><FaCartPlus className='size-[30px] text-blue-400'/></span>
                    </div> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default LandingPage