<template>
  <div class="brad-crumbs">
    <nuxt-link v-for="(page, index) in crumbs" :key="index" :to="page.link">{{ page.name }}</nuxt-link> / <span>hello</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'


@Component
export default class YourComponent extends Vue {
  @Prop({
    type: Array,
    required: true
  }) crumbs!: []
}
</script>

<style scoped>

</style>
