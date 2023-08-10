import React from 'react';
import Profile from '../assets/profile.jpeg';

const ProfileImage = ({className,height,width}) => {
  const style = {
    width : `${width}px`,
    height : `${height}px`,
  }
  return (
    <div className={`rounded-full overflow-hidden border-2 border-blue-500 ${className}`} style={style}>
        <img src={Profile} alt="Profile Picture" class="w-full h-full object-cover" />
    </div>
  )
}

export default ProfileImage