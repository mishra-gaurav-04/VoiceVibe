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
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-bold text-2xl'>Naruto Uzumaki</h1>
                      <p className='text-gray-600'>@daemon_demon</p>
                    </div>
                    <div className='ml-4 mb-5'>
                        <Button title="Follow"/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className='bg-[#262626] p-8 rounded-lg flex gap-10 shadow-xl'>
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
            <div className='bg-[#262626] mt-10 p-5 rounded-xl flex justify-between gap-8'>
              <div className='bg-[#1c1c1c] p-10 w-1/2 rounded-lg'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-3xl'>Name</h1>
                        <h1 className='text-xl text-gray-600'>Naruto UzuMaki</h1>
                    </div>
                    <div className='mt-3 flex flex-col gap-3'>
                        <h1 className='text-3xl'>Email</h1>
                        <h1 className='text-xl text-gray-600'>naruto.uzumaki@gmail.com</h1>
                    </div>
                    <div className='mt-3 flex flex-col gap-3'>
                        <h1 className='text-3xl'>User Name</h1>
                        <h1 className='text-xl text-gray-600'>Naruto UzuMaki</h1>
                    </div>
                    <div className='mt-3 flex flex-col gap-3'>
                        <h1 className='text-3xl'>Country</h1>
                        <h1 className='text-xl text-gray-600'>--</h1>
                    </div>
                    <div className='mt-3 flex flex-col gap-3'>
                        <h1 className='text-3xl'>Date of Birth</h1>
                        <h1 className='text-xl text-gray-600'>Naruto UzuMaki</h1>
                    </div>

              </div>
              <div className='bg-[#1c1c1c] p-10 w-1/2 rounded-lg'>
                    <div>
                        <h1 className='text-3xl'>Interest</h1>
                        <div className='mt-6 flex flex-wrap gap-3'>
                            <span className='p-3 rounded-full text-xs font-medium bg-gray-600/20 text-white'>Technology</span>
                            <span className='p-3 rounded-full text-xs font-medium bg-gray-600/20 text-white'>Technology</span>
                            <span className='p-3 rounded-full text-xs font-medium bg-gray-600/20 text-white'>Technology</span>
                            <span className='p-3 rounded-full text-xs font-medium bg-gray-600/20 text-white'>Technology</span>
                            <span className='p-3 rounded-full text-xs font-medium bg-gray-600/20 text-white'>Technology</span>
                            <span className='p-3 rounded-full text-xs font-medium bg-gray-600/20 text-white'>Technology</span>
                            <span className='p-3 rounded-full text-xs font-medium bg-gray-600/20 text-white'>Technology</span>
                            <span className='p-3 rounded-full text-xs font-medium bg-gray-600/20 text-white'>Technology</span>
                            <span className='p-3 rounded-full text-xs font-medium bg-gray-600/20 text-white'>Technology</span>
                            <span className='p-3 rounded-full text-xs font-medium bg-gray-600/20 text-white'>Technology</span>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-3xl'>Description</h1>
                            <p className='mt-4 text-gray-400'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, nulla adipisci iste vero nemo, facilis sint corrupti minus quisquam laboriosam neque dolorum porro, saepe provident. Doloribus iusto vero illum molestiae exercitationem atque suscipit voluptatum sit cum impedit quae, dolorum sapiente libero magnam facilis, alias maiores unde mollitia et perferendis aliquid!
                            </p>
                        </div>
                        <div className='flex gap-3 mt-3'>
                            <Button title="Edit Profile"/>
                            <Button title="Go To Creator's DashBoard"/>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Profile