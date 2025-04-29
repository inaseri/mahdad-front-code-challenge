<script setup lang="ts">

</script>

<template>
  <v-navigation-drawer>
    <v-list>
      <router-link to="/products">
        <v-list-item title="Shop"></v-list-item>
      </router-link>
      <router-link to="/checkout">
        <v-list-item title="Checkout"></v-list-item>
      </router-link>
      <router-link to="/purchases">
        <v-list-item title="Purchases"></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
