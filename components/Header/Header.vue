<template>
  <header
    class="header block-container flexed justify-space-between align-center"
  >
    <Logo />
    <Links :links="links" />
  </header>
</template>

<script>
import Logo from './Logo'
import Links from './Links'

export default {
  components: {
    Logo,
    Links
  },
  data () {
    return {
      links: [
        {
          text: 'دخول',
          color: 'transparent'
        },
        {
          text: 'تسجيل',
          color: 'primary'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
