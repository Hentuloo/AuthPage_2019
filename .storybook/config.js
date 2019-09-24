import {
  configure,
  getStorybook,
  addDecorator,
} from '@storybook/react';

import * as React from 'react';
import GlobalStyle from '../src/themes/GlobalStyles';
import mainTheme from '../src/themes/theme';
import { ThemeProvider } from 'styled-components';

// basic setup for storybook, depends on your project structure
const req = require.context(
  '../src/components',
  true,
  /\.stories\.js$/,
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobal = cb => (
  <ThemeProvider theme={mainTheme}>
    <>
      <GlobalStyle />
      {cb()}
    </>
  </ThemeProvider>
);

addDecorator(withGlobal);

configure(loadStories, module);

// this will return an object with all stories inside
const stories = getStorybook();
