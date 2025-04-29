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

  <h3 class="text-h3 color-danger-500 mt-10">Based On Your Purchases</h3>
  <v-divider class="border-opacity-100 mt-2 mb-5" color="success"></v-divider>
  <v-row>
    <v-col v-for="item of historyItems" :key="item.id" :md="4" :sm="12">
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
import purchases from '@/assets/jsons/purchases.json'

import { computed, onMounted, ref } from 'vue'
import { type Product, useCartStore } from '@/stores/cart.ts'
import { useUserStore } from '@/stores/user.ts'

const userStore = useUserStore()
const cartStore = useCartStore()
const historyItems = ref<Product[]>([])
const items = computed(() => products.products)

const addProduct = (item: Product) => {
  cartStore.addToCart(item)
}

const getUserHistory = () => {
  if (userStore.user) {
    const history = purchases.purchases.filter((el) => el.customerId === Number(userStore.user?.id))
    if (history.length > 0) {
      const itemIds = history.map(item => item.productId)
      const categoryIds: string[] = []
      items.value.forEach((el) => {
        if (itemIds.includes(el.id)) {
          categoryIds.push(el.category)
        }
      })
      historyItems.value = items.value.filter((el) => categoryIds.includes(el.category))
    }
  }
}

onMounted(() => getUserHistory())
</script>
