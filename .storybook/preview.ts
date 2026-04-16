import type { Preview } from '@storybook/react-vite';
import darkTheme from './dark-theme';
import '../src/shared/assets/styles/index.scss';

const preview: Preview = {
  parameters: {
    docs: {
      theme: darkTheme
    }
  }
};

export default preview;
