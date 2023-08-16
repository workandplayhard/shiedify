import React from 'react'
import classNames from 'classnames'

import { t } from '@/i18n'
import { TextLink, Icon } from '@/components'
import { useOnBoarding } from '@/hooks'

import logoImg from '@/assets/images/img_logo.svg'

const pointLists = [
  'downloadDescriptors',
  'invalidDescriptors',
  'moreDescriptors',
  'cannotModifyDescriptors',
  'seeTheStatus',
]

interface Props {
  onBack?: () => void
}

export const Description: React.FC<Props> = ({ onBack }) => {
  const { status } = useOnBoarding()
  const isPreview = status === 'preview'

  return (
    <div className="data-intro">
      <div
        className={classNames({
          'prev-page': isPreview,
          logo: !isPreview,
        })}
      >
        {isPreview ? (
          <TextLink
            iconLeft="arrow-left"
            text={t('back')}
            onClick={() => onBack?.()}
          />
        ) : (
          <TextLink>
            <img src={logoImg} alt="" />
          </TextLink>
        )}
      </div>

      {isPreview && (
        <div className="icon-box">
          <Icon name="file" />
        </div>
      )}

      <div className="title-box">
        <h1>{isPreview ? t('previewDescriptorsTitle') : t('descriptors')}</h1>
        <p>
          {isPreview ? t('previewDescriptorsContent') : t('monitorChargeBacks')}
        </p>
      </div>

      {isPreview && (
        <div className="points-list">
          <ul>
            {pointLists.map((point, index) => (
              <li key={index}>{t(point)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Description
