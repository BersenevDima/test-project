import React from 'react';
import { Container, Flex } from '@/shared';
import { Header as CatalogHeader, CardsList, TransactionList } from '@/features';
import { Toolbar } from '@/components';
import { Expenses } from '@/widgets';
import { TransactionProvider } from '../../shared/contexts';

export const Catalog = () => (
  <Container>
    <Flex gap="24px" flexdirection="column">
      <TransactionProvider>
        <CatalogHeader />
        <Toolbar />
        <CardsList />
        <Expenses />
        <TransactionList />
      </TransactionProvider>
    </Flex>
  </Container>
);
