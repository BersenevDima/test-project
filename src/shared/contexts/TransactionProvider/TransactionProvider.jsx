import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { TransactionContext } from './context';
import { api } from '../../../features/transactions/api/api';

export const TransactionProvider = ({ children }) => {
  const query = useQuery({
    queryFn: api.getTransactions,
    queryKey: ['transactions'],
    retry: false,
  });

  return (
    <TransactionContext.Provider value={query}>
      {children}
    </TransactionContext.Provider>
  );
};
