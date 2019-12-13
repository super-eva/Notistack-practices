import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import { MyButton } from './button';

const App = (props) => {
  return <MyButton />;
}

ReactDOM.render(
  <SnackbarProvider>
    <App />
  </SnackbarProvider>, 
  document.getElementById('root'));
