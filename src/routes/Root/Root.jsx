import React from 'react';

import { Navigate } from 'react-router';
import { Paths } from '@/shared';

export const Root = () => <Navigate to={Paths.Catalog.path} />;
