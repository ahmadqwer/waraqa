<template>
  <footer class="footer">
    <div
      class="footer-wrapper block-container flexed justify-space-between align-center"
    >
      <ul class="footer-links flexed">
        <li v-for="(link, index) in footerLinks" :key="index">
          <nuxt-link :to="link.link">
            <span>{{ link.text }}</span>
          </nuxt-link>
        </li>
      </ul>
      <div class="footer-logo flexed justify-center align-center">
        <Logo />
      </div>

      <ul class="footer-social-links">
        <li
          v-for="(link, index) in socialMediaLinks"
          :key="index"
          class="inline-flex"
        >
          <a :href="link.link" target="_blank">
            <font-awesome-icon :icon="['fab', link.icon]" />
          </a>
        </li>
      </ul>
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
          icon: 'linkedin-in',
          link: 'https://linkedin.com'
        },
        {
          icon: 'twitter',
          link: 'https://twitter.com'
        },
        {
          icon: 'facebook-f',
          link: 'https://facebook.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background-color: $primary;
  .footer-wrapper {
    padding-top: 25px;
    padding-bottom: 10px;
    border-bottom: 1px solid $border-color;
    .footer-logo {
      filter: brightness(0%) invert(100%);
    }
    .footer-social-links {
      width: 40%;
      text-align: left;
      li {
        margin-right: 40px;
        a {
          color: $white;
          font-size: 25px;
        }
      }
    }
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
  }
  .copy-right {
    height: 70px;
    font-size:16px;
  }
}
</style>
