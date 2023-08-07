import React from 'react'
import Modal from '@mui/material/Modal'; 
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import Public from '../assets/public.png';
import Social from '../assets/social.png';
import Closed from '../assets/closed.png';
import Button from '../components/Button'
import EastIcon from '@mui/icons-material/East';

const ModalComponent = ({isModalOpen,handleCloseModal}) => {
    const eastIcon = (
        <EastIcon/>
      );
  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: '#1D1D1D',borderRadius: '0.75rem' , boxShadow: 24,p: 4, }}>
            <div onClick={handleCloseModal} className='flex justify-end cursor-pointer'><CloseIcon/></div>
            <div>
                <h1 className='text-xl'>Enter the topic to be discussed</h1>
                <input type="text" className='mt-2 bg-[#262626] w-full p-2 rounded-lg text-center focus:outline-none' />
            </div>
            <div>
                <h1 className='mt-4 text-xl'>Room Type</h1>
                <div className='flex items-center justify-between mt-4'>
                    <div className='p-4 hover:bg-[#262626] hover:border cursor-pointer'>
                            <img src={Public} alt="" />
                            <h2 className='text-center mt-2'>Open</h2>
                    </div>
                    <div className='p-4 hover:bg-[#262626] hover:border cursor-pointer'>
                            <img src={Social} alt="" />
                            <h2 className='text-center mt-2'>Social</h2>
                    </div>
                    <div className='p-4 hover:bg-[#262626] hover:border cursor-pointer'>
                            <img src={Closed} alt="" />
                            <h2 className='text-center mt-2'>Closed</h2>
                    </div>
                </div>
                <h1 className='text-gray-500 text-xl mt-5 text-center'>Start a room</h1>
                <div className='flex items-center justify-center mt-5'>
                    <Button title="Let's go" icon={eastIcon}/>
                </div>
            </div>
        </Box>
      </Modal>
  )
}

export default ModalComponent