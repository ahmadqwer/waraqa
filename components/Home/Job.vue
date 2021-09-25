<template>
  <div class="job flexed-column align-center">
    <img :src="job.icon" alt="job.title">
    <h3 class="job-title secondary-text bold-text text-center">
      {{ job.title }}
    </h3>
    <p class="job-title text-center grey-text">
      {{ job.text }}
    </p>
    <CustomButton color="primary" size="big" :text="job.buttonText" />
  </div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.job {
  margin-top: 65px;
  img {
    margin-bottom: 50px;
  }
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    margin-bottom: 25px;
  }
}
</style>
