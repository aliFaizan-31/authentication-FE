import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/authContext';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <App />
      </SnackbarProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
