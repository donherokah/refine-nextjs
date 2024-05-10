import React from 'react';
import { RoleProps } from '@constants';
import RoleCard from './RoleCard';

interface RoleCardListProps {
  roles: RoleProps[],
  platform: 'desktop' | 'mobile';
}


const RoleCardList = ({...props}:RoleCardListProps) => {
  return (
    <div
      className={`grid gap-4 ${props.platform === 'mobile' ? '':'grid-flow-col'}`}
      >
       {props.roles.map((role, index) => (
      <React.Fragment key={role.id}>
        <RoleCard {...role} />
        {index !== props.roles.length - 1 && <div className="w-0.5 bg-[white] relative top-[-12%] h-[128%] mx-8 " />}
      </React.Fragment>
    ))}
    </div>
  )
}

export default RoleCardList