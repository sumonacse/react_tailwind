import React from 'react'
import { AiOutlineMail,AiOutlineTwitter } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
// import { AiOutlineTwitter } from 'react-icons/fa';



const Header = () => {
  return (
    <header className='bg-black py-3.5'>
        <div className='max-w-container mx-auto'>
            <div className='flex'>
                <div className='w-2/4 flex'>
                    <p className='font-pop font-normal text-xs relative pl-6 text-white after:absolute after:top-[0px] after:right-[-28px] after:w-0.5 after:h-full after:content-[""] after:bg-yellowborder'> 
                        <AiOutlineMail className='absolute left-0 top-0 text-lg'/> mail@yourcompany.com
                    </p>
                    <p className='font-pop font-normal text-xs relative pl-6 text-white ml-14'> 
                        <BiPhoneCall className='absolute left-0 top-0 text-lg'/> +896 120 5889 (Toll free)
                    </p>
                </div>
                <div className='w-2/4 flex justify-end gap-x-5 '>
                    <FaFacebookF className='text-white' />
                    <AiOutlineTwitter className='text-white'/>
                    <ImLinkedin2 className='text-white'/>
                    <BsInstagram className='text-white'/>

                </div>
            </div>
        </div>
        
    </header>
  );
};

export default Header;