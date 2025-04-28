<script setup lang="ts">

import Header from '@/components/layout/Header.vue'
</script>

<template>
  <v-responsive class="border rounded" >
  <v-app>
    <Header />
    <v-main class="w-100">
      <v-container class="w-100">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
  </v-responsive>
</template>

<style scoped>

</style>
