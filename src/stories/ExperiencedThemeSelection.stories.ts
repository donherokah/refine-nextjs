import type { Meta, StoryObj } from '@storybook/react';
import ExperiencedThemeSelection from './ExperiencedThemeSelection';
import { fn } from '@storybook/test';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ExperiencedThemeSelection> = {
  component: ExperiencedThemeSelection,
  parameters : {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {},
  // args: { buttonFunction: fn() }
} satisfies Meta<typeof ExperiencedThemeSelection>;

export default meta;
type Story = StoryObj<typeof ExperiencedThemeSelection>;

export const Basic: Story = {
  args: {
    label:'label',
    buttonTitle:'speedster',
    buttonFunction:()=> console.log('button pressed'),
    closeOnBackdropClick:true, 
    children:'Child Element Here...',
  },

};
