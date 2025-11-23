import React from "react";
import { TransactionItem } from "@/entities";
import { Wrapper, GroupTitle } from "./TransactionList.styled";
import { useTransactionContext } from "../../shared/contexts";
import {groupTransactions} from './groupTransactions';

export const TransactionList = () => {
  const query = useTransactionContext();

  if (!query) return null;

  const { data, isLoading, isError } = query;

  if (isLoading) return <div>Loading…</div>;
  if (isError) return <div>Error</div>;

  const transactions = data?.transactions ?? [];
  const grouped = groupTransactions(transactions);

  return (
    <Wrapper>
      {grouped.Today.length > 0 && (
        <>
          <GroupTitle>Today</GroupTitle>
          {grouped.Today.map((t) => (
            <TransactionItem key={t.id} item={t} />
          ))}
        </>
      )}

      {grouped.Yesterday.length > 0 && (
        <>
          <GroupTitle>Yesterday</GroupTitle>
          {grouped.Yesterday.map((t) => (
            <TransactionItem key={t.id} item={t} />
          ))}
        </>
      )}
    </Wrapper>
  );
};
