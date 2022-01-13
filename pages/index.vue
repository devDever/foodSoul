<template>
<!--  В ПРИНЦИПЕ ПО ТЗ ВСЕ СДЕЛАНО  -->
<!--  НО КОГДА ПЕРЕХОДИМ МЕЖДУ СТРАНИЦАМИ НА ГЛАВНОЙ *COUNT* сбрасывается ибо уходит запрос  -->
  <Products :products="products" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '~/Interfaces/Product'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      products: []
    }
  },
  async fetch () {
    this.products = (await this.$axios.get('products')).data
    this.products.forEach((product: Product) => {
      product.count = 0
    })
  }
})
</script>
