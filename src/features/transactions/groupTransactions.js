export const groupTransactions = (transactions) => {
  const groups = {
    Today: [],
    Yesterday: [],
  };

  transactions.forEach((t) => {
    if (t.date === "Jun 9") {
      groups.Today.push(t);
    } else if (t.date === "Jun 8") {
      groups.Yesterday.push(t);
    }
  });

  return groups;
};
