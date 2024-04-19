'use client'

import { useGlobalContext } from '@/contexts/Global'
import { PATHS } from '@/utils/constants'
import { ChatHistory } from '@/utils/interfaces'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { KeyboardEvent } from 'react'

interface Props {
  info: ChatHistory
  tabIndex: number
}

const HistoryMessage = ({ info, tabIndex }: Props) => {
  const { setMessages, setChatId } = useGlobalContext()
  const router = useRouter()

  const { id, title, date, chat } = info

  const handleViewMessages = () => {
    setChatId(id)
    setMessages(chat)
    router.push(PATHS.home)
  }

  const handleViewMessagesKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') handleViewMessages()
  }

  return (
    <article
      className='border-2 border-accent bg-accent-bg/60 rounded-lg w-full py-3 px-4 flex justify-between items-center gap-4 cursor-pointer'
      tabIndex={tabIndex}
      data-testid='open-chat-history-test'
      onClick={handleViewMessages}
      onKeyDown={handleViewMessagesKeyDown}
    >
      <Image
        className='object-contain'
        src='/assets/robot.png'
        alt='Robot'
        width={40}
        height={40}
      />
      <p className='text-xl font-thin truncate grow'>{title}</p>
      <p className='min-w-fit'>{date.formated}</p>
    </article>
  )
}

export default HistoryMessage
