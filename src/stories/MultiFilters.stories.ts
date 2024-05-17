import type { Meta, StoryObj } from '@storybook/react';
import MultiFilter from './MultiFilters';
import { fn } from '@storybook/test';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof MultiFilter> = {
  component: MultiFilter,
  parameters : {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {},
  // args: { buttonFunction: fn() }
} satisfies Meta<typeof MultiFilter>;

export default meta;
type Story = StoryObj<typeof MultiFilter>;

export const MultiFilters: Story = {
  args: {
    label:'label',
    buttonTitle:'speedster',
    buttonFunction:()=> console.log('button pressed'),
    handleClose:()=>console.log('filter closed'),
    dataOption:[
      {id: 1,title:'speed ster',isSelected:false},
      {id: 2,title:'speed', isSelected:false},
      {id: 3,title:'speed 3',isSelected:false},
      {id: 4,title:'speed 4',isSelected:false},
      {id: 5,title:'speed 5',isSelected:false},
      {id: 6,title:'speed 6',isSelected:false},
      {id: 7,title:'speed 7',isSelected:false},
      {id: 8,title:'speed 8',isSelected:false},
      {id: 9,title:'speed 9',isSelected:false},
      {id: 10,title:'speed 0',isSelected:false},
      {id: 11,title:'speed 1',isSelected:false},
      {id: 12,title:'speed 2',isSelected:false},
      {id: 13,title:'speed 3',isSelected:false},
      {id: 14,title:'speed 11',isSelected:false},
    ],
    value:[],
  },

};
