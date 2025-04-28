import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useTheme } from 'vuetify'

export const useThemeStore = defineStore(
  'theme',
  () => {
    const theme = useTheme()

    const darkMode = ref<boolean>(theme.global.name.value === 'dark')
    const isDark = computed(() => darkMode.value)

    const fontSize = ref<number>(16)


    function applyTheme() {
      if (darkMode.value) {
        theme.global.name.value = 'light';
      } else {
        theme.global.name.value = 'dark';
      }
    }

    function toggleTheme() {
      darkMode.value = !darkMode.value
    }

    function setFontSize(size: number) {
      fontSize.value = size
      document.documentElement.style.fontSize = `${size}px`
    }

    // Apply theme whenever darkMode changes
    watch(darkMode, applyTheme, { immediate: true })

    // Apply font size immediately when store is loaded
    watch(fontSize, (newSize) => {
      document.documentElement.style.fontSize = `${newSize}px`
    }, { immediate: true })

    return { darkMode, isDark, toggleTheme, fontSize, setFontSize }
  },
  {
    persist: true,
  },
)
