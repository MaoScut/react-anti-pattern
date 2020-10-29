import React, { FC, useEffect, useState } from 'react'

export interface IUseEffectNotTriggerProps {
}

function getSearchResult (t: string) {
  return Promise.reject('')
}

const UseEffectNotTrigger: FC<IUseEffectNotTriggerProps> = ({}: IUseEffectNotTriggerProps) => {
  const [searchText, setSearchText] = useState('')
  const [stableText, setStableText] = useState(searchText)
  const [result, setResult] = useState('')
  useEffect(() => {
    async function fn() {
      // 如果请求失败了, 再次点击按钮, 不会再发请求, 因为stableText没有变化
      // 发请求要放在click函数里面!
      const result = await getSearchResult(stableText)
      setResult(result)
    }
    fn()
  }, [stableText])
  return (
    <div>
      <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)}/>
      <button onClick={() => setStableText(searchText)}>search</button>
      <div>result: {result}</div>
    </div>
  )
}

export default UseEffectNotTrigger
