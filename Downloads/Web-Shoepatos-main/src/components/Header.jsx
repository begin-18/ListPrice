import React , {useState}from 'react'
import { FaBars, FaArrowRight, FaCartPlus} from 'react-icons/fa'


const Header = () => {

    const [nav, setNav] = useState(false)
  return (
    <div id='header' className='flex justify-between p-[1rem] px-[3rem]'>
        <div>
            <img className='h-[40px] sm:h-[60px] md:h-[80px] hover:border-2 rounded-full' src="images/riel-removebg.png" alt="" />
        </div>
   
        <nav id='nav' className='flex items-center'>
        <div onClick = {()=> setNav(!nav)} className='flex sm:hidden absolute top-8 right-4 '>
                <FaBars size={25}/>
            </div>
            <ul className='hidden sm:flex gap-10'>
                <li className='font-semibold text-lg'><a href="/">Home</a></li>
                <li className='font-semibold text-lg'><a href="/">Products</a></li>
                <li className='font-semibold text-lg'><a href="/">Accounts</a></li>
                <div>
                    <span ><a href="/"><FaCartPlus className='size-[30px] cursor-pointer'/></a></span>
                    
                </div>
            </ul>
        
        </nav>
        
        {nav? <div className='bg-black/40 fixed w-full h-screen z-10 top-0 right-0 sm:hidden'> </div>: '' }
        <div className={ nav ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300 px-5' : 'hidden'}>
            <FaArrowRight onClick = {() => setNav(!nav)} size={20} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='mt-5  font-semibold'> Menu </h2>
            <nav className='mt-20'>
                <ul className='font-semibold text-center'>
                    <li className='mt-4'><a href="/">Home</a></li>
                    <li className='mt-4'><a href="/">Products</a></li>
                    <li className='mt-4'><a href="/">Accounts</a></li>
                </ul>
            </nav>
        </div>
        
    </div>
    
  )
}

export default Header