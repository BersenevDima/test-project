import React from "react";
import * as style from "./Expenses.styles";
import * as ui from "./ui";
import { EXPENSES_PARTS, MONTH, TOTAL_EXPENSES } from "./constants";

export const Expenses = () => {
  return (
    <style.Wrapper>
      <style.TopRow>
        <style.Title>
          Expenses in <span>{MONTH}</span>
        </style.Title>

        <style.Amount>${TOTAL_EXPENSES.toLocaleString()}</style.Amount>
      </style.TopRow>

      <style.BarWrapper>
        {EXPENSES_PARTS.map((p, i) => (
          <ui.BarPart key={i} width={p.percent} color={p.color} />
        ))}
      </style.BarWrapper>
    </style.Wrapper>
  );
};
