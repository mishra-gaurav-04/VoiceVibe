import React from 'react';
import ProfileImage from '../components/ProfileImage';

const Profile = () => {
  return (
    <div className='container mx-auto my-10'>
        <span className='text-4xl font-bold border-b-8 border-blue-600 rounded-sm'>Profile</span>
        <div className='mt-24'>
            <div>
                  <div>
                    <ProfileImage width={100} height={100}/>
                    <dir>
                      <h1></h1>
                    </dir>
                  </div>
                  <div>
                      <div></div>
                      <div></div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Profile