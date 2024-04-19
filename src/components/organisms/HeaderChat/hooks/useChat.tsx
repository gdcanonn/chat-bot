import { useGlobalContext } from '@/contexts/Global'
import {
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
  setSessionStorage,
} from '@/utils/browserStorage'
import { AUTHOR, MESSAGES, PATHS, STORAGE_KEYS } from '@/utils/constants'
import { ChatHistory, ChatMessageType } from '@/utils/interfaces'
import { UUID } from 'crypto'
import { useRouter } from 'next/navigation'
import { KeyboardEvent, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const useChat = () => {
  const router = useRouter()
  const { chatId, setChatId, setMessages, setNotification } = useGlobalContext()

  const updateChat = useCallback((currentChat: ChatMessageType[], chatId: UUID) => {
    const history: ChatHistory[] = getLocalStorage(STORAGE_KEYS.chatHistory) || []
    const updateChat = history.find((h) => h.id === chatId)
    if (updateChat) {
      updateChat.date = currentChat[currentChat.length - 1].date
      updateChat.chat = currentChat
      setLocalStorage(STORAGE_KEYS.chatHistory, [
        ...history.filter((h) => h.id !== chatId),
        updateChat,
      ])
    }
  }, [])

  const saveChat = useCallback((currentChat: ChatMessageType[]) => {
    const title =
      `${AUTHOR.user}: ${currentChat[0]?.message}, ${AUTHOR.bot}: ${currentChat[1]?.message}` || ''
    const newChat: ChatHistory = {
      id: uuidv4() as UUID,
      title,
      date: currentChat[currentChat.length - 1].date,
      chat: currentChat,
    }
    const history: ChatHistory[] = getLocalStorage(STORAGE_KEYS.chatHistory) || []
    setLocalStorage(STORAGE_KEYS.chatHistory, [...history, newChat])
  }, [])

  const handleNewChat = useCallback((fromNewButton: boolean) => {
    const currentChat: ChatMessageType[] = getSessionStorage(STORAGE_KEYS.currentChat)
    if (currentChat?.length > 0) {
      chatId ? updateChat(currentChat, chatId) : saveChat(currentChat)
      setMessages([])
      setChatId(null)
      setSessionStorage(STORAGE_KEYS.currentChat, [])
    } else {
      fromNewButton && setNotification({ severity: 'warning', message: MESSAGES.saySomething })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNewChatKeyDown = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter') handleNewChat(true)
  }

  const handleHistory = useCallback(
    () => {
      handleNewChat(false)
      router.push(PATHS.history)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const handleHistoryKeyDown = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter') handleHistory()
  }

  return {
    handleNewChat,
    handleNewChatKeyDown,
    handleHistory,
    handleHistoryKeyDown,
  }
}
