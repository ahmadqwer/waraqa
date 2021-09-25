<template>
  <button
    class="button"
    :class="{
      primary: color == 'primary',
      small: size == 'small',
      big: size == 'big',
      border
    }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
