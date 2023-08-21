import React from 'react';
import Card from '../components/Card';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import { green } from '@mui/material/colors';
import Button from '../components/Button';
import {Link , useNavigate} from 'react-router-dom';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import MarqueeComponent from '../components/MarqueeComponent';
import Marquee from "react-fast-marquee";
import data from '../data/data-1';

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
    <div className='my-24'>
        <section className='mt-4'>
            <div className='flex items-center justify-center flex-col '>
                <h1 className='text-8xl font-bold'>Podcast like a <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-800'>P R O</span></h1>
                <p className='w-1/2 text-center mt-5 text-2xl text-gray-500'>Get your voice heard everywhere with our easy-to-use podcasthosting platform, powered by a vast distribution network and comprehensive analytics tools.</p>
                <div className='mt-6'>
                    <Button title="Signup as a Creator" />
                </div>
            </div>
            <div className='mt-20'>
              <div className='flex items-center justify-center flex-col gap-4'>
                  <h1 className='text-5xl font-bold'>Listening is <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-800'>Everything</span></h1>
                  <p className='text-xl w-1/2 text-center text-gray-500'>"In a noisy world, listening is everything. It's the key to understanding, empathy, and meaningful connections</p>
                  <div className='mt-5'>
                    <Button title="Signup as a listner"/>
                  </div>
              </div>
            </div>
        </section>
        <section className='mt-10 p-10 bg-[#262626]'>
          <div className='flex items-center flex-col justify-center mt-4'>
            <p className='text-center text-3xl '><span className='text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-800'>Explore</span> top podcasts join live sessions or become a creative podcast host</p>
            <div className='mt-10 overflow-hidden w-full'> {/* Set a specific width here */}
                    <Marquee>
                      {data.map((item, index) => ( /* Added index to avoid key warning */
                        <div key={index} className='mx-5'>
                          <MarqueeComponent data={item}/>
                        </div>
                      ))}
                    </Marquee>
              </div>
          </div>
        </section>
        
    </div>
  )
}

export default Home;