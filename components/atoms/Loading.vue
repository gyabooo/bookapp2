<template lang='pug'>
  div.a-loading
    font-awesome-icon(:icon="['fas', 'spinner']").a-loading__icon.a-blinking
</template>

<script>
</script>

<style lang='scss' scoped>
.a-loading {
  text-align: center;
}
.a-blinking {
	-webkit-animation:blink 1.5s ease-in-out infinite alternate;
    -moz-animation:blink 1.5s ease-in-out infinite alternate;
    animation:blink 1.5s ease-in-out infinite alternate;
}
@-webkit-keyframes blink {
    0% {opacity:0;}
    25% {opacity:1;}
    50% {opacity:0;}
    75% {opacity:1;}
    100% {opacity:0;}
}
@-moz-keyframes blink {
    0% {opacity:0;}
    25% {opacity:1;}
    50% {opacity:0;}
    75% {opacity:1;}
    100% {opacity:0;}
}
@keyframes blink {
    0% {opacity:0;}
    25% {opacity:1;}
    50% {opacity:0;}
    75% {opacity:1;}
    100% {opacity:0;}
}
</style>