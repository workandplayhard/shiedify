import React from 'react'

import { t } from '@/i18n'
import { useOnBoarding } from '@/hooks'

const noteLists = [
  'verifiedDescriptors',
  'avoidRejection',
  'cannotModifyDescriptors',
  'addUnlimitedNumber',
]

export const Notes: React.FC = () => {
  const { status } = useOnBoarding()
  if (status === 'preview') return null

  return (
    <div className="data-points">
      <h3>{t('somePointsToNote')}</h3>
      <div className="points-list">
        <ul>
          {noteLists.map((note, index) => (
            <li key={index}>{t(note)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Notes
