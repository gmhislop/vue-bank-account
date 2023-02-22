import { ITransactionGroup } from '@/types/transaction'


async function getTransactions(accountNumber: string): Promise<ITransactionGroup[]> {
  // Load transactions data from the appropriate JSON file based on the account number
  const response = await fetch(`/data/transactions/${accountNumber}.json`);
  const data = await response.json();
  return data.transactions;
}

export default {
  getTransactions,
};
