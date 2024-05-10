import type { Meta, StoryObj } from '@storybook/react';
import RoleCardList from './RoleCardList';
import { ROLES } from '@constants';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RoleCardList> = {
  component: RoleCardList,
  parameters : {
    layout: 'centered',
    backgrounds: {
      default: 'dark', 
      values: [
        { name: 'light', value: '#ffffff' }, 
        { name: 'dark', value: '#002351' },
      ],
    },
    
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    hoverColor: { control: 'color' },
  },
  tags: ['autodocs']
} satisfies Meta<typeof RoleCardList>;

export default meta;
type Story = StoryObj<typeof RoleCardList>;

export const DesktopCardList: Story = {
  args: {roles: ROLES, platform: 'desktop',backgroundColor:"#002351",hoverColor:'#FE8B4C'},
};
export const MobileCardList: Story = {
  args: {roles: ROLES, platform: 'mobile'},
};
