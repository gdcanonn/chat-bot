import { ChatMessageType } from '@/utils/interfaces'
import { AxiosResponse } from 'axios'

export const chatInfoMe: ChatMessageType = {
  id: '7787fe69-047c-40ad-bac0-7b8150471cc4',
  author: 'Me',
  message: 'Hello',
  date: {
    timestamp: 1713040998000,
    formated: '2024-04-13 03:43 PM',
  },
}

export const chatInfoBot: ChatMessageType = {
  id: '89793703-30d3-4862-833a-9ceb163838c0',
  date: {
    timestamp: 1713041000000,
    formated: '2024-04-13 03:43 PM',
  },
  message: 'Hi there! How can I assist you today?',
  author: 'Bot',
}

export const currentChat = JSON.stringify([chatInfoMe, chatInfoBot])

export const mockResponse = {
  data: {
    data: chatInfoBot,
  },
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {},
} as AxiosResponse
