<template lang="pug">
  div.a-loading
    font-awesome-icon(:icon="['fas', 'spinner']").a-loading__icon.a-blinking.a-rotating
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.a-loading {
  text-align: center;
}
.a-blinking {
  -webkit-animation: blink 1.5s ease-in-out infinite alternate;
  -moz-animation: blink 1.5s ease-in-out infinite alternate;
  animation: blink 1.5s ease-in-out infinite alternate;
}
.a-rotating {
  -webkit-animation: rotate 1.5s linear infinite;
  -moz-animation: rotate 1.5s linear infinite;
  animation: rotate 1.5s linear infinite;
}
@keyframes blink {
  0% {
    opacity: 0;
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
  }
}
@-webkit-keyframes blink {
  0% {
    opacity: 0;
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
  }
}
@-moz-keyframes blink {
  0% {
    opacity: 0;
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
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  } 
}
@-moz-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  } 
}
@-webkit-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  } 
}
</style>
