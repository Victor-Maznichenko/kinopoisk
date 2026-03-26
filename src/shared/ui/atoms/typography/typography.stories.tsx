import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './index';

const meta = {
  title: 'shared/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'heading_1',
        'heading_2',
        'heading_3',
        'heading_4',
        'heading_5',
        'heading_6',
        'text-m',
        'text_s'
      ],
      description: 'Стиль типографики'
    },
    as: {
      control: 'text',
      description: 'HTML-тег для рендера (например, h1, p, span)'
    },
    children: {
      control: 'text',
      description: 'Содержимое компонента'
    }
  }
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  args: {
    variant: 'heading_1'
  },

  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Typography variant='heading_1'>Heading 1 (72px)</Typography>
      <Typography variant='heading_2'>Heading 2 (48px)</Typography>
      <Typography variant='heading_3'>Heading 3 (32px)</Typography>
      <Typography variant='heading_4'>Heading 4 (24px)</Typography>
      <Typography variant='heading_5'>Heading 5 (20px)</Typography>
      <Typography variant='heading_6'>Heading 6 (18px)</Typography>
      <Typography variant='text-m'>Text medium (16px) — обычный текст</Typography>
      <Typography variant='text-s'>Text small (14px) — маленький текст</Typography>
    </div>
  )
};

export const Playground: Story = {
  args: {
    children: 'Этот заголовок отрендерен как <h1>',
    variant: 'heading_1',
    as: 'h1'
  }
};
