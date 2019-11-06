import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js from src/components
configure(require.context('../src/components', true, /\.stories\.js$/), module);
