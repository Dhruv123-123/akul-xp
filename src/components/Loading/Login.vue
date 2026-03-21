<template>
  <ContentCenter class="bg-color-load-blue radial-gradient-loading">
    <template #top>
      <div class="absolute bg-color-load-header-blue w-full md:h-32 h-1/6 top-0 down-stroke-white-2" />
    </template>

    <template #center>
      <div class="flex w-full">
        <div class="md:flex hidden justify-end items-center w-1/2">
          <div>
            <div class="flex justify-end w-full">
              <div class="w-2/3">
                <!-- AKUL: inline SVG logo replacing Paul's image -->
                <svg viewBox="0 0 500 80" xmlns="http://www.w3.org/2000/svg" class="mb-3">
                  <text x="0" y="55" font-family="Trebuchet MS, Tahoma, sans-serif" font-size="42" font-weight="bold" fill="white" letter-spacing="2">Akul Ramasubban</text>
                  <text x="0" y="75" font-family="Trebuchet MS, Tahoma, sans-serif" font-size="14" fill="#aaa" letter-spacing="4">PORTFOLIO</text>
                </svg>
              </div>
            </div>
            <div class="w-full flex justify-end">
              <div class="w-10/12 mr-12">
                <h2 class="text-white text-lg text-right">
                  {{ $t('message.toBegin') }}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-px h-96 line-loading-gradient mx-3 md:flex hidden"></div>
        <LoginForm />
      </div>
    </template>

    <template #bottom>
      <div class="absolute bg-color-load-header-blue w-full md:h-48 h-1/5 bottom-0 up-stroke-green-2">
        <div class="flex justify-center items-center h-full">
          <div class="app-container">
            <div class="flex justify-center items-center md:gap-8 gap-8"> <!-- AKUL: removed language selector, English only -->
              <div class="flex text-white md:text-sm text-xs font-bold md:mr-10">
                <h4>
                  {{ $t('message.explainer') }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ContentCenter>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LoginForm from '@/components/Loading/LoginForm.vue'
import ContentCenter from '@/layouts/ContentCenter.vue'

const { locale } = useI18n()

// AKUL: Force English only
locale.value = 'en'
localStorage.setItem('currentLocale', 'en')
</script>
