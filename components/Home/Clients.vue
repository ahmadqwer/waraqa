<template>
  <section class="clients grid-container flexed-column">
    <h2 class="section-title text-center bold-text secondary-text">
      عملاؤنا
    </h2>
    <div class="clients-list flexed justify-space-between flexed flex-wrap">
      <Client
        v-for="(client, index) in clients"
        :key="index"
        :client="client"
      />
    </div>
  </section>
</template>

<script>
export default {
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.clients {
    padding: 60px 0 55px;
    border-bottom:1px solid $border-color;
    & > p {
        font-size: 20px;
    }
    .section-title {
        margin-bottom: 35px;
    }
}
</style>
