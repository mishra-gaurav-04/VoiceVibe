import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { blue } from '@mui/material/colors';
import logo from '../../assets/india.svg';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';

const Login = () => {
  const [phoneLogin, setPhoneLogin] = useState(true);
  const [emailLogin, setEmailLogin] = useState(false);

  const phoneIcon = (
    <SmartphoneOutlinedIcon sx={{ color: blue['A700'], width: 24, height: 24 }} />
  );
  const arrowIcon = (
    <ArrowRightAltOutlinedIcon sx={{ width: 24, height: 24, marginLeft: 2 }} />
  );
  const emailIcon = (
    <EmailIcon sx={{ color: blue['A700'], width: 24, height: 24 }} />
  );

  const handlePhoneLogin = () => {
    if (!phoneLogin) {
      setPhoneLogin(true);
      setEmailLogin(false);
    }
  };

  const handleEmailLogin = () => {
    if (!emailLogin) {
      setEmailLogin(true);
      setPhoneLogin(false);
    }
  };

  const navigate = useNavigate();
  const redirectToOtp = () => {
    navigate('/authenticate/otp');
  };

  return (
    <div className='flex items-center flex-col gap-4 justify-center my-24 space-y-5'>
      <div className='flex gap-4 items-center justify-center'>
        <div
          className={`border p-2 rounded-lg ${
            phoneLogin ? 'bg-blue-700' : ''
          }`}
          onClick={handlePhoneLogin}
        >
          <SmartphoneOutlinedIcon />
        </div>
        <div
          className={`border p-2 rounded-lg ${
            emailLogin ? 'bg-blue-700' : ''
          }`}
          onClick={handleEmailLogin}
        >
          <EmailIcon />
        </div>
      </div>

      {phoneLogin && (
        <div>
          <Card title='Enter your mobile number' icon={phoneIcon}>
            <div className='p-2 mt-10 border rounded-lg flex'>
              <img src={logo} width={30} height={30} alt='India Logo' />
              <input
                type='text'
                className='bg-transparent focus:outline-none text-center'
                placeholder='Enter your number'
                maxLength={10}
              />
            </div>
            <div className='mt-5'>
              <Button onClick={redirectToOtp} title='Next' icon={arrowIcon} />
            </div>
          </Card>
        </div>
      )}

      {emailLogin && (
        <div>
          <Card title='Enter your email id' icon={emailIcon}>
            <div className='p-2 mt-10 border rounded-lg flex'>
              <input
                type='text'
                className='bg-transparent focus:outline-none text-center'
                placeholder='Enter your email'
                maxLength={10}
              />
            </div>
            <div className='mt-5'>
              <Button onClick={redirectToOtp} title='Next' icon={arrowIcon} />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Login;
