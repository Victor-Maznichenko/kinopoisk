import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputText } from '.';

const meta = {
  title: 'shared/InputText',
  component: InputText,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
    defaultValue: { control: false }
  }
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    variant: 'default',
    readOnly: false,
    disabled: false,
    hasClear: false,
    placeholder: 'Введите текст',
    label: 'Название input :)',
    type: 'text'
  }
};
