import type { Meta, StoryObj } from '@storybook/react';
import SupplierThemeSelection from './SupplierThemeSelection';
import { fn } from '@storybook/test';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SupplierThemeSelection> = {
  component: SupplierThemeSelection,
  parameters : {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {},
  // args: { buttonFunction: fn() }
} satisfies Meta<typeof SupplierThemeSelection>;

export default meta;
type Story = StoryObj<typeof SupplierThemeSelection>;

export const Basic: Story = {
  args: {
    label:'label',
    buttonTitle:'speedster',
    buttonFunction:()=> console.log('button pressed'),
    closeOnBackdropClick:true, 
    children:'Child Element Here...',
  },

};
