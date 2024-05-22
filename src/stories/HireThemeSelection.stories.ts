import type { Meta, StoryObj } from '@storybook/react';
import HireThemeSelection from './HireThemeSelection';
import { fn } from '@storybook/test';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof HireThemeSelection> = {
  component: HireThemeSelection,
  parameters : {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {},
  // args: { buttonFunction: fn() }
} satisfies Meta<typeof HireThemeSelection>;

export default meta;
type Story = StoryObj<typeof HireThemeSelection>;

export const Basic: Story = {
  args: {
    label:'label',
    buttonTitle:'speedster',
    buttonFunction:()=> console.log('button pressed'),
    closeOnBackdropClick:true, 
    children:'Child Element Here...',
  },

};
