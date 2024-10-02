import React from 'react';
import App from './src/pages/Home/App.jsx';
import ErrorPage from './src/pages/ErrorPage/index.jsx';
import Home from './src/pages/Home/App.jsx';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />
  }
];

export default routes;
