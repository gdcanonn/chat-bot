'use client'

import { ChatMessageType, NotificationMsg } from '@/utils/interfaces'
import { UUID } from 'crypto'
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

export type GlobalContextType = {
  messages: ChatMessageType[]
  setMessages: Dispatch<SetStateAction<ChatMessageType[]>>
  chatId: UUID | null
  setChatId: Dispatch<SetStateAction<UUID | null>>
  notification: NotificationMsg | null
  setNotification: Dispatch<SetStateAction<NotificationMsg | null>>
}

const globalContextDefaultValues: GlobalContextType = {
  messages: [],
  setMessages: () => {},
  chatId: null,
  setChatId: () => {},
  notification: null,
  setNotification: () => {},
}

export const GlobalContext = createContext<GlobalContextType>(globalContextDefaultValues)

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([])
  const [chatId, setChatId] = useState<UUID | null>(null)
  const [notification, setNotification] = useState<NotificationMsg | null>(null)

  return (
    <GlobalContext.Provider
      value={{
        messages,
        setMessages,
        chatId,
        setChatId,
        notification,
        setNotification,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
