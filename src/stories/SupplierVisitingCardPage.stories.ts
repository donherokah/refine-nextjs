import type { Meta, StoryObj } from '@storybook/react';
import supplierVisitingCardPage from './SupplierVisitingCardPage';
import { fn } from '@storybook/test';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof supplierVisitingCardPage> = {
  component: supplierVisitingCardPage,
  parameters : {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {},
  // args: { buttonFunction: fn() }
} satisfies Meta<typeof supplierVisitingCardPage>;

export default meta;
type Story = StoryObj<typeof supplierVisitingCardPage>;

export const Basic: Story = {
  args: {
    label:'label',
    buttonTitle:'speedster',
    buttonFunction:()=> console.log('button pressed'),
    closeOnBackdropClick:true, 
    children:'Child Element Here...',
  },

};
