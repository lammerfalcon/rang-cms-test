<script setup>
import {onMounted, ref} from "vue";
import {useNuxtApp} from "#app";
const {$anime} = useNuxtApp()
const whale = ref(null);
const width = ref({
  prop1: 140,
});
const startHeight = () => {
  return $anime.random(0, -100)
}

const test = () => {
  const translateY = startHeight()
  $anime({
    duration:124000,
    targets: '.object',
    translateX: [-300, 1600],
    translateY: function() {
      return [translateY, translateY]
    },

    easing: 'linear',
    complete: test,


  });
  $anime({
    duration: 14000,
    targets: '.hello',
    translateY: 30,
    rotate: 15,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });
  $anime({
    duration: 4000,
    targets: width.value,
    prop1: 194,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
  });
  $anime({
    targets: '.bubbles',
    translateY: [-10, 10],
    loop: true,
    duration: 4000,
    direction: 'alternate',
    complete: test,

    easing: 'easeInOutSine'
  });

}

const transform = ref(300);
let dragStartPosition = null;

const startDrag = (event) => {
  dragStartPosition = event.clientX;
};

const drag = (event) => {
  if (dragStartPosition !== null) {
    const delta = event.clientX - dragStartPosition;
    transform.value += delta;
    dragStartPosition = event.clientX;
  }
};

const stopDrag = () => {
  dragStartPosition = null;
};
const whaleDrag = (event) => {
  console.log(event)
  transform.value = event.x
}
onMounted(() => {
  test();
});
</script>

<template>
  <div class="bg">
    <div
        @mousedown="startDrag"
        @mousemove="drag"
        @mouseup="stopDrag"
        :style="`left: ${transform}px`"  class="mountain">
      <div class="mountain-top">
        <div class="mountain-cap-1"></div>
        <div class="mountain-cap-2"></div>
        <div class="mountain-cap-3"></div>
      </div>
    </div>
    <div class="mountain-two">
      <div class="mountain-top">
        <div class="mountain-cap-1"></div>
        <div class="mountain-cap-2"></div>
        <div class="mountain-cap-3"></div>
      </div>
    </div>
    <div class="mountain-three">
      <div class="mountain-top">
        <div class="mountain-cap-1"></div>
        <div class="mountain-cap-2"></div>
        <div class="mountain-cap-3"></div>
      </div>
    </div>
    <div class="mountain-four">
      <div class="mountain-top">
        <div class="mountain-cap-1"></div>
        <div class="mountain-cap-2"></div>
        <div class="mountain-cap-3"></div>
      </div>
    </div>
    <div class="cloud"></div>
  </div>
  <div class="">

    <div class="object">
      <div class="whale-wrapper">
        <MainWhale class="hello"/>
        <!--      <Ellipse :width="width.prop1" class="ellipse"></Ellipse>-->
        <Bubbles class="bubbles"/>
      </div>


    </div>
  </div>
</template>

<style scoped>
.object {
  position: absolute;
  bottom: 200px;
}
.whale-wrapper {
  position: relative;
}
.hello, .ellipse, .bubbles {
  position: absolute;
}
.bubbles {
//top: 35px;
}
.ellipse {
  top: 200px;
  left: 0;
}



.bg{
  overflow:hidden;
  background:#b4ddf0;
  position: absolute;
  top: 6rem;
  left:0;
  right:0;
  bottom:0;
}
.mountain, .mountain-two, .mountain-three, .mountain-four {
  position: absolute;
  bottom: 0;
  left: 300px;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 180px solid #7ac1e4;
  z-index: 1;
}
.mountain-two {
  left: 380px;
  bottom: -30px;
  opacity: .3;
  z-index: 0;
}
.mountain-three {
  left: 220px;
  bottom:-10px;
  opacity: .5;
  z-index: 0;
}
.mountain-four {
  left: 120px;
  bottom:-50px;
  z-index: 1;
}
.mountain-top {
  position: absolute;
  right: -65px;
  border-left: 65px solid transparent;
  border-right: 65px solid transparent;
  border-bottom: 77px solid #ceeaf6;
  z-index: 2;
}
.mountain-cap-1, .mountain-cap-2, .mountain-cap-3 {
  position: absolute;
  top: 70px;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #ceeaf6;
}
.mountain-cap-1 { left: -55px; }
.mountain-cap-2 { left: -25px; }
.mountain-cap-3 { left: 5px; }
.cloud, .cloud:before, .cloud:after {
  position: absolute;
  width: 70px;
  height: 30px;
  background: #fff;
  -webkit-border-radius: 100px / 50px;
  border-radius: 100px / 50px;
}
.cloud {
  bottom: 100px;
  -webkit-animation: cloud 50s infinite linear;
  animation: cloud 50s infinite linear;
}
@-webkit-keyframes cloud {
  0%   { left: -100px; }
  100% { left: 1700px; }
}
@keyframes cloud {

  0%   { left: -100px; }
  100% { left: 1700px; }
}
.cloud:before {
  content: '';
  left: 50px;
}
.cloud:after {
  content: '';
  left: 25px;
  top: -10px;
}
</style>
