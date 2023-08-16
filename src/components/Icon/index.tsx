import React from 'react'

import { type IIconProps } from './types'

export const Icon: React.FC<IIconProps> = ({ name }) => {
  if (!name) return null
  return <span className={`ic-${name}`} />
}

export default Icon
