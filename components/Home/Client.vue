<template>
  <div class="client flexed justify-center align-center">
    <div class="client-logo flexed justify-center align-center">
      <!-- <a :href="client.link" class="flexed justify-center align-center"> -->
      <img :src="client.logo" :alt="client.name">
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    client: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.client {
  width: 25%;
  @include responsive(mob) {
    width: 50%;
  }
  .client-logo {
    width: 200px;
    height: 60px;
    border: solid 1px $border-color;
    padding: 15px;
    box-sizing: content-box;
    margin: 15px;
    border-radius: 15px;
    @include responsive(tab) {
      flex-direction: column;
      width: 100px;
    }
  }
}
</style>
