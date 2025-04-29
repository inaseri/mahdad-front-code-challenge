<script setup lang="ts">

import Header from '@/components/layout/Header.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<template>
  <v-responsive class="border rounded" >
  <v-app>
    <Header />
    <Sidebar />
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
