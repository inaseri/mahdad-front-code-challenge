<template>
  <div class="flex">
    <div class="flex-column	" v-for="item of items" :key="item.id">
      <v-card class="mt-2" :title="item.name" :subtitle="item.category">
        <v-card-actions>
          <v-btn color="success">Add To Card</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import products from '@/assets/jsons/products.json'
import { computed } from 'vue'

const items = computed(() => products.products)
</script>
