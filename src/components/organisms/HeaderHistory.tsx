'use client'

import { PATHS } from '@/utils/constants'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { KeyboardEvent } from 'react'

const HeaderHistory = () => {
  const router = useRouter()

  const handleGoHome = () => {
    router.push(PATHS.home)
  }

  const handleGoHomeKeyDown = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter') handleGoHome()
  }

  return (
    <div className='relative w-full'>
      <header className='flex justify-between items-center gap-4 border-2 border-primary px-4 py-[9px] rounded-xl bg-primary-bg/20'>
        <h1 className='font-semibold text-3xl text-primary'>JARVIS</h1>
        <Image
          className='object-contain cursor-pointer hover:custom-scale'
          src='/assets/robot.png'
          alt='Robot'
          tabIndex={1}
          width={50}
          height={50}
          onClick={handleGoHome}
          onKeyDown={handleGoHomeKeyDown}
        />
      </header>
      <Image
        className='object-contain absolute -bottom-10 right-1/2 translate-x-1/2'
        data-testid='history-img-test'
        src='/assets/history.png'
        alt='History'
        width={85}
        height={85}
      />
    </div>
  )
}

export default HeaderHistory
