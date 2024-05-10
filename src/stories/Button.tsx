import React from 'react';
import { RoleProps } from '@constants';
import RoleCard from './RoleCard';

interface RoleCardListProps {
  roles: RoleProps[],
  platform: 'desktop' | 'mobile';
}


const Button = ({...props}:RoleCardListProps) => {
  return (
    <button 
    // disabled
    className={`border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-primary hover:bg-blue-light-5 hover:text-body-color dark:hover:text-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue-light-3`}>
      Button
    </button>
  )
}

export default Button