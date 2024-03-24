import { Card, CardHeader } from '@nextui-org/react'
import levelTrophy from '../assets/level-trophy.svg'
import Loading from './Loading'
import { useEffect, useState } from 'react'

function LevelCard ({ progressPercentage, todosDone }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      {loading

        ? <Loading />
        : (
          <Card
            shadow='none'
            className='container flex px-2 py-1 w-full rounded-xl bg-violet-800'
          >
            <CardHeader className='flex gap-3'>
              <div className='bg-violet-500 px-6 py-6 rounded-full shadow-lg shadow-violet-900'>
                <img src={levelTrophy} className='w-14' />
              </div>
              <div className='flex flex-col flex-grow gap-2'>
                <p className='text-md uppercase text-white font-bold text-xl'>Niveau 1</p>

                <div>
                  <div className='text-white flex justify-between'>
                    <p className='text-small uppercase'>Prochain niveau</p>
                    <p className='font-bold'><span>{todosDone}</span>/10</p>
                  </div>

                  <div className='relative w-full h-3 bg-white rounded-md overflow-hidden'>
                    <div className='absolute top-0 left-0 w-full h-full rounded-full bg-yellow-400' style={{ width: `${progressPercentage}%` }} />
                  </div>
                </div>

              </div>

            </CardHeader>
          </Card>
          )}
    </>
  )
}

export default LevelCard
