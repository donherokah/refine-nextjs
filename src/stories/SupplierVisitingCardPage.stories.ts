import type { Meta, StoryObj } from '@storybook/react';
import HireVisitingCardPage from './HireVisitingCardPage';
import { fn } from '@storybook/test';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof HireVisitingCardPage> = {
  component: HireVisitingCardPage,
  parameters : {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {},
  // args: { buttonFunction: fn() }
} satisfies Meta<typeof HireVisitingCardPage>;

export default meta;
type Story = StoryObj<typeof HireVisitingCardPage>;

export const Basic: Story = {
  args: {
    label:'label',
    buttonTitle:'speedster',
    buttonFunction:()=> console.log('button pressed'),
    closeOnBackdropClick:true, 
    children:'Child Element Here...',
  },

};
