import React from 'react';


export interface Buttonitems {
  title : string;
  onClick?: () => void;

}


const Button = ({...props}:Buttonitems) => {
  return (
    <button 
      className='w-full bg-[#0A3773] border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]'
      onClick={props.onClick}
      >
    {props.title}
  </button>
  )
}

export default Button