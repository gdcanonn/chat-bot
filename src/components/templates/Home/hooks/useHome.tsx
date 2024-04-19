import { useGlobalContext } from '@/contexts/Global'
import axiosInstance from '@/utils/axios'
import { getSessionStorage, setSessionStorage } from '@/utils/browserStorage'
import { AUTHOR, ENDPOINTS, MESSAGES, STORAGE_KEYS } from '@/utils/constants'
import { getFormatedDate } from '@/utils/helpers'
import { ChatMessageType } from '@/utils/interfaces'
import { UUID } from 'crypto'
import moment from 'moment'
import { KeyboardEvent, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const useHome = () => {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(true)
  const [asking, setAsking] = useState(false)
  const { messages, setMessages, notification, setNotification } = useGlobalContext()

  const chatToBot = async (text: string) => {
    try {
      setAsking(true)
      const res = await axiosInstance.post(ENDPOINTS.chat, { text })
      const botMessage: ChatMessageType = res.data.data
      setMessages((prev) => [...prev, botMessage])
    } catch (error: any) {
      const errorMsg = error.response?.data?.error || error.message
      setNotification({ severity: 'error', message: errorMsg })
    } finally {
      setAsking(false)
    }
  }

  const sendMessage = async (msg: string) => {
    if (msg) {
      setText('')
      const currentTime = moment().unix() * 1000
      const userMessage: ChatMessageType = {
        id: uuidv4() as UUID,
        author: AUTHOR.user,
        message: msg,
        date: { timestamp: currentTime, formated: getFormatedDate(currentTime) },
      }
      setMessages((prev) => [...prev, userMessage])
      await chatToBot(msg)
    } else {
      setNotification({ severity: 'warning', message: MESSAGES.saySomething })
    }
  }

  const handleClick = async () => await sendMessage(text)

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') await sendMessage(e.currentTarget.value)
  }

  useEffect(() => {
    const currentChat: ChatMessageType[] = getSessionStorage(STORAGE_KEYS.currentChat)
    if (currentChat?.length > 0) setMessages(currentChat)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (messages?.length > 0) {
      setSessionStorage(STORAGE_KEYS.currentChat, messages)
    }
    setLoading(false)
  }, [messages])

  return {
    notification,
    asking,
    loading,
    messages,
    text,
    sendMessage,
    setText,
    handleKeyDown,
    handleClick,
    chatToBot,
  }
}
