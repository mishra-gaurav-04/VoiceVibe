import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import RoomCard from '../../components/RoomCard';
import ModalComponent from '../../components/ModalComponent';

const Rooms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartRoomClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='container mx-auto py-10 my-16'>
      <div className='flex justify-between'>
      <div className='flex justify-between'>
            <div className='flex gap-7'>
                <div className='border-b-4 border-blue-700'><h1 className='text-2xl'>All Rooms</h1></div>
                <SearchBar/>
            </div>
        </div>
        <div>
          <button onClick={handleStartRoomClick} className='flex mt-1 gap-2 p-2 bg-green-500 rounded-xl'>
            <RecordVoiceOverIcon />
            <span>Start a Room</span>
          </button>
        </div>
      </div>
      <div className='mt-24 grid grid-cols-4 gap-4'>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>  
        <RoomCard/>      
        <RoomCard/>      
        <RoomCard/>      
        <RoomCard/>      
        <RoomCard/>      
        <RoomCard/>      
        <RoomCard/>      
        <RoomCard/>      
        <RoomCard/>      
      </div>
      <ModalComponent isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}/>
    </div>
  );
};

export default Rooms;
