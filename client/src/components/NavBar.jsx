import React from 'react';
import { Link } from 'react-router-dom';
import PodcastsTwoToneIcon from '@mui/icons-material/PodcastsTwoTone';
import { yellow } from '@mui/material/colors';


const Navbar = () => {
  return (
    <nav className='container mx-auto py-5'>
          <Link to="/" className='flex gap-2 items-center' >
              <PodcastsTwoToneIcon sx={{color : yellow[500],width:33,height:33}}/>
              <span className=' text-2xl'>VoiceVibes</span>
          </Link>
    </nav>
  )
}

export default Navbar