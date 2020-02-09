<template lang="pug">
  div.a-loading
    font-awesome-icon(:icon="['fas', 'spinner']").a-loading__icon.a-loading__animate
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.a-loading {
  text-align: center;
  &__icon {
    width: 50px;
    height: 50px;
    color: $site_color;
  }
  &__animate {
    -webkit-animation: blink 1.5s linear infinite;
    -moz-animation: blink 1.5s linear infinite;
    animation: blink 1.5s linear infinite;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(360deg);
  }
}
@-webkit-keyframes blink {
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(360deg);
  }
}
@-moz-keyframes blink {
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(360deg);
  }
}
</style>
