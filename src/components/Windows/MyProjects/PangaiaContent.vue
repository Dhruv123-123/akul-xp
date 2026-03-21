<template>
  <div class="text-xs md:text-header-window">
    <div class="flex text-xxs md:text-xs w-full items-center justify-center md:justify-start flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">⚡</span>
        <p class="font-bold mt-px">Motors</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">🔋</span>
        <p class="font-bold mt-px">Battery</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">🛞</span>
        <p class="font-bold mt-px">Steering</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">🔧</span>
        <p class="font-bold mt-px">Fabrication</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">📊</span>
        <p class="font-bold mt-px">Analysis</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>{{ $t('project.pangaia.contextFirstParagraph') }}</p>
    <br />
    <p>{{ $t('project.pangaia.contextSecondParagraph') }}</p>
    <br />
    <p>{{ $t('project.pangaia.contextThirdParagraph') }}</p>
    <br />
    <p>{{ $t('project.pangaia.contextFourthParagraph') }}</p>
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.pangaia.goalFirst') }}</li>
      <li>{{ $t('project.pangaia.goalSecond') }}</li>
      <li>{{ $t('project.pangaia.goalThird') }}</li>
      <li>{{ $t('project.pangaia.goalFourth') }}</li>
      <li>{{ $t('project.pangaia.goalFifth') }}</li>
      <li>{{ $t('project.pangaia.goalSixth') }}</li>
    </ul>
    <h3 class="mt-5 mb-2">{{ $t('common.tasksDone') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.pangaia.tasksDoneFirst') }}</li>
      <li>{{ $t('project.pangaia.tasksDoneSecond') }}</li>
      <li>{{ $t('project.pangaia.tasksDoneThird') }}</li>
      <li>{{ $t('project.pangaia.tasksDoneFourth') }}</li>
      <li>{{ $t('project.pangaia.tasksDoneFifth') }}</li>
      <li>{{ $t('project.pangaia.tasksDoneSixth') }}</li>
    </ul>
  </div>
</template>
