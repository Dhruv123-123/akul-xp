<script setup>
import ContentCenter from '@/layouts/ContentCenter.vue'
import LoadingBar from './LoadingBar.vue'
</script>

<template>
  <ContentCenter class="bg-black">
    <template #center>
      <div class="md:w-4/12 w-64 ml-5">
        <!-- AKUL: inline SVG logo replacing Paul's image -->
        <svg viewBox="0 0 500 80" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="55" font-family="Trebuchet MS, Tahoma, sans-serif" font-size="42" font-weight="bold" fill="white" letter-spacing="2">Akul Ramasubban</text>
          <text x="0" y="75" font-family="Trebuchet MS, Tahoma, sans-serif" font-size="14" fill="#aaa" letter-spacing="4">PORTFOLIO</text>
        </svg>
      </div>
    </template>

    <template #bottom-center>
      <LoadingBar />
    </template>

    <template #bottom>
      <div class="app-container absolute bottom-0 md:my-16 my-8">
        <div>
          <div class="flex justify-between items-center gap-8 text-white">
            <div>
              <h1 class="md:text-xl text-sm">{{ $t('message.welcome') }}</h1>
            </div>
            <div>
              <h2 class="md:text-2xl text-md tracking-tighter font-helvetica font-semibold">AkulXP</h2> <!-- AKUL: updated username -->
            </div>
          </div>
        </div>
      </div>
    </template>
  </ContentCenter>
</template>
