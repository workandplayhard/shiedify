import React from 'react'

import { type IProgressProps } from './types'

export const Progress: React.FC<IProgressProps> = ({
  totalValue,
  currentValue,
  title,
}) => {
  const percentage =
    totalValue && currentValue ? (currentValue * 100) / totalValue : 0
  return (
    <div className="custom-progress">
      {!!title && <p>{title}</p>}
      <div className="progress-bar">
        <div className="line">
          {totalValue && currentValue && (
            <span style={{ width: percentage + '%' }} />
          )}
        </div>
        {totalValue && <p>{totalValue}</p>}
      </div>
    </div>
  )
}

export default Progress
