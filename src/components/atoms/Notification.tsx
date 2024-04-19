'use client'

import { useGlobalContext } from '@/contexts/Global'
import { NotificationMsg } from '@/utils/interfaces'
import cx from 'classnames'
import { Toast, ToastToggle } from 'flowbite-react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi'

const Notification = ({ severity, message }: NotificationMsg) => {
  const { setNotification } = useGlobalContext()

  useEffect(() => {
    setTimeout(() => {
      removeNotification()
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const removeNotification = () => {
    setNotification(null)
  }

  return createPortal(
    <Toast className='bg-notification text-white flex gap-4'>
      <div
        className={cx(
          'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
          {
            'bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200':
              severity === 'success',
          },
          {
            'bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200': severity === 'error',
          },
          {
            'bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200':
              severity === 'warning',
          }
        )}
      >
        {severity === 'success' && <HiCheck className='h-5 w-5' />}
        {severity === 'error' && <HiX className='h-5 w-5' />}
        {severity === 'warning' && <HiExclamation className='h-5 w-5' />}
      </div>
      <div className='text-sm font-normal'>{message}</div>
      <ToastToggle
        className='bg-transparent'
        onDismiss={removeNotification}
        onClick={removeNotification}
      />
    </Toast>,
    document.getElementById('notifications-portal') as Element
  )
}

export default Notification
