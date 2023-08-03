import React from 'react';  

const Card = ({title,icon,children}) => {
    return (
        <div className='bg-[#1d1d1d] rounded-lg flex flex-col justify-center items-center w-500 p-8 py-10 shadow-2xl'>
            <div className='flex items-center gap-2'>
                {icon}
                <h1>{title}</h1>
            </div>
           {children}
        </div>
    )
}

export default Card 