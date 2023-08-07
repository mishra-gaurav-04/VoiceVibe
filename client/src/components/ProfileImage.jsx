import React from 'react';
import Profile from '../assets/profile.jpeg';

const ProfileImage = ({className}) => {
  return (
    <div class={`w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 ${className}`}>
        <img src={Profile} alt="Profile Picture" class="w-full h-full object-cover" />
    </div>
  )
}

export default ProfileImage