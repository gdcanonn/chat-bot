import { Fragment } from 'react'

const LoadingHome = () => {
  const rows = [1, 2]

  return (
    <section className='grow flex flex-col gap-4 overflow-y-auto h-1'>
      {rows.map((row) => (
        <Fragment key={row}>
          <article className='flex justify-end'>
            <div className='w-1/3 ld-home'>
              <p>Loading...</p>
            </div>
          </article>

          <article>
            <div className='w-1/2 ld-home'>
              <p>Loading...</p>
            </div>
          </article>
        </Fragment>
      ))}
    </section>
  )
}

export default LoadingHome
