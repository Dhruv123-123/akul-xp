<template>
  <div class="absolute bottom-0 w-full">
    <iframe
      src="https://open.spotify.com/embed/playlist/2wTdp6uofJh3wOaF1gqBG2?utm_source=generator"
      width="100%"
      height="80"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</template>

<script setup>
defineProps({
  playlist: {
    type: Array,
    required: true
  },
  trackToggled: String
})
</script>
