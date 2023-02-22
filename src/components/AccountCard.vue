<template>
    <div class="account-cards">
      <div
        v-for="(account, index) in accounts"
        :key="account.accountNumber"
        class="account-card"
        :class="{ active: index === activeIndex }"
        @click="activeIndex = index"
      >
        <p>{{ account.productName }}</p>
        <p>{{account.holderName}}</p>
        <p>{{ account.accountNumber }}</p>
        <p v-if="account.balance">Balance: € {{ account.balance }}</p>
        <p v-else>Book Balance: € {{ account.bookBalance }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator";
  import { IAccountData } from '@/types/account';
  
  @Component
  export default class AccountCards extends Vue {
    @Prop() accounts!: IAccountData[];
    @Prop() activeIndex!: number;
  }
  </script>
  
  <style scoped>
  .account-cards {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
  }
  
  .account-card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
  
  .account-card:hover {
    background-color: #eee;
  }
  
  .account-card.active {
    background-color: #ddd;
  }
  </style>