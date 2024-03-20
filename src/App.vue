<template>
  <main>
    <RouterView />
  </main>

  <UnitActions />
</template>

<script setup>
import { RouterView } from 'vue-router'
import UnitActions from './components/UnitActions.vue';
</script>

<style scoped lang="scss"></style>
