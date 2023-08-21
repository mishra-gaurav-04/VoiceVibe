import React, { useState, useEffect, useRef } from 'react';
import { Link,useLocation } from 'react-router-dom';
import PodcastsTwoToneIcon from '@mui/icons-material/PodcastsTwoTone';
import { yellow } from '@mui/material/colors';
import ProfileImage from './ProfileImage';
import Button from '../components/Button';

const Navbar = ({ check }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const loacation = useLocation();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleGlobalClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Exclude the dropdown links from closing the dropdown
      if (!event.target.closest('.dropdown-link')) {
        closeDropdown();
      }
    }
  };

  useEffect(() => {
    if (showDropdown) {
      window.addEventListener('click', handleGlobalClick);
    } else {
      window.removeEventListener('click', handleGlobalClick);
    }

    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [showDropdown]);

  useEffect(() => {
    closeDropdown();
  },[loacation.pathname]);

  return (
    <nav className=' p-5 bg-[#1a1919] '>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
            <Link to="/" className='flex gap-2 items-center'>
              <PodcastsTwoToneIcon sx={{ color: yellow[500], width: 33, height: 33 }} />
              <span className='text-2xl'>VoiceVibes</span>
            </Link>
            <div className='ml-6'>
                <ul className='flex gap-7'>
                  <li>Listen</li>
                  <li>Pricing</li>
                  <li>Blogs</li>
                  <li>Help Center</li>
                </ul>
            </div>
        </div>
        <div>
            <div className='flex gap-4 items-center justify-center mb-4'>
              <div>
                  <Button title="Login"/>
              </div>
              <div>
                  <Button title="Sign up"/>
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
