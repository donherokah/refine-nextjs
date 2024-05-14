"use client";

import { Suspense, useState } from "react";

import { WelcomePage } from "@refinedev/core";
import './global.css';

import Popup from "@stories/Popup";
import BottomSheeeting from "@stories/BottomSheet";


export default function IndexPage() {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <Suspense>
    //   <div className="text-[red] bg-[blue] text-center">red</div>
    //   {/* <WelcomePage /> */}
    // </Suspense>
    <div>
      <button onClick={handleToggle}>Toggle Bottom Sheet</button>
      <BottomSheeeting 
        label={'add items'}
        buttonTitle = {'speedster'}
        // buttonFunction={()=>console.log('button pressed')}
        title={'add spend'}
        // closeOnBackdropClick
         ><p>hi don</p></BottomSheeeting>
    </div>
  );
}
