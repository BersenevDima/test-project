import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import * as pages from './routes';
import { Paths } from './shared';
import { Layout } from './components';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: Paths.Root.path,
        element: <pages.Root />,
      },
      {
        path: Paths.Catalog.path,
        children: [
          {
            path: Paths.Catalog.path,
            element: <pages.Catalog />,
          },
          {
            path: Paths.Catalog.subroutes.Notifications.path,
            element: <pages.Notifications />,
          },
        ],
      },
      {
        path: Paths.Payments.path,
        element: <pages.Payments />,
      },
      {
        path: Paths.History.path,
        element: <pages.History />,
      },
      {
        path: Paths.Analitics.path,
        element: <pages.Analytics />,
      },
      {
        path: Paths.Chats.path,
        element: <pages.Chats />,
      },
    ],
  },
]);
