import { memo } from 'react'
import type { DictData, DictKeys } from '@/models/dict'
import { convertKeys } from '@/models/dict'

interface DictProps {
  value: DictKeys
  options: DictData[]
  separator?: string
}

const DictText: React.FC<DictProps> = ({ value, options, separator = ',' }) => {
  const data = options.filter((i) => {
    return convertKeys(value).includes(i.dictValue)
  })

  return <span>{data.map(d => d.dictLabel).join(separator)}</span>
}

export default memo(DictText)
