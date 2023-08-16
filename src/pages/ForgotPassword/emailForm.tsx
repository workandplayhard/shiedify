import React, { useCallback, useState } from 'react'

import { t } from '@/i18n'
import { Button, TextInput, TextLink } from '@/components'
import { contactUsPath, signInPath } from '@/utils'
import { useForgotPasswordMutation } from '@/apollo/graphql'

import Header from './header'
import SuccessForm from './successForm'
import Error from './error'

const EmailForm: React.FC = () => {
  const [forgotPassword, { loading }] = useForgotPasswordMutation()
  const [email, setEmail] = useState<string>('')
  const [apiError, setApiError] = useState<'invalid' | undefined>()
  const [error, setError] = useState<string>()
  const [hasSent, setHasSent] = useState<boolean>(false)

  const validate = useCallback(() => {
    let _error = ''

    if (!email) {
      _error = t('validation.fieldRequired', {
        fieldName: 'email',
      })
    }

    if (email) {
      const emailTest = /\S+@\S+\.\S+/.test(email)

      if (!emailTest) _error = t('validation.invalidEmail')
    }

    setError(_error)
    return !_error
  }, [email])

  const onHandleSendLink = useCallback(() => {
    if (validate()) {
      forgotPassword({
        variables: { email },
        onCompleted: res => {
          setHasSent(!!res.forgotPassword)
          if (res.forgotPassword) {
            setApiError(undefined)
          } else {
            setApiError('invalid')
          }
        },
        onError: () => {
          setApiError('invalid')
        },
      })
    }
  }, [email, forgotPassword, validate])

  if (hasSent) {
    return <SuccessForm email={email} />
  }

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
          <Header />
          <Error error={apiError} />
          <div className="form-data">
            <div className="form-fields">
              <TextInput
                name="email"
                label={t('email')}
                onChange={val => {
                  setError('')
                  setApiError(undefined)
                  setEmail(val)
                }}
                value={email}
                error={error}
              />
            </div>
          </div>
          <div className="form-submit">
            <Button
              text={t('sendPasswordResetLink')}
              className="main-btn"
              disabled={!email || loading}
              loading={loading}
              onClick={onHandleSendLink}
            />
          </div>
          <div className="login-support">
            <p>
              {t('needSupport')}&nbsp;
              <TextLink text={t('contactUs')} link={contactUsPath} />
            </p>
          </div>
          <div className="copyright">
            <p>©&nbsp;{t('shieldify')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailForm
