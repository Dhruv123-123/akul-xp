<script setup>
const props = defineProps({
  age: Number
})
</script>

<template>
  <div class="grid grid-flow-col auto-cols-max gap-2">
    <img src="/img/icons/cv/akul-photo-cv.webp" alt="CV photo" class="w-20 h-20" /> <!-- AKUL: put your photo at public/img/icons/cv/akul-photo-cv.webp -->
    <div class="flex justify-center flex-col">
      <h1 class="font-trebuchet-pixel">Akul Ramasubban</h1> <!-- AKUL: updated name -->
      <h2 class="font-trebuchet-pixel">{{ props.age + ' ' + $t('common.years') }}</h2>
    </div>
    <div class="flex items-center ml-10">
      <h2 class="font-trebuchet-pixel py-1">{{ $t('common.webdev') }}</h2>
    </div>
  </div>
</template>
