import React from "react";
import * as styles from "./TransactionItem.styles";

export const TransactionItem = ({ item }) => {
  return (
    <styles.Wrapper>
      <styles.IconWrapper>
        <img src={item.icon} alt={item.title} />
      </styles.IconWrapper>

      <styles.Info>
        <styles.Name>{item.title}</styles.Name>

        <styles.CategoryRow>
          <styles.Dot color={item.category.color} />
          <styles.Category>{item.category.name}</styles.Category>
        </styles.CategoryRow>
      </styles.Info>

      <styles.RightBlock>
        <styles.Amount>
          {`$${item.amount}`}
        </styles.Amount>
        <styles.Date>
          {item.date}, {item.time}
        </styles.Date>
      </styles.RightBlock>
    </styles.Wrapper>
  );
};
