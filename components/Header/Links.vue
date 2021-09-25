<template>
  <nav id="top-nav">
    <ul class="flexed">
      <li v-for="(link, index) in links" :key="index">
        <CustomButton :text="link.text" :color="link.color" :link="link.link" size="small" />
      </li>
    </ul>
  </nav>
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

<style lang="scss" scoped></style>
