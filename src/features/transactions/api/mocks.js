import { Colors } from "@/shared";

export const mockTransactions = {
  transactions: [
    {
      id: 1,
      title: 'Matthew Billson',
      amount: 56.19,
      category: { name: 'Money Transfer', color: Colors.DarkOrange },
      icon: "/assets/transactions/avatar.png",
      date: 'Jun 9',
      time: '12:08',
    },
    {
      id: 2,
      title: 'Starbucks',
      amount: 122.47,
      category: { name: 'Food', color: Colors.Orange },
      icon: "/assets/transactions/starbucks.png",
      date: 'Jun 8',
      time: '19:21',
    },
    {
      id: 3,
      title: 'Netflix',
      amount: 13.17,
      category: { name: 'Entertainment', color: Colors.LightOrange },
      icon: "/assets/transactions/netflix.png",
      date: 'Jun 8',
      time: '08:53',
    },
  ],
};

