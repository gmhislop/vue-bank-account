<template>
    <div class="home">
      <div class="side-menu">
        <account-cards :accounts="accounts" :active-index="activeIndex" />
      </div>
      <div class="main-content">
        <account-list :account-number="accounts[activeIndex].accountNumber" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import AccountList from "../components/AccountList.vue";
  import AccountCards from '../components/AccountCard.vue';
  import accountsService from "../services/accountsService";
  import { IAccountData } from "../types/account";
  
  @Component({
    components: {
      AccountList,
      AccountCards,
    },
  })
  export default class Home extends Vue {
    accounts: IAccountData[] = [];
    activeIndex: number = 0;
  
    async created() {
      try {
        this.accounts = await accountsService.getAccountGroups();
      } catch (error) {
        console.error(error);
      }
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