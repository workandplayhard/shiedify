import React from 'react'

import { FormAlert, TextLink } from '@/components'
import { t } from '@/i18n'
import { contactUsPath } from '@/utils'

interface Props {
  error: 'invalid' | 'notFound' | undefined
}

const Error: React.FC<Props> = ({ error }) => {
  if (!error) return null

  return (
    <FormAlert>
      <p>{error === 'invalid' ? t('invalidPassword') : t('cannotFindEmail')}</p>
      {error === 'notFound' && (
        <p>
          <TextLink
            link={contactUsPath}
            text={t('contactUsToSignUp')}
            iconRight="arrow-right"
          />
        </p>
      )}
    </FormAlert>
  )
}

export default Error
