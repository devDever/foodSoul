<template>
  <div class="modal" :style="{backgroundColor: modal.color}" @click.stop>
    {{ modal.text }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import {Action, Getter, State} from "vuex-class";

@Component
export default class Modal extends Vue {
  @State(modal => modal.modal.modal) modal!: Modal
  @Action('modal/hideModal') hideModal!: () => void
  mounted () {
    setTimeout(() => {
      this.hideModal()
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  bottom: rem(10);
  right: rem(10);
  padding: rem(10) rem(20);
  font-size: rem(26);
  color: #fff;
}
</style>
