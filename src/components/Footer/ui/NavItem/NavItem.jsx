import React from 'react';
import * as shared from '@/shared';
import { useLocation } from 'react-router';
import { Wrapper } from './NavItem.styles';
import { Icons } from './constants';

export const NavItem = ({ label, route, getStyles }) => {
  const { pathname } = useLocation();

  const isCurrentPage = pathname.includes(route);

  const { fill, stroke, color } = getStyles({ isActive: isCurrentPage });

  const Icon = Icons[route];

  return (
    <shared.Link to={route}>
      <Wrapper color={color}>
        <Icon fill={fill} stroke={stroke} />
        <span>{label}</span>
      </Wrapper>
    </shared.Link>
  );
};
