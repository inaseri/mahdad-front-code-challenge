import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface User {
  id: string;
  name: string;
  city: string;
}

export const useUserStore = defineStore(
  'user',
  () => {

    const user = ref<User | null>(null)

    function setUser(data: User) {
      user.value = data
    }

    return { setUser, user }
  },
  {
    persist: true,
  },
)
