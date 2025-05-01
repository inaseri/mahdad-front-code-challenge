<template>
  <h3 class="text-h3 color-danger-500">Users Info</h3>
  <v-divider class="border-opacity-100 mt-2 mb-5" color="success"></v-divider>
  <v-form @submit.prevent="loadUser" class="w-100">
    <v-row>
      <v-col :md="6" :sm="12">
        <v-text-field variant="underlined" v-model="userId" label="User Id"></v-text-field>
      </v-col>
      <v-col :md="6" :sm="12">
        <v-btn class="mt-2" type="submit" block>Get Info</v-btn>
      </v-col>
    </v-row>
  </v-form>
  <v-row v-if="user">
    <v-col :md="12">
      <v-card :title="`${user.firstName} ${user.lastName}`" :subtitle="user.email"></v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { toast } from 'vue3-toastify'

const user = ref<null>()
const userId = ref<number>()
const cache = new Map<number, object>()
let abortController: AbortController = null

const fetchUser = async () => {

  if (cache.has(Number(userId.value))) {
    return cache.get(Number(userId.value))
  }

  if (abortController) {
    abortController.abort()
  }

  abortController = new AbortController()

  try {
    const response = await axios.get(`https://dummyjson.com/users/${userId.value}`, {
      signal: abortController.signal,
    })
    cache.set(Number(userId.value), response.data)
    return response.data
  } catch (error) {
    if (axios.isCancel(error)) {
      toast.error('Request canceled, there is more request that is pending, please wait')
    } else {
      toast.error('Request failed')
    }
    throw error
  }
}

const loadUser = async () => {
  try {
    user.value = await fetchUser();
  } catch (error) {
    user.value = null;
  }
}
</script>
