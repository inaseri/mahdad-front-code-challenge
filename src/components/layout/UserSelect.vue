<template>
  <v-combobox
    hint="Select User"
    persistent-hint
    :items="items"
    item-title="name"
    item-value="id"
    variant="underlined"
    min-width="100"
    class="mb-3"
    v-model="selectedUser"
  ></v-combobox>
</template>

<script setup lang="ts">
import users from '@/assets/jsons/users.json'
import { type User, useUserStore } from '@/stores/user'
import { computed, onMounted, ref, watch } from 'vue'

const userStore = useUserStore()
const items = computed(() => users.users);
const selectedUser = ref<User | null>(null);

onMounted(() => selectedUser.value = userStore.user)

watch(() => selectedUser.value, (newValue: User) => {
  userStore.setUser(newValue);
})
</script>

<style scoped>

</style>
