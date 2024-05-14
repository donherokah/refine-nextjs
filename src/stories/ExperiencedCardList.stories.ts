import type { Meta, StoryObj } from '@storybook/react';
import ExperiencedCardList from './ExperiencedCardList';
import { ExperiencedType } from '@constants/experienced';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ExperiencedCardList> = {
  component: ExperiencedCardList,
  parameters : {
    layout: 'centered',    
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExperiencedCardList>;

export default meta;
type Story = StoryObj<typeof ExperiencedCardList>;

export const Basic: Story = {
  args: {experiencedCardList: ExperiencedType},
};


