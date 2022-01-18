<template>
  <nuxt-link to="basket" class="basket">
    В корзине: {{ basketCount }} <br>
    {{ amount }} ₽
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {State, namespace} from "vuex-class";
import {Product} from "~/Interfaces/Product";
const basketStore = namespace('basket')
@Component
export default class BasketIcon extends Vue {
  @State(store => store.basket.basket) basket!: Product[]
  @State(store => store.basket.amount) amount!: number
  @State(store => store.basket.basketCount) basketCount!: number
}
</script>

<style lang="scss" scoped>
.basket{
  border-radius: rem(5);
  font-size: rem(24);
  background-color: rgba(0, 128, 0, 0.86);
  padding: rem(5) rem(10);
  color: #fff;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: rem(10);
  top: rem(10);
  z-index: 2;
}
</style>
