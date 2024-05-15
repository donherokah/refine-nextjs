import React, { useEffect, useState } from "react";
import PopupContent from "./PopupContent";
import Buttonitems from './Button';
import { ExperiencedProps } from "@constants/experienced";
import Image from 'next/image';
import ExperiencedCard from "./ExperiencedCard";

import colorRed from './assets/JobVisitingCard/color-red.png'
import colorBlue from './assets/JobVisitingCard/color-blue.png'
import colorYellow from './assets/JobVisitingCard/color-yellow.png'
import colorGreen from './assets/JobVisitingCard/color-green.png'

interface JobVisitingCardProps {  
  name: string;
  experience: string;
  position: string;
  department: string;
  imageURL: string; 
  themeColor: 'red' | 'blue' | 'green' | 'yellow';
  mobileNumber: string; 
  email: string; 
  currentLocation: string;
  preferredLocationOne: string;
  preferredLocationTwo: string;
}

const JobVisitingCard = ({...props}: JobVisitingCardProps) => {

  const [bgImage, setBgImage] = useState<any>();

  useEffect(()=>{
    console.log('hi image ',props.themeColor)
    switch(props.themeColor){
      case 'red':
        setBgImage(colorRed.src);
        break;
      case 'blue':
        setBgImage(colorBlue.src);
        break;
      case 'green':
        setBgImage(colorGreen.src);
        break;
      case 'yellow':
        setBgImage(colorYellow.src);
        break;
      default:
          return undefined;
    }

    // if(props.themeColor === 'red'){

    // }
  },[props.themeColor])


  return (
    <div>
        <div style={{height:'70vh',width:'73vw'}}>
          <div
            style={{
              backgroundImage: `url(${bgImage})` ,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: 'no-repeat',
              width: "inherit", 
              height: "100%",
              padding:'4%',
              paddingLeft:'5.9%'
            }}
            className={`  text-white relative `}
          >
            <div className="grid grid-cols-[1fr_1fr] h-[78%] items-center pt-[4%]">
                <div className=' grid grid-rows-[41%_27%_28%] pt-[2%] text-end'>
                  <div>
                    <h1 className="text-[1.3rem] font-extrabold">{props.name}</h1>
                    <span className=" flex justify-end"><p>{props.experience}</p>,<p>{props.position}</p></span>
                    <p>{props.department}</p>
                  </div>
                  <h3 className="pl-[14%]">{props.currentLocation}</h3>
                  <div>
                    <h3 className="pl-[17%]">{props.mobileNumber}</h3>
                    <h3 className="pl-[16%]">{props.email}</h3>
                  </div>
                  <div>
                    <h3 className="pl-[12%]">{props.preferredLocationOne}</h3>
                    <h3>{props.preferredLocationTwo}</h3>
                  </div>
                </div>
                <div className="grid justify-items-center items-center">
                  <img
                    style={{borderColor:props.themeColor}}
                    className=" h-[31vh] mt-12% w-[18vw]  rounded-[50%]  border-solid left-[52.7%] top-[29%]"
                    src={props.imageURL}
                    alt="hello image"
                    width={500}
                    height={500}
                  />
               </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default JobVisitingCard;
