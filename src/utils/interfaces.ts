import { UUID } from 'crypto'

export interface NotificationMsg {
  severity: 'success' | 'error' | 'warning'
  message: string
}

export interface ChatRequest {
  text: string
}

export interface ChatDate {
  timestamp: number
  formated: string
}

export interface ChatMessageType {
  id: UUID
  date: ChatDate
  message: string | null
  author: string
}

export interface ChatHistory {
  id: UUID
  title: string
  date: ChatDate
  chat: ChatMessageType[]
}
