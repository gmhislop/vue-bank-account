<template>
  <div class="account-cards">
    <div
      v-for="(account, index) in accounts"
      :key="account.accountNumber"
      class="account-card"
      :class="{ active: index === activeIndex }"
      @click="selectAccount(account.accountNumber)"
    >
      <p class="product-name">{{ account.productName }}</p>
      <p>{{ account.holderName }}</p>
      <p>{{ account.accountNumber }}</p>
      <p v-if="account.balance">€ {{ account.balance }}</p>
      <p v-else>€ {{ account.bookBalance }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IAccountData } from "@/types/account";

@Component({})
export default class AccountCard extends Vue {
  @Prop({ required: true })
  accounts!: IAccountData[];

  @Prop({ required: true })
  activeIndex!: number;

  // Emit the selected account number when the card is clicked
  selectAccount(accountNumber: string) {
  this.$emit("card-selected", accountNumber);
}
}
</script>
  
  <style scoped>
  .account-cards {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    padding-top: 2rem;
  }
  .account-card p {
  font-size: 0.75rem;
  color: #444;
  text-align: left;
  margin-bottom: 0.5rem;
}
  
  .account-card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 0.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-size: 1.2rem;
  color: #333;
  }
  .account-card:hover {
    background-color: #eee;
  }
  
  .account-card.active {
    background-color: #ddd;
  }

  .product-name {
    font-weight: bold;
  }
  </style>