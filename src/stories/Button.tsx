import React from 'react';


export interface Buttonitems {
  title : string;
  onClick?: () => void;

}


const Button = ({...props}:Buttonitems) => {
  return (
    <>
    <button 
      className='w-full bg-[#0A3773] border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0A2C5A] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#0A2C5A] active:border-[#1B44C8]'
      onClick={props.onClick}
      >
    {props.title}
  </button>
  {/* <button 
    className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark hover:text-[#637381] hover:border-[#113B73] dark:text-white hover:bg-[#E1E8FF] dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'
    >
    View Details
  </button>
    <button 
    className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-7 py-3 text-center text-base font-medium text-dark shadow-1 hover:bg-gray-4 disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:bg-gray-2 dark:shadow-box-dark dark:hover:bg-dark-3">
      Button
    </button> */}
    </>
  )
}

export default Button