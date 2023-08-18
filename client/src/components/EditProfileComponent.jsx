import React from 'react'
import Modal from '@mui/material/Modal'; 
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../components/Button'
import { fetchCountryData } from '../apis/data';
import {useEffect,useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from 'react-avatar-edit';

const ModalComponent = ({isModalOpen,handleCloseModal}) => {
    const [country,setCountry] = useState([]);
    const [isUploadOpen,setIsUploadOpen] = useState(false);
    const [selectedImage,setSelectedImage] = useState(null);
    const [previewImage,setPreviewImage] = useState(null);

    const handleClickOpen = () => {
        setIsUploadOpen(true);
    }

    const handleClickClose = () => {
        setIsUploadOpen(false);
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
        setPreviewImage(URL.createObjectURL(file));
    }
    const handleUploadSuccess = () => {
        setIsUploadOpen(false);
    }
    useEffect(() => {
        const getCountry = async() => {
            try{
                const res = await fetchCountryData();
                setCountry(res);
            }
            catch(err){
                console.log(err);
            }
        }
        getCountry();
    },[]);
    // console.log('From Edit Profile Component',country);
  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: '#1D1D1D',borderRadius: '0.75rem' , boxShadow: 24,p: 4, overflow:'auto'}}>
            <div onClick={handleCloseModal} className='flex justify-end cursor-pointer'><CloseIcon/></div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-3xl border-b-4 border-blue-600 p-2'>Edit Profile</h1>
                </div>
            <div className='mt-2 flex items-center justify-center'>
                <div className='p-5 bg-[#262626] mt-5'>
                <form>
                      <div class="relative z-0 w-full mb-6 group">
                          <input type="email" name="userName" id="floating_username" maxLength={20} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                          <label htmlFor="floating_username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserName</label>
                      </div>

                      <div>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a country</option>
                                {
                                    country.map((item) => (
                                        <option value={item.name.common} key={item.capital}>{item.name.common}</option>
                                    ))
                                }
                            </select>
                      </div>
                      <div className='mt-4 p-2 bg-[#1c1b1b] rounded-md text-center'>
                            <h1 className='text-gray-700 hover:text-white cursor-pointer'>Update Profile Picture</h1>
                      </div>                      
                </form>
                </div>
            </div>
            <div className='mt-3 flex items-center justify-center'>
                <Button title="Update Profile" />
            </div>
        </Box>
      </Modal>
  )
}

export default ModalComponent