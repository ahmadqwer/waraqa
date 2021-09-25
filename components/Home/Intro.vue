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
  .intro-wrapper {
    background-image: url('~/assets/images/banner.png');
  }
  .intro-text-wrapper {
    // position: absolute;
    // top: 0;
    // right: 0;
    // width: 100%;
    // height: 100%;
    padding-right: 55px;
    height: 500px;
  }
  .button {
    margin-top: 40px;
  }
  .welcome {
    font-size: 40px;
    margin-bottom: 35px;
  }
  .caption {
    font-size: 20px;
  }
}
</style>
