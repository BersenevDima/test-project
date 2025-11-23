import React from "react";
import * as styles from "./notification-item.styles";

export const NotificationItem = ({ item }) => {
  return (
    <styles.Wrapper>
      <styles.IconWrap>
        <img src={item.icon} alt={item.title} />
      </styles.IconWrap>

      <styles.Right>
        <styles.Title>{item.title}</styles.Title>

        {item.amount !== null && (
          <styles.Amount $negative={item.amount < 0}>
            {item.amount < 0 ? `-$${Math.abs(item.amount)}` : `+$${item.amount}`}
          </styles.Amount>
        )}
        {(item.cardName || item.balanceAfter) && (
          <styles.SubInfo>
            {item.cardName && (
              <span>
                {item.cardName}
                {item.cardLast4 ? ` •• ${item.cardLast4}` : ""}
              </span>
            )}

            {item.balanceAfter && (
              <>
                <span>${item.balanceAfter.toFixed(2)}</span>
              </>
            )}
          </styles.SubInfo>
        )}

        <styles.Info>
          <span>
            {item.date} {item.time} ·
          </span>
          <span>{item.category}</span>
        </styles.Info>


      </styles.Right>
    </styles.Wrapper>
  );
};
