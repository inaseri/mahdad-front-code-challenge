<template>
  <h3 class="text-h3 color-danger-500">Checkout Now!</h3>
  <v-divider class="border-opacity-100 mt-2 mb-5" color="success"></v-divider>
  <v-row>
    <v-col v-for="item of cartStore.getUserCart()" :key="item.id" :md="4" :sm="12">
      <v-card class="mt-2" :title="item.name" :subtitle="item.category">
        <v-card-actions>
          <v-btn color="error" @click="removeProduct(item)">Remove From Card</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { type Product, useCartStore } from '@/stores/cart.ts'

const cartStore = useCartStore()
const removeProduct = (item: Product) => {
  cartStore.removeFromCart(item.id)
}
</script>
