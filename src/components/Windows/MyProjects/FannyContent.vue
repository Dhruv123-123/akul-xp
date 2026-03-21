<template>
  <section class="text-xs md:text-header-window">
    <div class="flex w-full text-xs items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">🖨️</span>
        <p class="font-bold mt-px">3D Printing</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">⚙️</span>
        <p class="font-bold mt-px">Gearing</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">📱</span>
        <p class="font-bold mt-px">Blynk</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">🔧</span>
        <p class="font-bold mt-px">Servo</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">🏎️</span>
        <p class="font-bold mt-px">Dual Motor</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>
      {{ $t('project.fanny-portfolio.contextFirstParagraph') }}
    </p>
    <br />
    <p>
      {{ $t('project.fanny-portfolio.contextSecondParagraph') }}
    </p>
    <br />
    <p>
      {{ $t('project.fanny-portfolio.contextThirdParagraph') }}
    </p>
    <br />
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.fanny-portfolio.goalFirst') }}</li>
      <li>{{ $t('project.fanny-portfolio.goalSecond') }}</li>
      <li>{{ $t('project.fanny-portfolio.goalThird') }}</li>
      <li>{{ $t('project.fanny-portfolio.goalFourth') }}</li>
      <li>{{ $t('project.fanny-portfolio.goalFifth') }}</li>
      <li>{{ $t('project.fanny-portfolio.goalSixth') }}</li>
    </ul>
  </section>
</template>
