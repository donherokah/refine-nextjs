import type { Meta, StoryObj } from '@storybook/react';
import ExperiencedVisitingCardPage from './ExperiencedVisitingCardPage';
import { fn } from '@storybook/test';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ExperiencedVisitingCardPage> = {
  component: ExperiencedVisitingCardPage,
  parameters : {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {},
  // args: { buttonFunction: fn() }
} satisfies Meta<typeof ExperiencedVisitingCardPage>;

export default meta;
type Story = StoryObj<typeof ExperiencedVisitingCardPage>;

export const Basic: Story = {
  args: {
    label:'label',
    buttonTitle:'speedster',
    buttonFunction:()=> console.log('button pressed'),
    closeOnBackdropClick:true, 
    children:'Child Element Here...',
  },

};
