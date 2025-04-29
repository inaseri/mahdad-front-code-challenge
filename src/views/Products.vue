<template>
  <div class="flex">
    <div class="flex-column	" v-for="item of items" :key="item.id">
      <v-card class="mt-2" :title="item.name" :subtitle="item.category">
        <v-card-actions>
          <v-btn color="success" @click="addProduct(item)">Add To Card</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
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
