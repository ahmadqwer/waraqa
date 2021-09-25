<template>
  <section class="register grid-container">
    <h2 class="section-title text-center bold-text secondary-text">
      العمل كموظف مستقل
    </h2>
    <p class="text-center grey-text">
      بإمكانك العمل من المنزل ككاتب أو مدقق محتوى من خلال التسجيل في منصة ورقة
    </p>
    <div class="jobs flexed justify-space-between ">
      <Job v-for="(job, index) in jobs" :key="index" :job="job" />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      jobs: [
        {
          title: 'العمل ككاتب مستقل',
          text: 'استثمر مهارتك في الكتابة وسجل هنا',
          buttonText: 'تسجيل كاتب',
          icon: require('~/assets/svgs/Group 21.svg')
        },
        {
          title: 'العمل كمدقق مستقل',
          text: 'استثمر مهارتك في التدقيق وسجل هنا',
          buttonText: 'تسجيل مدقق',
          icon: require('~/assets/svgs/Group 5.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  padding-top: 60px;
  padding-bottom: 105px;
  border-bottom: 1px solid $border-color;
  .section-title {
    margin-bottom: 35px;
  }
  & > p {
    font-size: 20px;
  }
  .jobs{
    @include responsive(mob){
      flex-direction: column;
    }
  }
}
</style>
