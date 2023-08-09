import React from 'react'
import Card from '../components/Card';
import LockIcon from '@mui/icons-material/Lock';
import { yellow } from '@mui/material/colors';
import {Link,useNavigate} from 'react-router-dom';
import Button from '../components/Button';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { verifyOtp } from '../apis/api';
import { setAuth } from '../redux/authSlice';



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
    const data = event.target.value;
    setOtp(data);
  }
  const {email,hash} = useSelector((state) => state.auth.otp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectToRooms = async() => {
    try{
      const res = await verifyOtp({otp:otp,email:email,hash:hash});
      // console.log('From otp component',res);
      dispatch(setAuth({user:res.user,auth:res.auth}));
      await navigate('/rooms');
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className='flex items-center justify-center my-24'>
      <Card title='Verification' icon={lockIcon}>
        <div className='mt-4 p-2'>
            <input type="text" onChange={handleOtpChange}  className='text-center bg-transparent focus:outline-none border-b-2 focus:border-blue-600 ' maxLength={4} inputMode='numeric' placeholder='Enter Your OTP' required/>
        </div>
        <p className='text-center  mt-4 text-gray-500'>Didn't receive <Link className='text-blue-500'>Click to resend otp</Link></p>
        <div>
          <Button title='Verify' onClick={ redirectToRooms } icon={arrowIcon}/>
        </div>
      </Card>
    </div>
  )
}

export default Otp