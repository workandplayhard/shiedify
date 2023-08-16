import React from 'react'

import { type IFormAlert } from './types'

export const FormAlert: React.FC<IFormAlert> = ({ children }) => {
  return <div className="error-notice">{children}</div>
}
