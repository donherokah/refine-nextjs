import type { Meta, StoryObj } from '@storybook/react';
import ExperiencedCard from './ExperiencedCard';
import { ExperiencedType } from '@constants/experienced';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ExperiencedCard> = {
  component: ExperiencedCard,
  parameters : {
    layout: 'centered',    
  },
  argTypes: {
    color:{control:'color'}
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExperiencedCard>;

export default meta;
type Story = StoryObj<typeof ExperiencedCard>;

export const Fresher: Story = {
  args: ExperiencedType[0],
};
export const FullTime: Story = {
  args: ExperiencedType[1],
};
export const Internship: Story = {
  args: ExperiencedType[2],
};
export const PartTime: Story = {
  args: ExperiencedType[3],
};

