import type { Preview } from '@storybook/react-vite';
import darkTheme from './dark-theme';

const preview: Preview = {
  parameters: {
    docs: {
      theme: darkTheme
    }
  }
};

export default preview;
