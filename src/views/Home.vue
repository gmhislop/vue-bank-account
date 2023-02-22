<template>
  <div class="home">
    <AccountList :selected-account-number="selectedAccountNumber" />
    <AccountCards :accounts="accounts" :active-index="activeIndex" @card-selected="handleCardSelected" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import accountsService from "@/services/accountsService";
import { IAccountData } from "@/types/account";

import AccountCards from "@/components/AccountCards.vue";
import AccountList from "@/components/AccountList.vue";

@Component({
  components: {
    AccountList,
  },
})
export default class Home extends Vue {
  accounts: IAccountData[] = [];
  activeIndex = 0;
  selectedAccountNumber: string | null = null;

  async fetchAccounts() {
    try {
      this.accounts = await accountsService.getAccountGroups();
    } catch (error) {
      console.error(error);
    }
  }

  handleCardSelected(accountNumber: string) {
    this.selectedAccountNumber = accountNumber;
  }

  mounted() {
    this.fetchAccounts();
  }
}
</script>
  
  <style scoped>
  .home {
    display: flex;
  }
  
  .side-menu {
    width: 20rem;
  }
  
  .main-content {
    flex: 1;
  }
  </style>