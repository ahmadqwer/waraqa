<template>
  <section class="clients grid-container">
    <h2 class="section-title text-center bold-text secondary-text">
      عملاؤنا
    </h2>
    <div
      v-if="!$device.isMobile"
      class="clients-list flexed justify-space-between flexed flex-wrap"
    >
      <Client
        v-for="(client, index) in clients"
        :key="index"
        :client="client"
      />
    </div>
    <swiper v-else ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(client, index) in clients" :key="index">
        <Client :client="client" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      clients: [
        {
          name: 'Mawdoo3',
          logo: require('~/assets/svgs/mawdoo3.svg'),
          link: 'https://mawdoo3.com/'
        },
        {
          name: 'Sotor',
          logo: require('~/assets/svgs/sotor.svg'),
          link: 'https://sotor.com/'
        },
        {
          name: 'Esteshary',
          logo: require('~/assets/svgs/esteshary.svg'),
          link: 'https://esteshary.com/'
        },
        {
          name: 'Supermama',
          logo: require('~/assets/svgs/supermama.png'),
          link: 'https://Supermama.com/'
        },
        {
          name: 'Hayatak',
          logo: require('~/assets/svgs/hayatak.svg'),
          link: 'https://mawdoo3.com/'
        },
        {
          name: 'Hayatok',
          logo: require('~/assets/svgs/hayatok.svg'),
          link: 'https://mawdoo3.com/'
        },
        {
          name: 'Sahha wa hana',
          logo: require('~/assets/svgs/saha-wa-hana.svg'),
          link: 'https://sahhawhana.com/'
        },
        {
          name: 'Alweb',
          logo: require('~/assets/svgs/mawdoo3.svg'),
          link: 'https://mawdoo3.com/'
        }
      ],
      swiperOptions: {
        slidesPerView: 2,
        // slidesPerColumn: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        // slidesPerGroup: 4,
        grid: {
          rows: 2,
          fill: 'row'
        }
      }
    }
  },
  created () {}
}
</script>

<style lang="scss" scoped>
.clients {
  padding-top: 60px;
  padding-bottom: 55px;
  border-bottom: 1px solid $border-color;
  & > p {
    font-size: 20px;
  }
  .section-title {
    margin-bottom: 35px;
  }
  .clients-list {
    @include responsive(mob) {
      .client {
        width: 50%;
        .client-logo {
          width: 100px;
        }
      }
    }
  }
}
</style>
