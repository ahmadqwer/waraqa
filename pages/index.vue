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
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'http://13.37.164.215/waraqa/og-image.jpg',
          itemprop: 'image primaryImageOfPage'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '300px'
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '200px'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
