<template>
  <div class="delete-button">
    <img src="/img/delete.png" alt="Удалить иконка">
  </div>
</template>

<script>
export default {
  name: "DeleteButton"
}
</script>

<style lang="scss" scoped>
.delete-button{
  width: rem(38);
  height: rem(38);
  border-radius: 50%;
  display: block;
  img{
    width: 100%;
  }
}
</style>
