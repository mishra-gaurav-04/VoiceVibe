import React from 'react';
import { Link } from 'react-router-dom';
import PodcastsTwoToneIcon from '@mui/icons-material/PodcastsTwoTone';
import { yellow } from '@mui/material/colors';
// import { useState } from 'react';
import ProfileImage from './ProfileImage'


const Navbar = ({check}) => {
  // const [showProfile,setShowProfile] = useState(true);

  return (
    <nav className='container mx-auto py-5'>
        <div className='flex items-center justify-between'>
            <Link to="/" className='flex gap-2 items-center' >
                  <PodcastsTwoToneIcon sx={{color : yellow[500],width:33,height:33}}/>
                  <span className=' text-2xl'>VoiceVibes</span>
              </Link>
              {
                  check && <div><ProfileImage width={50} height={50}/></div>
              }
          </div>
    </nav>
  )
}

export default Navbar