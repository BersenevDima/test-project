import React from "react";
import * as styles from "./notifications-filter.styles";

const items = ["All", "Payments", "System", "Delivery", "Travel"];

export const NotificationsFilter = ({ active, onChange }) => {
  return (
    <styles.Wrapper>
      {items.map((name) => (
        <styles.Item
          key={name}
          $active={active === name}
          onClick={() => onChange(name)}
        >
          {name}
        </styles.Item>
      ))}
    </styles.Wrapper>
  );
};
