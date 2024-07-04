import React from 'react';
import App from './src/pages/Home/App.jsx';
import ErrorPage from './src/pages/ErrorPage/index.jsx';
import AboutMe from './src/pages/aboutMe/index.jsx';
import Introduction from './src/pages/Introduction/index.jsx';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutMe",
    element: <AboutMe />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/introduction",
    element: <Introduction />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
