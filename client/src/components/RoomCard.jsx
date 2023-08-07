import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import { green,blue } from '@mui/material/colors';
import ProfileImage from './ProfileImage';


const RoomCard = () => {
  return (
    <div className='bg-[#262626] w-350 p-6 rounded-xl'>
        <div>
            <p className='text-2xl font-semibold'>Which framework is best for front-end ?</p>
        </div>
        <div className='flex justify-between mt-5'>
        <div className='relative'>
            <ProfileImage className='absolute top-0 left-0'/>
            <ProfileImage className='absolute top-5  left-6'/>
        </div>  
            <div>
                <p>Virat Kohli <ChatBubbleIcon sx={{color:green['A700']}}/></p>
                <p>Anushka Sharma <ChatBubbleIcon sx={{color:green['A700']}}/></p>
            </div>
        </div>
        <div className='flex items-center justify-end mt-4 gap-1'>
            <span className='mt-1'>8</span><PersonIcon sx={{color:blue['A700']}}/>
        </div>
    </div>
  )
}

export default RoomCard