import React from 'react'
import MenuItem from './MenuItem'
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import DarkModeSwitch from './DarkModeSwitch';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';



const Header = () => {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <div className='flex gap-2'>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <MenuItem title="SignUp" address="/sign-up" Icon={FaHome}/>
          </SignedOut>
              <MenuItem title="home" address="/" Icon={FaHome}/>
             <MenuItem title="about" address="/about" Icon={FaInfoCircle}/>
        </div>
        <div className='flex items-center gap-4'>
            <DarkModeSwitch/>
            <div className='flex items-center gap-1'>
                <span className='text-2xl font-bold bg-amber-500 rounded-lg px-2 py-1'>IMDB</span>
                <span>clone</span>
            </div>
        </div>
    </div>
  )
}

export default Header