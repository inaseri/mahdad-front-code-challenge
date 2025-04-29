import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user.ts'

export interface Product {
  id: string
  name: string
  category: string
  userId?: string
}

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()

    const user = computed(() => userStore.user)
    const userCart = ref<Product[]>([])

    function addToCart(data: Product) {
      data.userId = String(user.value?.id)
      userCart.value.push(data)
      console.log(userCart)
    }

    function removeFromCart(productId: string) {
      const index = userCart.value.findIndex((el: Product) => el.id === productId && el.userId === String(user.value?.id))
      userCart.value.splice(index, 1)
    }

    function getUserCart() {
      return userCart.value.filter((el: Product) => el.userId === String(user.value?.id))
    }

    return { addToCart, removeFromCart, getUserCart, userCart }
  },
  {
    persist: true,
  },
)
