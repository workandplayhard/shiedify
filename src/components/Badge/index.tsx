import React from 'react'
import classNames from 'classnames'

import { type IBadgeProps } from './types'

export const Badge: React.FC<IBadgeProps> = ({
  children,
  type = 'success',
}) => {
  return <span className={classNames('badge', type)}>{children}</span>
}
