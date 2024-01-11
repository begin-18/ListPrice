import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-10 flex flex-col bg-gray-200 lg:flex-row justify-evenly p-5 right-0 gap-5 items-center lg:items-start'>
        <div className='flex items-center gap-10 md:gap-[8rem]'>
            <div className='gap-2'>
                <div>
                    <p className='text-[12px]'>Download Our App Now</p>
                </div>
                <div className='flex gap-5'>
                    <img className='h-5 sm:h-10' src="images/store1.png" alt="" />
                    <img className='h-5 sm:h-10' src="images/store.png" alt="" />
            </div>
            </div>
            <hr />
            <div>
                <img className='h-[100px]' src="images/riel-removebg.png" alt="" />
            </div>
        </div>
        <hr />
        <div className='flex flex-col sm:flex-row items-center gap-10 md:gap-[10rem]'>
        <div className='flex flex-col'>
            <h4 className='text-[12px] sm:text-[1rem]'>SOCIAL MEDIA</h4>
            <span className='flex text-[12px] sm:text-[1rem]'><FaFacebook className='mx-2'/><a href="/">Facebook</a></span>
            <span className='flex text-[12px] sm:text-[1rem]'><FaTwitter className='mx-2'/> <a href="/">Twitter</a></span>
            <span className='flex text-[12px] sm:text-[1rem]'><FaInstagram className='mx-2'/> <a href="/">Twitter</a></span>
        </div>

        <div>
            <h4 className='text-[12px] sm:text-[1rem]'>CONTACT US</h4> 
            <p className='text-[12px] sm:text-[1rem]'>(+63) 987 6547 888</p>     
            <p className='text-[12px] sm:text-[1rem]'>(+63) 994 6412 332</p>
            <p className='text-[12px] sm:text-[1rem]'>(+63) 954 7890 234</p>
        </div>
        </div>
    </div>
  )
}

export default Footer