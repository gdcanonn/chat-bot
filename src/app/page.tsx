import { Home } from '@/components/templates'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Reflex Chat',
  description: 'Home where you chat with your bot.',
}

const HomePage = () => <Home />

export default HomePage
