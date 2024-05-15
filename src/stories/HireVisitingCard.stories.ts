import type { Meta, StoryObj } from '@storybook/react';
import HireVisitingCard from './HireVisitingCard';
import { ExperiencedType } from '@constants/experienced';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof HireVisitingCard> = {
  component: HireVisitingCard,
  parameters : {
    layout: 'centered',    
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HireVisitingCard>;

export default meta;
type Story = StoryObj<typeof HireVisitingCard>;

export const Basic: Story = {
  args: {
    companyName: 'Company Name',
    contactPersonName: 'Contact Person Name',
    natureOfBusiness: 'Nature of Business',
    themeColor: 'blue',
    mobileNumber: '+91 9900653064',
    email: 'ceo@email.com',
    website: 'www.horecah.com',
    address: 'Anywhere St., Any City, ST 12345',
    imageURL: 'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg',
    brandName: 'Brand Name',
  },
};


