<template>
  <section id="features" class="grid-container flexed-column">
    <h2 class="section-title text-center bold-text secondary-text">
      لماذا منصة ورقة
    </h2>
    <p class="text-center grey-text">
      لأن انضمامك لمنصة ورقة سيتيح لك الوصول لما يأتي
    </p>
    <div class="features-list flexed justify-space-between flexed flex-wrap">
      <Feature
        v-for="(feature, index) in features"
        :key="index"
        :feature="feature"
      />
    </div>
    <CustomButton
      color="primary"
      size="big"
      text="طلب انضمام عميل"
      class="self-center"
    />
  </section>
</template>

<script>
export default {
  data () {
    return {
      features: [
        {
          title: 'محتوى فريد',
          icon: 'lightbulb'
        },
        {
          title: 'محتوى يواكب معايير محركات البحث',
          icon: 'edit'
        },
        {
          title: 'مدققو محتوى مختصون',
          icon: 'search'
        },
        {
          title: 'أسعار منافسة',
          icon: 'tags'
        },
        {
          title: 'كتاب محتوى مختصون',
          icon: 'users'
        },
        {
          title: 'تقارير ذكية شاملة',
          icon: 'file-alt'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#features {
    padding: 60px 0 55px;
    border-bottom:1px solid $border-color;
    & > p {
        font-size: 20px;
    }
    .section-title {
        margin-bottom: 35px;
    }
    .features-list {
        margin-top: 65px;        
    }
    .button{
        margin-top: 25px;
    }
}

</style>
