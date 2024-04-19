import { History } from '@/components/templates'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'History | Reflex Chat',
  description: 'History where you can see all chat messages.',
}

const HistoryPage = () => <History />

export default HistoryPage
