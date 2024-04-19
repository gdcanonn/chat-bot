import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgTag: string
}

const ChatButton = ({ imgTag, children, ...restProps }: Props) => {
  return (
    <button
      {...restProps}
      data-testid='chat-button-test'
      type='button'
      className='flex justify-center gap-4 border border-secundary bg-transparent rounded-lg py-10 px-8 w-full md:w-auto'
    >
      <span className='inline-block font-light text-xl text-primary'>{children}</span>
      <Image
        className='object-contain'
        src={`/assets/${imgTag}.png`}
        alt='Advice text'
        width={25}
        height={25}
      />
    </button>
  )
}

export default ChatButton
