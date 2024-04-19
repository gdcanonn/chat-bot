'use client'

import { ChatMessage } from '@/components/atoms'
import { ChatMessageType } from '@/utils/interfaces'
import { useEffect, useRef } from 'react'

interface Props {
  messages: ChatMessageType[]
}

const ChatBox = ({ messages }: Props) => {
  const scrollChat = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    scrollChat.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <section className='grow flex flex-col gap-4 overflow-y-auto h-1'>
      {messages.map((msg, index) => (
        <div
          ref={scrollChat}
          key={msg.id}
          className='odd:self-end even:self-start max-w-[70%] flex flex-col gap-1 [&>p]:odd:pr-11 [&_img.bot]:even:last:animate-move-horizontal'
        >
          <ChatMessage index={index} msg={msg} />
          <p className='text-xs text-white font-light italic self-end'>
            <span className='font-medium'>{msg.author}</span>, {msg.date.formated}
          </p>
        </div>
      ))}
    </section>
  )
}

export default ChatBox
