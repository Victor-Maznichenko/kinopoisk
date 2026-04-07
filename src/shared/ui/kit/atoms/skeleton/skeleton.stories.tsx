import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '.';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['circle', 'square', 'text']
    },
    textLines: {
      control: { type: 'number', min: 1, step: 1 }
    },
    width: {
      control: 'text'
    },
    height: {
      control: 'text'
    },
    lineHeight: {
      control: 'text'
    }
  },
  render: (args) => (
    <div style={{ width: 200, height: 60 }}>
      <Skeleton {...args} />
    </div>
  )
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    variant: 'square',
    textLines: 1
  }
};
