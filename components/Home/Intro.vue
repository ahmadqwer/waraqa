<template>
  <section class="intro block-container">
    <div class="intro-wrapper">
      <div class="intro-text-wrapper flexed-column justify-center">
        <p class="welcome white-text bold-text">
          مرحباً بك في منصة ورقة
        </p>
        <p class="caption white-text">
          المنصة الاكبر في إنتاج المحتوى العربي الرقمي في العالم
        </p>
        <CustomButton size="big" :border="true" text="اعرف المزيد" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  @include responsive(tab) {
   padding:0;
  }
  .intro-wrapper {
    background-image: url('~/assets/images/banner.jpg');
    background-position: center;
    border-top-right-radius: 88px;
    border-bottom-left-radius: 88px;
  }
  .intro-text-wrapper {
    padding-right: 55px;
    height: 500px;
    @include responsive(tab) {
      height: 350px;
      padding-right: 25px;
    }
  }
  .button {
    margin-top: 40px;
  }
  .welcome {
    font-size: 40px;
    margin-bottom: 35px;
    @include responsive(mob) {
      font-size: 30px;
      margin-bottom: 15px;
    }
  }
  .caption {
    font-size: 20px;
    @include responsive(mob) {
      font-size: 16px;
    }
  }
}
</style>
