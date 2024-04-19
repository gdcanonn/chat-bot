'use client'

import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => (
  <section className='grow flex flex-col justify-center items-center gap-3 text-center'>
    <Image
      className='object-contain'
      src='/assets/something-lost.png'
      alt='Something lost'
      width={500}
      height={500}
    />
    <h1 className='font-bold text-4xl'>Oops, looks like the page is lost.</h1>
    <p>This is not a fault, just an accident that was not intentional.</p>
    <Link href='/'>
      <button>Ir a home</button>
    </Link>
  </section>
)

export default NotFound
