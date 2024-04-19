'use client'

import Loading from '@/app/loading'
import { Notification } from '@/components/atoms'
import { ChatBox, HeaderChat, Welcome } from '@/components/organisms'
import { MESSAGES } from '@/utils/constants'
import Image from 'next/image'
import { useHome } from './hooks/useHome'

const Home = () => {
  const {
    notification,
    asking,
    loading,
    messages,
    text,
    sendMessage,
    setText,
    handleKeyDown,
    handleClick,
  } = useHome()

  return (
    <>
      {notification && (
        <Notification severity={notification.severity} message={notification.message} />
      )}

      <HeaderChat loading={asking} />

      {loading ? (
        <Loading />
      ) : messages.length > 0 ? (
        <ChatBox messages={messages} />
      ) : (
        <Welcome sendMessage={sendMessage} />
      )}

      <section className='flex relative'>
        <input
          type='text'
          value={text}
          tabIndex={5}
          data-testid='send-message-input-test'
          placeholder={MESSAGES.saySomething}
          className='bg-transparent border-2 border-primary rounded-xl text-white outline-none p-4 pr-14 w-full truncate focus:border-primary focus:ring-primary'
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Image
          className='object-contain cursor-pointer absolute right-4 top-1/2 -translate-y-1/2'
          src='/assets/communication.png'
          alt='Send message'
          width={28}
          height={28}
          onClick={handleClick}
        />
      </section>
    </>
  )
}

export default Home
