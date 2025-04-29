<template>
  <h3 class="text-h3 color-danger-500">Financial Stock Dashboard</h3>
  <v-divider class="border-opacity-100 mt-2 mb-5" color="success"></v-divider>
  <v-row>
    <v-col v-for="item of stockInfo" :key="item.composite_figi" :md="4" :sm="12">
      <v-card class="mt-2" :title="item.name" :subtitle="item.currency_name" :text="item.cik">
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useGet } from '@/composables/axios.ts'
import { onUnmounted, ref } from 'vue'
import type { Stock } from '@/interfaces/stock.ts'

const stockInfo = ref<Stock[]>()

const getStockInfo = async () => {
  const result = await useGet('tickers', {
    apiKey: 'loL12AiP6ogIm1z1Fw4JGGgtxhec4Xpn',
    market: 'stocks',
    active: true,
    order: 'as',
    limit: 12,
    sort: 'ticker',
  })
  stockInfo.value = result.results
}


const getInfoInterval = setInterval(() => getStockInfo(), 1000)

onUnmounted(() => clearInterval(getInfoInterval))
</script>
