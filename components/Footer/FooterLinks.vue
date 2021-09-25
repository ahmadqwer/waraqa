<template>
  <ul class="footer-links flexed">
    <li v-for="(link, index) in links" :key="index">
      <nuxt-link :to="link.link">
        <span>{{ link.text }}</span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-links {
  width: 40%;
  @include responsive(mob) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom:10px;
  }
  li {
    margin: 0 12.5px;
    @include responsive(tab) {
      margin: 10px 9px;
    }
    a {
      text-decoration: none;
      color: $white;
      font-size: 18px;
      @include responsive(tab) {
        font-size: 16px;
      }
    }
  }
}
</style>
