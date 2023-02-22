<template>
  <div class="list row">
    <div>
      <ul>
        <li v-for="account in accounts" :key="account.accountNumber">
          <button @click="selectAccount(account.accountNumber)">
            {{ account.accountNumber }} - {{ account.productName }} - {{ account.bookBalance || account.balance }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import accountsService from '../services/accountsService';
import { IAccountData } from '@/types/account';

@Component
export default class AccountList extends Vue {
  accounts: IAccountData[] = [];

  async fetchAccounts() {
    try {
      this.accounts = await accountsService.getAccountGroups();
    } catch (error) {
      console.error(error);
    }
  }

  selectAccount(accountNumber: string) {
    this.$router.push({ path: `/account/${accountNumber}` });
  }

  mounted() {
    this.fetchAccounts();
  }
}
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

button {
  background-color: white;
  border: none;
  text-align: left;
  cursor: pointer;
  width: 100%;
}
</style>
