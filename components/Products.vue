<template>
  <div class="products">
    <div v-for="(product, index) in products" :key="index" class="product">
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
      <div class="action">
        <div class="count" v-if="product.count >= 1">
          <button class="minus" @click="decrementProductCount(product)" :disabled="product.count <= 0">-</button>
          <span>{{ product.count }}</span>
          <button class="plus" @click="incrementProductCount(product)">+</button>
        </div>
        <BasketButton v-else @addToBasket="addToBasket(product)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Product } from '~/Interfaces/Product'
import { Action, Getter } from "vuex-class";

@Component
export default class YourComponent extends Vue {
  @Getter('basket/basket') basket!: Product[]
  @Action('basket/addProduct') addProduct!: (addProduct: Product) => void
  @Action('basket/incrementProductCount') incrementProductCount!: (incrementProductCount: Product) => void
  @Action('basket/decrementProductCount') decrementProductCount!: (decrementProductCount: Product) => void
    addToBasket(product: Product) {
      this.addProduct(product)
    }
  @Prop({
    type: Array,
    required: true
  }) readonly products!: Product[]
}
</script>

<style lang="scss" scoped>
.count{
  input{
    max-width: rem(20);
    border: 1px solid;
  }
}
</style>
