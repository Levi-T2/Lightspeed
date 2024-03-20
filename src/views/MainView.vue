<template>
  <div class="container-fluid">
    <section class="row mt-2">
      <div class="col-12 text-center">
        <canvas id="mainCanvas"></canvas>
      </div>
      <div class="col-12 d-flex justify-content-center align-items-center mt-2">
        <div class="px-2">
          <button @click="animate()" class="btn btn-primary">Animate</button>
        </div>
        <div class="px-2">
          <button @click="unitSelect(unitArray[0])" class="btn btn-success">Pyramid</button>
        </div>
        <div class="px-2">
          <button @click="unitSelect(unitArray[1])" class="btn btn-danger">Sphere</button>
        </div>
        <div class="px-2">
          <button @click="toggleOffcanvas()" class="btn btn-danger">Offcanvas</button>
        </div>
      </div>
    </section>
  </div>

</template>

<script setup>
import { animate } from '../threeJsMain.js'
import { selectorClass } from '@/services/Raycaster.js'
import { Units } from '@/Units.js';
import { computed } from 'vue';
import { Offcanvas } from 'bootstrap'

// onMounted(() =>
// {
//   animate();
// })

function unitSelect(unit)
{
  selectorClass.selectedUnit = Object.values(unit)[0];
}

function toggleOffcanvas()
{
  const offcanvasElem = document.getElementById("offcanvasRight")
  const offcanvas = new Offcanvas(offcanvasElem);

  return offcanvas.toggle();
}

const unitArray = computed(() => Units);

</script>

<style scoped lang="scss"></style>
