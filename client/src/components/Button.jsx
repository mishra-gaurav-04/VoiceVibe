import React from 'react'

const Button = ({title,icon,onClick,disabled}) => {
  return (
    <button onClick={onClick} className='mt-4 bg-[#0077ff] cursor-pointer p-2 px-4 tracking-widest text-md rounded-xl'>{title} {icon}</button>
  )
}

export default Button;