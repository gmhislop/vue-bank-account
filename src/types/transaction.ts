export interface ITransactionData {
  transactionId: string;
  bookDate: string;
  transactionDateTime: string;
  creditDebitIndicator: string;
  amount: number;
  counterpartyAccountNumber: string;
  counterpartyName: string;
  description: string;
}

export interface ITransactionGroup {
  account: {
    accountNumber: string;
    currencyCode: string;
  };
  transactions: ITransactionData[];
}
