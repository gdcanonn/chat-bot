import { ChatHistory } from '@/utils/interfaces'
import { UUID } from 'crypto'

export const infoChatMsm: ChatHistory = {
  id: '72e98959-074e-4db3-891c-77e5a53a2793' as UUID,
  title: 'Me: Hello, Bot: Hi there! How can I assist you today?',
  date: {
    timestamp: 1713041000000,
    formated: '2024-04-13 03:43 PM',
  },
  chat: [
    {
      id: '7787fe69-047c-40ad-bac0-7b8150471cc4',
      author: 'Me',
      message: 'Hello',
      date: {
        timestamp: 1713040998000,
        formated: '2024-04-13 03:43 PM',
      },
    },
    {
      id: '89793703-30d3-4862-833a-9ceb163838c0',
      date: {
        timestamp: 1713041000000,
        formated: '2024-04-13 03:43 PM',
      },
      message: 'Hi there! How can I assist you today?',
      author: 'Bot',
    },
  ],
}

export const historyChats = JSON.stringify([infoChatMsm])

export const emptyChats = JSON.stringify([])
