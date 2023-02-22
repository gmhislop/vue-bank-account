<script lang="ts">
import { ITransactionGroup } from '@/types/transaction';
import transactionsService from '@/services/transactionsService';
import { IAccountData } from '@/types/account';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class AccountDetails extends Vue {
  accountNumber: string = '';
  account: IAccountData = {
accountNumberType: '', accountNumber: '', productName: '', currencyCode: '', holderName: '', bankCountryCode: '', bankIdentifierCode: '', balance: 0, bookBalance: 0
};
  transactions: ITransactionGroup[] = [];
  $store: any;

  created() {
    // Get account details from the accounts list using the account number
    const accounts: IAccountData[] = this.$store.state.accounts;
    this.account = accounts.find((account: IAccountData) => account.accountNumber === this.accountNumber)!;

    // Mocked service call to get the account's transaction history
    transactionsService.getTransactions(this.accountNumber).then((transactions: ITransactionGroup[]) => {
      this.transactions = transactions;
    });
  }
}
</script>

<style scoped>
h2,
h3 {
  margin-top: 0;
}
</style>



