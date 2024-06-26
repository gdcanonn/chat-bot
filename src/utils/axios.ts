import axios from 'axios'
import { MESSAGES } from './constants'

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_API,
})

// Request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.code === 'ERR_NETWORK') error.message = MESSAGES.noConnection
    return Promise.reject(error)
  }
)

export default axiosInstance
