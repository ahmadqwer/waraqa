<template>
  <div class="client flexed justify-center align-center">
    <a
      :href="client.link"
      class="flexed justify-center align-center"
      target="_blank"
      rel="noopener"
    >
      <div class="client-logo flexed justify-center align-center">
        <img :src="client.logo" :alt="client.name">
      </div>
    </a>
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
    width: auto;
  }
  .client-logo {
    width: 200px;
    height: 60px;
    border: solid 1px $border-color;
    padding: 15px;
    box-sizing: content-box;
    margin: 15px;
    border-radius: 15px;
    transition: transform 0.25s, border 0.25s;
    &:hover {
      transform: scale(1.05);
      border: solid 1px $primary;
    }
    @include responsive(tab) {
      flex-direction: column;
      width: 100px;
    }
    @include responsive(mob){
      max-width: 150px;
      width:100%;
    }
  }
}
</style>
