import { Sheet } from 'react-modal-sheet';
import { ReactNode, useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from './Button';
import { useMediaQuery } from '@mui/material';
import { DesktopNavbar } from './DesktopNavbar';

import { Download, Edit, EyeIcon, GST, Pan, PrimaryLogo, SecondaryLogo, Share } from './assets/icons';
import SupplierVisitingCard from './SupplierVisitingCard';
import JobVisitingCard from './JobVisitingCard';
import RoundButton from './RoundButton';

import Image from 'next/image';




export interface BottomSheetProps {
  label: string;
  buttonTitle: string;
  buttonFunction?: () => void;
  closeOnBackdropClick: boolean;
  children?: ReactNode
}

const BottomSheet = ({children,...props}:BottomSheetProps) => {

  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    console.log('handle speed =>',)
    setOpen(false);
  };

  const handleButtonFunction = () => {
    
    return !props.buttonFunction ? handleClose() : props.buttonFunction()
  };

  const handleBackDropClick = () => {
    return !!props.closeOnBackdropClick ? handleClose() : null;
  }

  const leftNavitems =  [
    {
      id: 1,
      links: [
        {
          id: 1,
          path: '/search-jobs',
          title: 'Search Jobs',
          type: 'link'
        },
        {
          id: 2,
          path: '/manage-jobs',
          title: 'Manage Jobs',
          type: 'link'
        }
      ],
      path: 'jobs',
      title: 'Jobs',
      type: 'dropdown'
    },
    {
      id: 2,
      path: '/learning',
      title: 'Learning',
      type: 'link'
    }
  ];

  const rightNavItems = [
    {
      id: 1,
      path: '/hire',
      title: 'Hire',
      type: 'link'
    },
    {
      id: 2,
      path: '/supplier',
      title: 'Become Supplier',
      type: 'link'
    },
    {
      id: 3,
      path: '/job',
      title: 'Job / Internship',
      type: 'link'
    }
  ]

  const desktopNavbarData = {
    leftNavItems: leftNavitems,
    rightNavItems: rightNavItems,
    logo: SecondaryLogo
  }

  const supplierVisitingData = {
    address:"Anywhere St., Any City, ST 12345",
    brandName:"Brand Name",
    companyName:"Company Name",
    contactPersonName:"Contact Person Name",
    email:"ceo@email.com",
    imageURL:"https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg",
    mobileNumber:"+91 9900653064",
    natureOfBusiness:"Nature of Business",
    themeColor:"blue",
    website:"www.horecah.com"
  }

  const jobData = {
    currentLocation: "current Locaion",
    department: "Japanese cuisine",
    email: "hello@really.com",
    experience: "2-4 years",
    imageURL: "https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    mobileNumber: "+123-456-7890",
    name: "Yanis petros",
    position: "sous chef",
    preferredLocationOne: "Preferred Location 1",
    preferredLocationTwo: "Preferred Location 2",
    themeColor: "red"
  }

  const jobDatas = [jobData,jobData,jobData];


  return (
   <div className='h-screen w-screen'>
    <DesktopNavbar {...desktopNavbarData} />

    <div className='grid grid-cols-[7fr_7fr] gap-4 p-4'>
      <div className='grid gap-4 grid-rows-[max-content_max-content] pt-16'>
      <div className='grid grid-cols-[max-content_max-content] gap-4'>

        <div>
          <div className='h-[22rem] w-[40rem]'>
            <SupplierVisitingCard {...supplierVisitingData} />
          </div>
         
        </div>
        <div className=' w-max flex gap-4 flex-col'>
              <RoundButton
              backgroundColor="white"
          border="1px solid #F3F4F6"
          color="black"
          icon={EyeIcon}
              onClick={() => {}}
            />
              <RoundButton
              backgroundColor="white"
          border="1px solid #F3F4F6"
          color="black"
          icon={Share}
              onClick={() => {}}
            />
              <RoundButton
              backgroundColor="white"
          border="1px solid #F3F4F6"
          color="black"
          icon={Download}
              onClick={() => {}}
            />
              <RoundButton
              backgroundColor="white"
          border="1px solid #F3F4F6"
          color="black"
          icon={Edit}

              onClick={() => {}}
            />
        </div>
      </div>
      <div className='w-[40rem] grid gap-4 justify-items-center'>
        <div className='grid w-max gap-4'>
          <div className='flex w-full gap-4 justify-center border items-center p-2 rounded-[9px] border-solid border-[#EFEFEF]'>
            <Image src={GST} alt='' height={30}/>
            <p>GST</p>
            <p>{'gst document'}</p>
            <RoundButton
              backgroundColor="white"
              border="1px solid #F3F4F6"
              color="black"
              icon={EyeIcon}
              onClick={() => {}}
            />
          </div>
          <div className='flex w-full gap-4 justify-center border items-center p-2 rounded-[9px] border-solid border-[#EFEFEF]'>
            <Image src={Pan} alt='' height={30}/>
            <p>PAN</p>
            <p>{'pan document'}</p>
            <RoundButton
              backgroundColor="white"
              border="1px solid #F3F4F6"
              color="black"
              icon={EyeIcon}
              onClick={() => {}}
            />
          </div>
        </div>
      <Button
            kind="primary"
            onClick={() => {}}
            type="primary"
            text = "Search for Jobs"
          />
      </div>
      </div>
      <div className=''>
        <h1 className='text-[2rem] font-bold'>Recommended</h1>
        <div className=' w-[20rem] pt-8 grid gap-4'>
          {
            jobDatas.map((data)=> <JobVisitingCard {...data} />)
          }
        </div>
      </div>
    </div>
    
   </div>
  );
};

export default BottomSheet;
