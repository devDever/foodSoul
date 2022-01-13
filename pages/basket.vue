<template>
  <div class="wrapper">
    <div class="bread-crumbs">
      <nuxt-link to="/">Главная</nuxt-link> / Корзина
    </div>
    <div class="products">
      <div v-for="(product, index) in products" :key="index" class="product">
        <div class="count">
          X{{ product.count }}
        </div>
        <div class="image">
          <img :src="product.image" :alt="product.title">
        </div>
        <div class="description">
          <h3 class="title">
            {{ product.title }}
          </h3>
          <p class="price">
            {{ product.price }} ₽
          </p>
        </div>
      </div>
    </div>
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
import {Action, Getter} from "vuex-class";
import {Modal} from "~/Interfaces/Modal";

@Component
export default class Basket extends Vue {
  modal () {
    this.showModal({
      show: true,
      text: 'Заказ оформлен',
      color: '#6ad943'
    })
  }
  @Getter('basket/basket') products!: Product[]
  @Action('modal/showModal') showModal!: (showModal: Modal) => void
}
</script>

<style lang="scss" scoped>
.bread-crumbs{
  font-size: rem(24);
  padding-top: rem(20);
  padding-left: rem(10);
}

.products{
  .product{
    .count{
      position: absolute;
      top: rem(10);
      right: rem(10);
      font-size: rem(18);
    }
  }
}

.order-wrapper{
  .order{
    background-color: #10cb10;
    color: #fff;
    padding: rem(10) rem(20);
    font-size: rem(18);
    border-radius: rem(5);
  }
  display: flex;
  justify-content: flex-end;
  padding-right: rem(10);
}
</style>
