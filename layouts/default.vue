<template>
  <div>
    <transition name="slide">
      <BasketIcon v-if="basket.length" />
    </transition>
    <Nuxt />
    <transition name="bounce">
      <Modal v-if="modal.show" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from "vuex-class";
import {Product} from "~/Interfaces/Product";
import {Modal} from "~/Interfaces/Modal";
@Component
export default class Default extends Vue {
  @Getter('basket/basket') basket!: Product[]
  @Getter('modal/modal') modal!: Modal
  @Action('basket/getFromLocal') getLocalProducts: any
  mounted() {
    this.getLocalProducts()
  }
}
</script>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
  transition: .5s
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%)
}


.bounce-enter-active, .bounce-leave-active {
  transition: .3s
}
.bounce-enter, .bounce-leave-to {
  transform: translateX(100%);
}
</style>
