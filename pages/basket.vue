<template>
  <div class="wrapper">
    <div class="bread-crumbs">
      <nuxt-link to="/">Главная</nuxt-link>
      / Корзина
    </div>
    <Products :products="products"/>
    <div class="order-wrapper">
      <button class="order" @click="modal">
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {Product} from '~/Interfaces/Product'
import {Action, Getter, State} from "vuex-class";
import {Modal} from "~/Interfaces/Modal";

@Component
export default class Basket extends Vue {
  modal() {
    this.showModal({
      show: true,
      text: 'Заказ оформлен',
      color: '#6ad943'
    })
  }

  @State(store => store.basket.basket) products!: Product[]
  @Action('modal/showModal') showModal!: (showModal: Modal) => void
}
</script>

<style lang="scss" scoped>
.bread-crumbs {
  font-size: rem(24);
  padding-top: rem(20);
  padding-left: rem(10);
}

.order-wrapper {
  padding-bottom: rem(20);

  .order {
    background-color: #10cb10;
    color: #ffffff;
    padding: rem(10) rem(20);
    font-size: rem(18);
    border-radius: rem(5);
  }

  display: flex;
  justify-content: flex-end;
  padding-right: rem(10);
}

.placeholder {
  text-align: center;
  font-size: rem(23);
}
</style>
