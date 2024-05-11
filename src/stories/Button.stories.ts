import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ROLES } from '@constants';
import { fn } from '@storybook/test';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  parameters : {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  args: { onClick: fn() },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {title:'button'}
};
