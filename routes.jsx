import React from 'react';
import App from './src/pages/Home/App.jsx';
import ErrorPage from './src/pages/ErrorPage/index.jsx';
import Introduction from './src/pages/Introduction/index.jsx';
import Home from './src/pages/Home/App.jsx';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/introduction",
    element: <Introduction />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />
  }
];

export default routes;
