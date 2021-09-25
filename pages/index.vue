<template>
  <div class="home-wrapper">
    <Intro />
    <Register />
    <Features />
    <Clients />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'الصفحة الرئيسية',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'ورقة - الصفحة الرئيسية'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
