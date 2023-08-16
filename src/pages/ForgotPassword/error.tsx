import React from 'react'

import { FormAlert } from '@/components'
import { t } from '@/i18n'

export interface Props {
  error: 'invalid' | undefined
}

const Error: React.FC<Props> = ({ error }) => {
  if (!error) return null

  return (
    <FormAlert>
      <p>{t('recheckEmail')}</p>
    </FormAlert>
  )
}

export default Error
