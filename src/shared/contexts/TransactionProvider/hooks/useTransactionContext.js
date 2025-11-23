import { useContext } from 'react';
import { TransactionContext } from '../context';

export const useTransactionContext = () => useContext(TransactionContext);
