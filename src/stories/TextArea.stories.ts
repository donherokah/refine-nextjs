import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';
import { ROLES } from '@constants';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TextArea> = {
  component: TextArea,
  parameters : {
    layout: 'centered',
    backgrounds: {
      default: 'light', 
      values: [
        { name: 'light', value: '#ffffff' }, 
        { name: 'dark', value: '#002351' },
      ],
    },
    
  },
  tags: ['autodocs']
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {
  args: {
  
    label: 'label',
    helperText: 'Helper Text',
    placeholder: 'Default textarea',
    value:'',
   
    maxLength:50,
    disabled: true,
    onChange: (value)=> console.log('the new value ',value)
  },
};
