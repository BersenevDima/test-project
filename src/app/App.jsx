import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from '@/router';
import { GlobalStyles } from './GlobalStyles';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <RouterProvider router={router} />
  </QueryClientProvider>
);
