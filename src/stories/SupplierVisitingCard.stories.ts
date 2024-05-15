import type { Meta, StoryObj } from '@storybook/react';
import SupplilerVisitingCard from './SupplierVisitingCard';
import { ExperiencedType } from '@constants/experienced';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SupplilerVisitingCard> = {
  component: SupplilerVisitingCard,
  parameters : {
    layout: 'centered',    
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SupplilerVisitingCard>;

export default meta;
type Story = StoryObj<typeof SupplilerVisitingCard>;

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


