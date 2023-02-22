import { IAccountData, IAccountGroup } from '@/types/account';
import accountsData from '@/data/accounts.json';

const getAccountGroups = async (): Promise<IAccountGroup['accountGroups']> => {
  return accountsData.accountGroups;
};

export default {
  getAccountGroups,
};
