<template>
  <div class="container-fluid">
    <section class="row mt-2">
      <div class="col-12">
        <button @click="animate()" class="btn btn-primary">Animate</button>
      </div>
    </section>
    <section class="row mt-2">
      <div class="col-12 text-center">
        <canvas id="mainCanvas"></canvas>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { animate } from '../threeJsMain.js'

// onMounted(() =>
// {
//   animate();
// })

</script>

<style scoped lang="scss"></style>
