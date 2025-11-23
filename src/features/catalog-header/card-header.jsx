import React from 'react';
import { Qr, Arrow, Portrait } from '@/shared';
import * as style from './card-header.styled';
import { Link } from '@/shared';
import { Paths } from '../../shared';

export const Header = () => (
  <style.Wrapper>
    <style.Title>
      <Portrait />
      <Link to={`${Paths.Catalog.path}/${Paths.Catalog.subroutes.Notifications.path}`}>
        <span>Charlotte</span>
        <Arrow />
      </Link>
    </style.Title>
    <Qr />
  </style.Wrapper>
);
