<template>
  <div class="client">
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

  .client-logo {
    width: 197px;
    height: 56px;
    border: solid 1px $border-color;
    padding: 15px;
    box-sizing: content-box;
    margin:15px;
    border-radius: 15px;
  }
}
</style>
