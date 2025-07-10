// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter';

const meta: Meta<typeof Counter> = {
  title: 'components/Counter',
  component: Counter,
  tags:['autodocs'],
     parameters: {
    layout: 'centered',
  },
  argTypes: {
    count: {
    control: 'number',
    description: 'The count value',
  },
    size: {
  control: { type: 'select' },
    options: ['XS', 'Small', 'Large'],
    description: 'Counter size variant',
  },
  }
};

export default meta;

type Story = StoryObj<typeof Counter>;


// ✅ Default story
export const Default: Story = {
  args: {
    // id: 'default-input',
    // label: 'Default Input',
    // variant:'standard',
    // placeholder: 'Enter something...',
    // value: 'Default',
    // onChange: () => {}, 
  },
}; 
