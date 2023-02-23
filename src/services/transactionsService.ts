import { ITransactionGroup } from '@/types/transaction'
import  TransactionDataOne  from '@/data/transactions/NL14ABNA4415260276.json';
import  TransactionDataTwo  from '@/data/transactions/NL18ABNA5476393838.json';
import  TransactionDataThree  from '@/data/transactions/NL72ABNA4416709382.json';


async function getTransactions(accountNumber: string): Promise<ITransactionGroup> {
  if (accountNumber === 'NL14ABNA4415260276') {
    return TransactionDataOne;
  } else if (accountNumber === 'NL18ABNA5476393838') {
    return TransactionDataTwo;
  } else if (accountNumber === 'NL72ABNA4416709382') {
    return TransactionDataThree;
  } else {
    return TransactionDataOne;
  }
  console.log(TransactionDataOne)
}

export default {
  getTransactions,
};
