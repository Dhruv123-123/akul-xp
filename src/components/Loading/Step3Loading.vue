<script setup>
import ContentCenter from '@/layouts/ContentCenter.vue'
</script>

<template>
  <ContentCenter class="bg-color-load-blue radial-gradient-loading">
    <template #top>
      <div class="absolute bg-color-load-header-blue w-full md:h-32 h-1/6 top-0 down-stroke-white-2"></div>
    </template>

    <template #center>
      <div class="md:w-4/12 w-64 ml-5 mb-10">
        <!-- AKUL: inline SVG logo replacing Paul's image -->
        <svg viewBox="0 0 500 80" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="55" font-family="Trebuchet MS, Tahoma, sans-serif" font-size="42" font-weight="bold" fill="#1a1a2e" letter-spacing="2">Dhruv Ramasubban</text>
          <text x="0" y="75" font-family="Trebuchet MS, Tahoma, sans-serif" font-size="14" fill="#444" letter-spacing="4">PORTFOLIO</text>
        </svg>
      </div>
    </template>

    <template #bottom>
      <div class="absolute bg-color-load-header-blue w-full md:h-48 h-28 bottom-0 up-stroke-green-2">
        <div class="flex justify-center items-center h-full"></div>
      </div>
    </template>
  </ContentCenter>
</template>
