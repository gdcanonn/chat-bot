'use client'

import Loading from '@/app/history/loading'
import { HistoryMessage } from '@/components/atoms'
import { getLocalStorage } from '@/utils/browserStorage'
import { STORAGE_KEYS } from '@/utils/constants'
import { ChatHistory } from '@/utils/interfaces'
import { useEffect, useState } from 'react'

const HistoryBox = () => {
  const [loading, setLoading] = useState(true)
  const [history, setHistory] = useState<ChatHistory[]>([])

  const fetchData = () => {
    const history: ChatHistory[] = getLocalStorage(STORAGE_KEYS.chatHistory)
    history?.length > 0 && setHistory(history)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <Loading />

  return (
    <section className='grow flex flex-col gap-4 overflow-y-auto h-1 mt-16'>
      {history?.length > 0 ? (
        history
          .sort((chatA, chatB) => chatB.date.timestamp - chatA.date.timestamp)
          .map((h, index) => <HistoryMessage key={h.id} tabIndex={index + 2} info={h} />)
      ) : (
        <p className='text-3xl text-white text-center sm:px-10'>
          Go chat! There are no chats in your history yet.
        </p>
      )}
    </section>
  )
}

export default HistoryBox
