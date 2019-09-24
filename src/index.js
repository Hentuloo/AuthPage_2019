import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';

// redux
import { Provider } from 'react-redux';
import store from 'store';

// Page templates
import mainTheme from 'themes/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';

ReactDOM.render(
  <ThemeProvider theme={mainTheme}>
    <Provider store={store}>
      <GlobalStyles fontColor />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
