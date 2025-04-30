<template>

  <h3 class="text-h3 color-danger-500 mt-10">Logger Dashboard</h3>
  <v-divider class="border-opacity-100 mt-2 mb-5" color="success"></v-divider>
  <v-row>
    <v-col :md="12" :sm="12">
      <v-virtual-scroll
        :height="700"
        :items="generateList(100000)"
      >
        <template v-slot:default="{ item }">
          <v-row>
            <v-col :md="4" :sm="4">{{item.id}}</v-col>
            <v-col :md="4" :sm="4">{{item.name}}</v-col>
            <v-col :md="4" :sm="4">{{item.email}}</v-col>
          </v-row>
        </template>
      </v-virtual-scroll>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { UserLog } from '@/interfaces/user-log.ts'

const generateList = (count: number): UserLog[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }))
}
</script>
