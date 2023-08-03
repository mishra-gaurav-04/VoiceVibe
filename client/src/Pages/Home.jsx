import React from 'react';
import Card from '../components/Card';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import { green } from '@mui/material/colors';
import Button from '../components/Button';
import {Link , useNavigate} from 'react-router-dom';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const Home = () => {
  const waveHandIcon = (
    <WavingHandRoundedIcon sx={{ color: green['A400'],width:24}}/>
  );
  const arrowIcon = (
    <ArrowRightAltOutlinedIcon sx={{ width: 20, height: 20,marginLeft:2}} />
  );

  const navigate = useNavigate();
  const redirectToAuth = () => {
    navigate('/authenticate')
  }

  return (
    <div className='flex items-center justify-center my-24'>
      <Card title='Welcome to VoiceVibes' icon={waveHandIcon}>
        <p className='text-center w-3/4 mt-5 text-gray-500'>We are working hard to get VoiceVibes ready for everyone! While we wrap up the finishing touches we are adding people to 
          make sure nothing breaks !!!</p>
          <Button title="Let's Go" icon={arrowIcon} onClick={redirectToAuth}/>
      </Card>

    </div>
  )
}

export default Home