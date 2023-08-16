import React, { useMemo } from 'react'
import { Trans } from 'react-i18next'

import { t } from '@/i18n'
import { useOnBoarding } from '@/hooks'
import { Button } from '@/components'

const AddDescriptor: React.FC = () => {
  const { status, manualDescriptors, fileDescriptors, onPreview, fileLoading } =
    useOnBoarding()
  const descriptorsCount = useMemo(
    () => manualDescriptors.length + Object.keys(fileDescriptors).length,
    [fileDescriptors, manualDescriptors.length],
  )

  if (status === 'preview') return null

  return (
    <div className="data-files">
      <div className="title-box">
        <h3>{t('Add your descriptors')}</h3>
        <p>{t('registerDescriptors')}</p>
      </div>
      <div className="files-info"></div>
      <div className="action-btn">
        {descriptorsCount > 0 && (
          <p>
            <Trans
              i18nKey="totalDescriptors"
              values={{
                count: descriptorsCount,
                postProcess: 'interval',
                applyPostProcessor: true,
              }}
              components={{ tag: <b /> }}
            />
          </p>
        )}
        <Button
          text={t('previewAndVerify')}
          disabled={descriptorsCount === 0 || fileLoading}
          onClick={onPreview}
          loading={descriptorsCount === 0 || fileLoading}
        />
      </div>
    </div>
  )
}

export default AddDescriptor
