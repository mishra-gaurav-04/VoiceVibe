import React, { useState, useEffect, useRef } from 'react';
import { Link,useLocation } from 'react-router-dom';
import PodcastsTwoToneIcon from '@mui/icons-material/PodcastsTwoTone';
import { yellow } from '@mui/material/colors';
import ProfileImage from './ProfileImage';

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
    <nav className='container mx-auto py-5'>
      <div className='flex items-center justify-between'>
        <Link to="/" className='flex gap-2 items-center'>
          <PodcastsTwoToneIcon sx={{ color: yellow[500], width: 33, height: 33 }} />
          <span className='text-2xl'>VoiceVibes</span>
        </Link>
        {check && (
          <div className='relative dropdown' ref={dropdownRef}>
            <div onClick={toggleDropdown}><ProfileImage width={50} height={50}/></div>
            {showDropdown && (
              <div className='right-3 mt-2 bg-[#262626] absolute divide-y divide-gray-100 rounded-lg shadow w-44'>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <Link to="/profile" class="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                    </li>
                    <li>
                      <Link to="#" class="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Apply for Creator</Link>
                    </li>
                    <li>
                      <Link to="#" class="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Upgrade to Premium</Link>
                    </li>
                    <li>
                      <Link to="#" class="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">FeedBack</Link>
                    </li>
                    <li>
                      <Link to="#" class="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Logout</Link>
                    </li> 
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
