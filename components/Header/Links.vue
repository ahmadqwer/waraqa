<template>
  <nav id="top-nav">
    <ul class="flexed">
      <li v-for="(link, index) in links" :key="index">
        <div class="link">
          <CustomButton
            :text="link.text"
            :color="link.color"
            :link="link.link"
            size="small"
          />
        </div>
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

<style lang="scss" scoped>
@include responsive(mob) {
  .button{
    padding: 6px 0;
    font-size: 16px;
    &.primary {
        padding: 10px 20px;
        &:hover {
            background-color: $hover-primary;
        }
    }
    &.small {
        padding: 10px 20px;
        width: 90px;
    }
  }
}
</style>
