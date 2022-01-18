<template>
<!--  В ПРИНЦИПЕ ПО ТЗ ВСЕ СДЕЛАНО  -->
<!--  НО КОГДА ПЕРЕХОДИМ МЕЖДУ СТРАНИЦАМИ НА ГЛАВНОЙ *COUNT* сбрасывается ибо уходит запрос  -->
  <Products :products="products" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Product } from '~/Interfaces/Product'
import {Action, State} from "vuex-class";

@Component
export default class YourComponent extends Vue {
  @State('products') products!: Product[]
}
</script>
