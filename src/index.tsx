import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { store } from '@features/app/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import theme from '@styles/theme';
import { ConfirmProvider } from 'material-ui-confirm';

import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConfirmProvider>
        <CssBaseline />
        <App />
      </ConfirmProvider>
    </ThemeProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
