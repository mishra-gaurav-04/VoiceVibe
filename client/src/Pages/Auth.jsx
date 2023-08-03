import React from 'react';
import Card from '../components/Card';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { blue } from '@mui/material/colors';
import Button from '../components/Button';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import {Link,useNavigate} from 'react-router-dom';

const Auth = () => {
  const loginIcon = (
    <LoginOutlinedIcon sx={{color:blue['A400'],width:24}}/>
  );
  const arrowIcon = (
    <ArrowRightAltOutlinedIcon sx={{width:24,height:24,marginLeft:2}}/>
  );
  const signUpIcon = (
    <PersonOutlinedIcon sx={{color:blue['A400'],width:24}}/>
  );

  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate('/authenticate/login');
  }
  const redirectToSignup = () => {
    navigate('/authenticate/signup');
  }

  return (
    <div className='flex items-center justify-center my-24'>
        <div className='flex gap-2'>
            <Card title="Already have an Account" icon={loginIcon}>
                <Button title="Login" icon={arrowIcon} onClick={redirectToLogin}/>
            </Card>
            <Card title="Don't have an account" icon={signUpIcon}>
                <Button title="Create an Account" icon={arrowIcon} onClick={redirectToSignup}/>
            </Card>
        </div>
    </div>
  )
}

export default Auth 