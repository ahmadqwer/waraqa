<template>
  <footer class="footer">
    <div
      class="footer-wrapper block-container flexed justify-space-between align-center"
    >
      <FooterLinks :links="footerLinks" />
      <div class="footer-logo flexed justify-center align-center">
        <Logo />
      </div>
      <SocialMediaLinks :links="socialMediaLinks" />
    </div>
    <p class="copy-right white-text flexed justify-center align-center">
      جميع الحقوق محفوظة © ورقة 2021
    </p>
  </footer>
</template>

<script>
import Logo from '~/components/Header/Logo'
export default {
  components: {
    Logo
  },
  data () {
    return {
      footerLinks: [
        {
          text: 'من نحن',
          link: '/'
        },
        {
          text: 'سياسة الخصوصية',
          link: '/'
        },
        {
          text: 'شروط الاستخدام',
          link: '/'
        },
        {
          text: 'اتصل بنا',
          link: '/'
        }
      ],
      socialMediaLinks: [
        {
          name: 'Linkedin',
          icon: 'linkedin-in',
          link: '/waraqa'
        },
        {
          icon: 'twitter',
          name: 'Twitter',
          link: '/waraqa'
        },
        {
          icon: 'facebook-f',
          name: 'Facebook',
          link: '/waraqa'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $primary;
  .footer-wrapper {
    padding-top: 25px;
    padding-bottom: 10px;
    border-bottom: 1px solid $border-color;
    .footer-logo {
      filter: brightness(0%) invert(100%);
    }
  }
  .copy-right {
    height: 70px;
    font-size: 16px;
  }
}
</style>
