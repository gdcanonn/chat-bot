import { Providers } from '@/components/templates'
import '@/styles/globals.css'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`bg-black text-white min-h-screen flex flex-col md:py-8 md:max-w-[45rem] mx-auto ${workSans.className}`}
      >
        <main className='grow flex flex-col gap-8 items-center justify-between p-8 md:border-2 border-gray-500 rounded-xl [&>*]:w-full'>
          <Providers>{children}</Providers>
        </main>
        <div id='notifications-portal' className='absolute top-8 right-8'></div>
      </body>
    </html>
  )
}
