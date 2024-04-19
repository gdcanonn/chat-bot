import { NotFound } from '@/components/templates'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Card Dashboard | 404',
  description: 'Page not found',
}

const NotFoundPage = () => <NotFound />

export default NotFoundPage
