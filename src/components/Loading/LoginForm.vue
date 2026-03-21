<script setup>
import { useConnectionStore } from '@/stores/connectionStore'
// AKUL: removed ProfilePicture import — using inline SVG user icon instead

const connectionStore = useConnectionStore()

const handleLogin = () => {
  connectionStore.login()
}
</script>

<template>
  <div class="flex items-center">
    <div @click="handleLogin" class="absolute h-28 md:w-7/12 w-screen">
      <router-link to="/office" class="h-full w-full rounded-xl bg-color-login-blue flex items-center py-2.5 px-6 stroke-white-1 cursor-pointer">
        <div class="w-full flex items-center text-white gap-4 relative outline-none">
          <div>
            <!-- AKUL: generic user icon replacing profile picture -->
            <div class="w-16 h-16 rounded-lg bg-blue-200 flex items-center justify-center stroke-yellow-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a5276" class="w-10 h-10">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>
          <div>
            <h2 class="text-xl md:text-2xl">Akul</h2> <!-- AKUL: updated login name -->
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
