import React, { FC, useEffect, useState } from 'react'

async function fakeFetch (names: string[]) {
  if (names.length === 0) {
    return []
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('promise resolve')
      resolve({
        name: 'madp',
        id: '1'
      })
    }, 5000)
  })
}

export interface IAlwaysLoadingProps {
  names: string[]
}
// TODO: 为什么肉眼所见, loading一直是false
const AlwaysLoading: FC<IAlwaysLoadingProps> = ({ names }: IAlwaysLoadingProps) => {
  const [selfNames, setSelfNames] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setSelfNames(names)
  }, [names])
  useEffect(() => {
    setLoading(true)
    fakeFetch(selfNames).then(() => {
      console.log('loading end')
      setLoading(false)
    })
  }, [selfNames])
  return (
    <div>
      <h1>loading: {loading.toString()}</h1>
    </div>
  )
}

export default AlwaysLoading
