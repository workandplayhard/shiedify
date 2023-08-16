import React, { useState } from 'react'

import { t } from '@/i18n'
import { TextLink } from '@/components'
import { useOnBoarding } from '@/hooks'

import HelperModal from './helperModal'

export const Helper: React.FC = () => {
  const { status } = useOnBoarding()
  const [open, setOpen] = useState<boolean>(false)

  if (status === 'preview') return null

  return (
    <>
      <div className="data-notice">
        <div className="text">
          <h3>{t('whereToFindMyDescriptors')}</h3>
          <p>{t('viewReference')}</p>
          <TextLink
            text={t('viewTutorial')}
            iconRight="arrow-right"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <HelperModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default Helper
