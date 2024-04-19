import Loading from '@/app/history/loading'
import { HistoryBox } from '@/components/organisms'
import { Suspense } from 'react'

const History = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HistoryBox />
    </Suspense>
  )
}

export default History
