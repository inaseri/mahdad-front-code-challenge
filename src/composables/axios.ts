import axios, { type AxiosError } from 'axios'
import { toast } from 'vue3-toastify'



const api = axios.create({
  baseURL: 'https://api.polygon.io/v3/reference/',
})


export const useGet = async (
  path: string,
  query?: object,
  headers?: object,
  maxRetries: number = 3,
  delay: number = 60000,
) => {
  let attempt = 0

  while (attempt < maxRetries) {
    try {
      const result = await api.get(path, {
        params: query,
        headers,
      })
      return result.data
    } catch (error: AxiosError) {
      toast(error.response?.data?.error, { type: 'error' })
      attempt++
      if (attempt >= maxRetries) {
        throw error
      }
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }
}
