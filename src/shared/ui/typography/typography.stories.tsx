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
        'text_L',
        'text_M',
        'text_S'
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
      <Typography variant='heading_1'>Heading 1</Typography>
      <Typography variant='heading_2'>Heading 2</Typography>
      <Typography variant='heading_3'>Heading 3</Typography>
      <Typography variant='heading_4'>Heading 4</Typography>
      <Typography variant='text_L'>Text L — крупный текст</Typography>
      <Typography variant='text_M'>Text M — средний текст</Typography>
      <Typography variant='text_S'>Text S — мелкий текст</Typography>
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
