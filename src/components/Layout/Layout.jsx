import React from 'react';
import { Outlet } from 'react-router';
import { Footer } from '@/components/Footer';

export const Layout = () => (
  <>
    <Outlet />
    <Footer />
  </>
);
