import { mockTransactions } from "./mocks";


export const api = {
  getTransactions: async () => {
    return Promise.resolve(mockTransactions);
  },
};
