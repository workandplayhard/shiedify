import React from 'react'

import { Button, Icon, TextLink, Modal } from '@/components'
import { t } from '@/i18n'
import { contactUsPath } from '@/utils'

import descriptorImg from '@/assets/images/img_descriptor.png'

interface Props {
  open?: boolean
  onClose?: () => void
}

const HelperModal: React.FC<Props> = ({ open, onClose }) => (
  <Modal
    className="w-797"
    open={open}
    onClose={onClose}
    header={
      <div className="text-box with-border">
        <div className="icon-wrap">
          <Icon name="credit-card" />
          <h4>{t('findYourDescriptor')}</h4>
          <p>{t('lessThan')}</p>
        </div>
      </div>
    }
    footer={
      <>
        <TextLink
          className="main-btn outline"
          text={t('needAssistance')}
          link={contactUsPath}
        />
        <Button type="button" text={t('thanks')} />
      </>
    }
  >
    <div className="instructions-steps">
      <ul>
        <li>
          <h5>{t('stepOne')}</h5>
          <p>{t('openYourEmailApp')}</p>
        </li>
        <li>
          <h5>{t('stepTwo')}</h5>
          <p>
            <img src={descriptorImg} alt="" />
          </p>
        </li>
      </ul>
    </div>
  </Modal>
)

export default HelperModal
