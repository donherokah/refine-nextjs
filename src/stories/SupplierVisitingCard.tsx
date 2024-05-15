import React, { useEffect, useState } from "react";
import PopupContent from "./PopupContent";
import Buttonitems from './Button';
import { ExperiencedProps } from "@constants/experienced";
import Image from 'next/image';
import ExperiencedCard from "./ExperiencedCard";

import colorRed from './assets/SupplierVisitingCard/color-red.png'
import colorBlue from './assets/SupplierVisitingCard/color-blue.png'
import colorYellow from './assets/SupplierVisitingCard/color-yellow.png'
import colorGreen from './assets/SupplierVisitingCard/color-green.png'

interface SupplierVisitingCardProps {
  companyName: string;
  contactPersonName: string;
  natureOfBusiness:string;
  themeColor: 'red' | 'blue' | 'green' | 'yellow';
  mobileNumber: string; 
  email: string; 
  website: string; 
  address: string; 
  imageURL: string; 
  brandName: string; 
  

}

const SupplierVisitingCard = ({...props}: SupplierVisitingCardProps) => {

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
            <div className="grid grid-cols-[1fr_1fr]">
               <div className="grid justify-items-center pt-[21%]">
                <img
                  style={{borderColor:props.themeColor}}
                  className=" h-[31vh] w-[18vw]  rounded-[50%]  border-solid left-[52.7%] top-[29%]"
                  src={props.imageURL}
                  alt="hello image"
                  width={500}
                  height={500}
                />
                <div>
                  <p className=' left-[57.7%] top-[70%]'>{props.brandName}</p>
                  <p className=' left-[57.7%] top-[70%]'>{props.natureOfBusiness}</p>
                </div>
               </div>
                <div className=' grid grid-rows-[13vh_10vh_9vh_10vh_9vh] pt-[2%]'>
                  <div>
                    <h1 className="text-[1.3rem] font-extrabold">{props.companyName}</h1>
                    <p>{props.natureOfBusiness}</p>
                  </div>
                  <h3 className="pl-[14%]">{props.contactPersonName}</h3>
                  <h3 className="pl-[17%]">{props.mobileNumber}</h3>
                  <h3 className="pl-[16%]">{props.email}</h3>
                  <h3 className="pl-[12%]">{props.website}</h3>
                  <h3>{props.address}</h3>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SupplierVisitingCard;
