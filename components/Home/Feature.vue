<template>
  <div class="feature">
    <div class="feature-wrapper flexed-column justify-center align-center">
      <div class="feature-icon flexed justify-center align-center">
        <font-awesome-icon :icon="feature.icon" />
      </div>
      <p class="text-center secondary-text feature-title">
        {{ feature.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.feature {
  width: calc(100% / 3);
  margin-bottom: 35px;
  @include responsive(mob) {
    width: calc(100% / 2);
  }
  .feature-icon {
    height: 85px;
    width: 85px;
    background-color: $light-blue;
    border-radius: 50px;
    font-size: 35px;
    color: $tertiary;
  }
  .feature-title {
    font-size: 20px;
    max-width: 150px;
    margin: 20px auto 0;
    @include responsive(mob) {
      font-size:17px;
    }
  }
}
</style>
