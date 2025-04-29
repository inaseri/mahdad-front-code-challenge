<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.ts'
import { ref } from 'vue'
import UserSelect from '@/components/layout/UserSelect.vue'

const themeStore = useThemeStore()
const defaultFont = ref(themeStore.fontSize)

const changeFont = (event: string) => {
  themeStore.setFontSize(Number(event))
  defaultFont.value = themeStore.fontSize
}
</script>

<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>MAhDAD</v-app-bar-title>

    <template v-slot:append>
      <UserSelect />
      <v-combobox
        hint="Font size"
        persistent-hint
        :items="['8', '10', '12', '14', '16', '18']"
        variant="underlined"
        min-width="100"
        class="mb-3 mx-3"
        @update:modelValue="changeFont"
        :model-value="String(defaultFont)"
      ></v-combobox>
      <v-btn
        @click="themeStore.toggleTheme()"
        color="purple"
        :icon="!themeStore.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      ></v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped></style>
