import { HeaderHistory } from '@/components/organisms'
import '@/styles/globals.css'

export default function HistoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderHistory />
      {children}
    </>
  )
}
