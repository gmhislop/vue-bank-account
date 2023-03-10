<template>
  <div class="list row">
    <div class="col-md-4">
      <AccountCards :accounts="accounts" :active-index="activeIndex" @card-selected="selectAccount" />
    </div>
    <div class="col-md-8 overflow-x-scroll">
      <div v-if="selectedAccount">
        <h3>Transactions for {{ selectedAccount.accountNumber }}</h3>
        <div class="search_filter">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery"
            @input="filterTransactions">
          <input type="date" v-model="filterDate" @input="filterTransactions" style="width:30%; margin-left: 20px;">
        </div>

        <table class="table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Book Date</th>
              <th>Date Time</th>
              <th>Credit/Debit</th>
              <th>Amount</th>
              <th>Account Number</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.transactionId">
              <td>{{ transaction.transactionId }}</td>
              <td>{{ transaction.bookDate }}</td>
              <td>{{ transaction.transactionDateTime.slice(11, 19) }}</td>
              <td>{{ transaction.creditDebitIndicator }}</td>
              <td :class="{ 'text-danger': transaction.creditDebitIndicator === 'CREDIT', 'text-success': transaction.creditDebitIndicator !== 'CREDIT' }">{{ formatAmount(transaction.amount) }}</td>
              <td>{{ transaction.counterpartyAccountNumber }}</td>
              <td>{{ transaction.counterpartyName }}</td>
              <td>{{ transaction.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import transactionsService from "@/services/transactionsService";
import { IAccountData } from "@/types/account";
import { ITransactionData, ITransactionGroup } from "@/types/transaction";

import AccountCards from "@/components/AccountCards.vue";
import accountsService from "@/services/accountsService";

@Component({
  components: {
    AccountCards,
  },
})
export default class AccountList extends Vue {
  accounts: IAccountData[] = [];
  transactions: ITransactionData[] = [];
  activeIndex = 0;
  selectedAccount: IAccountData | null = null;
  searchQuery = '';
  filterDate = '';
  filterTransactions: ((payload: Event) => void) | undefined;
  filteredTransactions: any;

  async fetchTransactions(accountNumber: string) {
    try {
      const transactionGroups: ITransactionGroup = await transactionsService.getTransactions(accountNumber);
      this.transactions = transactionGroups.transactions;
      console.log(this.transactions);
    } catch (error) {
      console.error(error);
    }
  }

  selectAccount(accountNumber: string) {
    this.activeIndex = this.accounts.findIndex(account => account.accountNumber === accountNumber);
    this.selectedAccount = this.accounts[this.activeIndex];
    this.fetchTransactions(accountNumber);
  }

  formatAmount(amount: number): string {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(amount);
  }

  async mounted() {
    try {
      this.accounts = await accountsService.getAccountGroups();
      if (this.accounts.length > 0) {
        this.selectedAccount = this.accounts[0];
        this.fetchTransactions(this.selectedAccount.accountNumber);
      }
    } catch (error) {
      // console.error(error);
    }
  }
  
}
</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col-md-4 {
  flex: 0 0 auto;
  width: 33.33%;
}

.col-md-8 {
  flex: 0 0 auto;
  width: 66.66%;
}

.overflow-x-scroll {
  overflow-x: scroll;
}
.search_filter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.search_filter input {
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 5px;
  outline: 0;
}

.search_filter input:first-child {
  width: 70%;
}


.list {
  margin-top: 40px;
}

.list h3 {
  margin-bottom: 20px;
}

.list table {
  border-collapse: collapse;
  margin-bottom: 30px;
}


.list th,
.list td {
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 10px;
  padding-inline: 30px;
  white-space: nowrap;
  width: 30px;
}

.list th {
  background-color: #f2f2f2;
}

.list td.text-success {
  color: green;
}

.list td.text-danger {
  color: red;
}


/* scrollbar styling */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #ddd; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #ccc; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #eef; 
}
</style>

