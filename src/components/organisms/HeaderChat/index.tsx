'use client'

import { LoadingDots } from '@/components/atoms'
import Image from 'next/image'
import { useChat } from './hooks/useChat'

interface Props {
  loading: boolean
}

const HeaderChat = ({ loading }: Props) => {
  const { handleNewChat, handleNewChatKeyDown, handleHistory, handleHistoryKeyDown } = useChat()

  return (
    <header className='flex justify-between items-center gap-4 border-2 border-primary p-4 rounded-xl bg-primary-bg/20'>
      <Image
        className='object-contain cursor-copy hover:custom-scale'
        src='/assets/new-chat.png'
        alt='New chat'
        data-testid='new-chat-test'
        tabIndex={1}
        width={35}
        height={35}
        onClick={() => handleNewChat(true)}
        onKeyDown={handleNewChatKeyDown}
      />
      <div className='flex gap-2'>
        <h1 className='font-semibold text-3xl text-primary'>JARVIS</h1>
        {loading && <LoadingDots />}
      </div>
      <Image
        className='object-contain cursor-pointer hover:custom-scale'
        src='/assets/history.png'
        alt='History'
        data-testid='new-chat-history-test'
        tabIndex={2}
        width={35}
        height={35}
        onClick={handleHistory}
        onKeyDown={handleHistoryKeyDown}
      />
    </header>
  )
}

export default HeaderChat
