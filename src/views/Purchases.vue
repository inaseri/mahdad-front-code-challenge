<template>

  <h3 class="text-h3 color-danger-500 mt-10">Your Purchases History</h3>
  <v-divider class="border-opacity-100 mt-2 mb-5" color="success"></v-divider>
  <v-row>
    <v-col v-for="item of historyItems" :key="item.id" :md="4" :sm="12">
      <v-card class="mt-2" :title="item.product.name" :subtitle="item.product.category" :text="`Purchased At ${item.date}`">
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import products from '@/assets/jsons/products.json'
import purchases from '@/assets/jsons/purchases.json'

import { computed, onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/user.ts'

const userStore = useUserStore()
const historyItems = ref<object[]>([])
const items = computed(() => products.products)

const getUserHistory = () => {
  if (userStore.user) {
    const history = purchases.purchases.filter((el) => el.customerId === Number(userStore.user?.id))
    if (history.length > 0) {
      history.forEach((item) => {
        item.product = items.value.find((el) => el.id === item.productId)
      })
      historyItems.value = history;
      console.log(historyItems.value)
    }
  }
}

onMounted(() => getUserHistory())
</script>
