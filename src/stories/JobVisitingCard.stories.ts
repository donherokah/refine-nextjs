import type { Meta, StoryObj } from '@storybook/react';
import JobVisitingCard from './JobVisitingCard';
import { ExperiencedType } from '@constants/experienced';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof JobVisitingCard> = {
  component: JobVisitingCard,
  parameters : {
    layout: 'centered',    
  },
  tags: ['autodocs'],
} satisfies Meta<typeof JobVisitingCard>;

export default meta;
type Story = StoryObj<typeof JobVisitingCard>;

export const Basic: Story = {
  args: {
    name: 'Yanis petros',
    experience: '2-4 years',
    position: 'sous chef',
    department: 'Japanese cuisine',
    imageURL: 'https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    themeColor: 'red',
    mobileNumber: '+123-456-7890',
    email: 'hello@really.com',
    currentLocation: 'current Locaion',
    preferredLocationOne: 'Preferred Location 1',
    preferredLocationTwo: 'Preferred Location 2'
  },
};


