<template>
   <div class="home-container">
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
.home-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.left-container {
  flex: 1;
  margin-right: 1rem;
}

.right-container {
  flex: 1;
  margin-left: 1rem;
}
</style>