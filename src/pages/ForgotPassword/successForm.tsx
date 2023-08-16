import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { t } from '@/i18n'
import { Button, Icon, TextLink } from '@/components'
import { signInPath } from '@/utils'

interface Props {
  email: string
}

const SuccessForm: React.FC<Props> = ({ email }) => {
  const navigate: NavigateFunction = useNavigate()

  return (
    <div className="login-form">
      <div className="prev-page">
        <TextLink
          iconLeft="arrow-left"
          text={t('backToLogin')}
          link={signInPath}
        />
      </div>
      <div className="inner-wrap">
        <div className="content-box">
          <div className="restore-status">
            <Icon name="check-circle" />
          </div>
          <div className="title">
            <h1>{t('checkYourEmails')}</h1>
            <p>{t('sentResetLinkToEmail', { email })}</p>
          </div>
          <div className="form-submit">
            <Button
              text={t('backToLogin')}
              className="main-btn"
              onClick={() => navigate(signInPath)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessForm
