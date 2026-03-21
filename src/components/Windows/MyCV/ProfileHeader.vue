<script setup>
const props = defineProps({
  age: Number
})
</script>

<template>
  <div class="grid grid-flow-col auto-cols-max gap-2">
    <!-- AKUL: profile image removed per user request -->
    <div class="flex justify-center flex-col">
      <h1 class="font-trebuchet-pixel">Akul Ramasubban</h1> <!-- AKUL: updated name -->
      <!-- AKUL: age removed -->
    </div>
    <div class="flex items-center ml-10">
      <h2 class="font-trebuchet-pixel py-1">{{ $t('common.webdev') }}</h2>
    </div>
  </div>
</template>
