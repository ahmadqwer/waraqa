<template>
  <ul class="footer-social-links">
    <li v-for="(link, index) in links" :key="index" class="inline-flex">
      <a
        :href="link.link"
        target="_blank"
        rel="noopener"
        :aria-label="link.name"
      >
        <font-awesome-icon :icon="['fab', link.icon]" />
      </a>
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
.footer-social-links {
  width: 40%;
  text-align: left;
  @include responsive(mob) {
    width: 100%;
    text-align: center;
    margin: 20px 0;
  }
  li {
    margin-right: 40px;
    @include responsive(mob) {
      margin: 0 20px;
    }
    a {
      color: $white;
      font-size: 25px;
      @include responsive(mob) {
        width: 14px;
      }
    }
  }
}
</style>
