import React from 'react'
import Card from '../components/Card';
import LockIcon from '@mui/icons-material/Lock';
import { yellow } from '@mui/material/colors';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { useEffect,useState } from 'react';

const Otp = () => {
  const lockIcon = (
    <LockIcon sx={{color:yellow['A700'],width:20}}/>
  );
  const arrowIcon = (
    <ArrowRightAltOutlinedIcon sx={{ width: 20, height: 20,marginLeft:2}} />
  );

  const [otp,setOtp] = useState('');
  const handleOtpChange = (event) => {
    event.preventDefault();
    setOtp(event.target.value)
  }   

  return (
    <div className='flex items-center justify-center my-24'>
      <Card title='Verification' icon={lockIcon}>
        <div className='mt-4 p-2'>
            <input type="text" onChange={handleOtpChange} className='text-center bg-transparent focus:outline-none border-b-2 focus:border-blue-600 ' maxLength={4} inputMode='numeric' autoComplete='one-time-code' placeholder='Enter Your OTP' required/>
        </div>
        <p className='text-center  mt-4 text-gray-500'>Didn't receive <Link className='text-blue-500'>Click to resend otp</Link></p>
        <div>
          <Button title='Verify' icon={arrowIcon}/>
        </div>
      </Card>
    </div>
  )
}

export default Otp