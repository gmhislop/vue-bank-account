import { IAccountData } from '@/types/account';
import accountsData from '@/data/accounts.json';

const getAccountGroups = async (): Promise<IAccountData[]> => {
  const accountGroups = accountsData.accountGroups;
  const accounts: IAccountData[] = [];

  for (const group of accountGroups) {
    accounts.push(...group.accounts);
  }

  return accounts;
};

export default {
  getAccountGroups,
};
