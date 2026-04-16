import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReadMoreText } from '.';

const meta = {
  title: 'shared/ReadMoreText',
  component: ReadMoreText,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ReadMoreText>;

export default meta;
type Story = StoryObj<typeof meta>;

const TEXT = 'March 9, 2011 (Holy !@#$, I feel old.)\r\n\r\n> When once distant UFOs become a terrifying threat and an alien invasion force begins attacking Earths major costal and riverside cities, a U.S Marine staff sergeant and his team are sent into battle only to find they must take it upon themselves to defeat an unknown enemy and protect what remains of Los Angeles.\r\n\r\nLook, I enjoyed "Battle: Los Angeles (2011)" for what it was. It was a\'ight. Likewise, this movie is also a\'ight.\r\n\r\nI will say though, that the U.S. military propaganda feels more in your face here. Also, Alan\'s acting feels off sometimes, especially in his final speech.\r\n\r\nP.S. In case all of that went over your head, I\'m saying "War Machine (2026)" is literally "Battle: Los Angeles (2011)".\r\n\r\nGo \'head. Watch the two movies back to back, side by side, then come back and tell me it ain\'t the same movie.';

export const Example: Story = {
  args: {
    text: TEXT,
    maxLength: 200
  }
};
