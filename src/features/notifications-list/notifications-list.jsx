import React from "react";
import { NotificationItem } from "@/entities";
import * as styles from "./notifications-list.slyles";

export const NotificationsList = ({ notifications }) => {
  const grouped = notifications.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  const formatDate = (dateStr) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const date = new Date(dateStr);

    if (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    ) {
      return "Today";
    }
    if (
      date.getFullYear() === yesterday.getFullYear() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getDate() === yesterday.getDate()
    ) {
      return "Yesterday";
    }

    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: date.getFullYear() === today.getFullYear() ? undefined : "numeric",
    });
  };

  return (
    <div>
      {sortedDates.map((date) => (
        <styles.Container key={date}>
          <styles.DateHeader>{formatDate(date)}</styles.DateHeader>
          {grouped[date].map((item) => (
            <NotificationItem key={item.id} item={item} />
          ))}
        </styles.Container>
      ))}
    </div>
  );
};
