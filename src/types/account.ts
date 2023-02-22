export interface IAccountData {
  accountNumberType: string;
  accountNumber: string;
  productName: string;
  currencyCode: string;
  holderName: string;
  bankCountryCode: string;
  bankIdentifierCode: string;
  balance?: number;
  bookBalance?: number;
}

export interface IAccountGroup {
  groupName: string;
  groupId: string;
  accounts: IAccountData[];
}

export interface IAccountsData {
  accountGroups: IAccountGroup[];
}
