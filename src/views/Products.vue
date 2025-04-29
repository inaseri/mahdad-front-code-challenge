<template>
  <h3 class="text-h3 color-danger-500">Shop Now!</h3>
  <v-divider class="border-opacity-100 mt-2 mb-5" color="success"></v-divider>
  <v-row>
    <v-col v-for="item of items" :key="item.id" :md="4" :sm="12">
      <v-card class="mt-2" :title="item.name" :subtitle="item.category">
        <v-card-actions>
          <v-btn color="success" @click="addProduct(item)">Add To Card</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import products from '@/assets/jsons/products.json'
import { computed } from 'vue'
import { type Product, useCartStore } from '@/stores/cart.ts'

const cartStore = useCartStore()
const items = computed(() => products.products)

const addProduct = (item: Product) => {
  cartStore.addToCart(item)
}
</script>
