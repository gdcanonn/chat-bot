import { ChatButton } from '@/components/atoms'

interface Props {
  sendMessage: (text: string) => void
}

const Welcome = ({ sendMessage }: Props) => (
  <section className='flex flex-col gap-20'>
    <p className='text-3xl text-white text-center'>This is Jarvis how may I help you! ?</p>
    <div className='flex flex-wrap gap-8 justify-between'>
      <ChatButton
        imgTag='weather-forecast'
        onClick={() => sendMessage("How's the weather like?")}
        tabIndex={3}
      >
        {"How's the weather like?"}
      </ChatButton>
      <ChatButton imgTag='idea' onClick={() => sendMessage('Give me an advice')} tabIndex={4}>
        Give me an advice
      </ChatButton>
    </div>
  </section>
)

export default Welcome
