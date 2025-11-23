import React from 'react';
import { Arrow, Notification } from '@/shared';
import { useNavigate } from 'react-router-dom';
import * as styles from './notifications-header.styles';

export const NotificationsHeader = () => {
  const navigate = useNavigate();

  return (
    <styles.Wrapper>
      <styles.BackButton onClick={() => navigate(-1)}>
        <Arrow />
      </styles.BackButton>

      <styles.Title>Notifications</styles.Title>

      <styles.RightIcon>
        <Notification />
      </styles.RightIcon>
    </styles.Wrapper>
  );
};
