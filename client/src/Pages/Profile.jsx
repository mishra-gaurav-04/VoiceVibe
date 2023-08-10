import React from 'react';
import ProfileImage from '../components/ProfileImage';
import Button from '../components/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Profile = () => {
  return (
    <div className='container mx-auto my-10'>
        <span className='text-4xl font-bold border-b-8 border-blue-600 rounded-sm'>Profile</span>
        <div className='mt-24'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                      <ProfileImage width={150} height={150}/>
                    <div>
                      <h1 className='font-bold text-2xl'>Naruto Uzumaki</h1>
                      <p className='text-gray-600'>@daemon_demon</p>
                    </div>
                    <div className='ml-4 mb-5'>
                        <Button title="Follow"/>
                        <MoreVertIcon/>
                    </div>
                </div>
                
                <div className='bg-[#262626] p-8 rounded-lg flex gap-10'>
                    <div>
                        <h1 className='text-2xl text-center'>25</h1>
                        <p className='text-gray-500'>Followers</p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-center'>25</h1>
                        <p className='text-gray-500'>Following</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#262626] mt-10 p-5 rounded-xl'>
              
            </div>
        </div>
    </div>
  )
}

export default Profile