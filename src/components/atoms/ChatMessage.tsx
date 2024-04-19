import { ChatMessageType } from '@/utils/interfaces'
import Image from 'next/image'

interface Props {
  index: number
  msg: ChatMessageType
}

const ChatMessage = ({ index, msg: { message } }: Props) => (
  <article className='flex gap-2 self-end'>
    {index % 2 !== 0 && (
      <Image
        className='bot object-contain'
        src='/assets/robot.png'
        alt='Robot author'
        width={35}
        height={35}
      />
    )}
    <div className='w-fit rounded-lg text-white p-4 border-2 odd:box-user even:box-bot'>
      <p>{message}</p>
    </div>
    {index % 2 === 0 && (
      <Image
        className='object-contain'
        src='/assets/user.png'
        alt='User author'
        width={35}
        height={35}
      />
    )}
  </article>
)

export default ChatMessage
