import React from 'react';

const ProfileImage = ({className,height,width,url}) => {
  const style = {
    width : `${width}px`,
    height : `${height}px`,
  }
  return (
    <div className={`rounded-full overflow-hidden border-2 border-blue-500 ${className}`} style={style}>
        <img src={url} alt="Profile Picture" class="w-full h-full object-cover" />
    </div>
  )
}

export default ProfileImage 