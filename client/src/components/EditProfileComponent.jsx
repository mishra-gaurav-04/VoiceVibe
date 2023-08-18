import React from 'react'
import Modal from '@mui/material/Modal'; 
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../components/Button'
import { fetchCountryData } from '../apis/data';
import {useEffect,useState} from 'react';
import {updateUser} from '../apis/api';
import { useSelector } from 'react-redux';

const ModalComponent = ({isModalOpen,handleCloseModal}) => {
    const [country,setCountry] = useState([]);
    const [username,setUsername] = useState('');
    const [countryInput,setCountryInput] = useState(''); 
    const [selectedFile,setSelectedFile] = useState(null);

    const user = useSelector((state) => state.auth.user)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    }

    const handleCountryChange = (event) => {
        const data = event.target.value;
        setCountryInput(data);
    }

    const handleUserNameChange = (event) => {
        event.preventDefault();
        const data = event.target.value;
        setUsername(data);
    }

    const handleFileUpload = async() => {
        const formData = new FormData();
        formData.append('file',selectedFile);
        formData.append('country',countryInput);
        formData.append('userName',username);

        try{
            const res = await updateUser(formData,user._id);
            await handleCloseModal();
        }
        catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
        if(isModalOpen){
            setUsername('');
        }
    },[isModalOpen]);

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

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: '#1D1D1D',borderRadius: '0.75rem' , boxShadow: 24,p: 4, overflow:'auto'}}>
            <div onClick={handleCloseModal} className='flex justify-end cursor-pointer'><CloseIcon/></div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-3xl border-b-4 border-blue-600 p-2'>Edit Profile</h1>
                </div>
            <div className='mt-2 flex items-center justify-center '>
                <div className='p-5 bg-[#262626] mt-5'>
                <form className='space-y-10'>
                      <div class="relative z-0 w-full mb-6 group">
                          <input type="text" name="userName" id="floating_username" maxLength={20} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={username} onChange={handleUserNameChange} required />
                          <label htmlFor="floating_username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserName</label>
                      </div>

                      <div>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={countryInput} onChange={handleCountryChange}>
                                <option selected>Choose a country</option>
                                {
                                    country.map((item) => (
                                        <option value={item.name.common} key={item.capital}>{item.name.common}</option>
                                    ))
                                }
                            </select>
                      </div>
                      <div className="mt-3 w-96">
                            <label htmlFor="formFile" className="mb-2 inline-block text-gray-400 ">Update Profile Picture</label>
                            <input className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-gray-400 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-blue-700 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" onChange={handleFileChange} type="file" id="formFile" />
                     </div>                    
                </form>
                </div>
            </div>
            <div className='mt-3 flex items-center justify-center'>
                <Button title="Update Profile" onClick={handleFileUpload}/>
            </div>
        </Box>
      </Modal>
  )
}

export default ModalComponent