import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '.';
import { Icons } from '../icons';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset']
    }
  },
  render: ({ children, ...args }) => {
    if (args.variant === 'outline-white-icon') {
      return (
        <Button {...args}>
          <Icons.User />
        </Button>
      );
    }
    return <Button {...args}>{children}</Button>;
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Button',
    variant: 'filled-red',
    type: 'button',
    disabled: false,
    loading: false,
    as: 'button'
  }
};
