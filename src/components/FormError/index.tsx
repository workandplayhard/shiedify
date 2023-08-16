import React from 'react'

import { type IFormError } from './types'

export const FormError: React.FC<IFormError> = ({ error }) => {
  if (!error) return null
  return <span className="warning">{error}</span>
}
