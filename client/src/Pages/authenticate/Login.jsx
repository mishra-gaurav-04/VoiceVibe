import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import { loginEmail } from '../../apis/api';

const Login = () => {
  const arrowIcon = (
    <ArrowRightAltOutlinedIcon sx={{ width: 24, height: 24, marginLeft: 2 }} />
  );
  const emailIcon = (
    <EmailIcon sx={{ color: blue['A700'], width: 24, height: 24 }} />
  );
  
  const [email,setEmail] = useState('');

  const handleEmailChange = (event) => {
    event.preventDefault();

    const data = event.target.value;
    setEmail(data);

  }
  const navigate = useNavigate();
  const redirectToOtp = async() => {
    // console.log(otp)
   await navigate('/authenticate/otp');
   try{
      const res =  await loginEmail({email : email});
      console.log('Login Response form server',res);
   }
   catch(err){
      console.log(err);
   }
  };

  return (
    <div className='flex items-center flex-col gap-4 justify-center my-24 space-y-5'>
        <div>
          <Card title='Enter your email id' icon={emailIcon}>
            <div className='p-2 mt-10 border rounded-lg flex'>
              <input
                type='text'
                onChange={handleEmailChange}
                className='bg-transparent focus:outline-none text-center w-350'
                placeholder='Enter your email'
              />
            </div>
            <div className='mt-5'>
              <Button onClick={redirectToOtp} title='Next' icon={arrowIcon} />
            </div>
          </Card>
        </div>
      
    </div>
  );
};

export default Login;
