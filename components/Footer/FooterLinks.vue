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
  li {
    margin: 0 12.5px;
    a {
      text-decoration: none;
      color: $white;
      font-size: 18px;
    }
  }
}
</style>
