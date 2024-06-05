import { Tag } from 'antd'
import { memo } from 'react'
import type { DictData, DictKeys } from '@/models/dict'
import { convertKeys } from '@/models/dict'

interface DictProps {
  value: DictKeys
  options: DictData[]
}

function getColor(color?: string) {
  if (color === 'info') return 'lime'
  if (color === 'danger') return 'red'
  if (color === 'primary') return 'blue'
  if (color === 'warning') return 'orange'
  if (color === 'success') return 'green'
  return color
}

const DictTag: React.FC<DictProps> = ({ value, options }) => {
  const data = options.filter((i) => {
    return convertKeys(value).includes(i.dictValue)
  })

  return (
    <span>
      {data.map(d => (
        <Tag key={d.dictValue} color={getColor(d.listClass)}>
          {d.dictLabel}
        </Tag>
      ))}
    </span>
  )
}

export default memo(DictTag)
