import React, { useCallback, useState } from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'

import { t } from '@/i18n'
import { Button, TextInput, TextLink } from '@/components'
import { contactUsPath, signInPath } from '@/utils'
import { useResetPasswordMutation } from '@/apollo/graphql'

import Header from './header'
import Error from './error'

const PasswordForm: React.FC = () => {
  const navigate: NavigateFunction = useNavigate()
  const location = useLocation()
  const [resetPassword, { loading }] = useResetPasswordMutation()
  const [password, setPassword] = useState<string>('')
  const [apiError, setApiError] = useState<'invalid' | undefined>()
  const [error, setError] = useState<string>()
  const token = new URLSearchParams(location.search).get('token') || ''

  const validate = useCallback(() => {
    let _error = ''

    if (!password) {
      _error = t('validation.fieldRequired', {
        fieldName: 'password',
      })
    }

    if (password && password.length < 6) {
      _error = t('validation.passwordLength')
    }

    setError(_error)
    return !_error
  }, [password])

  const onHandleResetPassword = useCallback(() => {
    if (validate()) {
      resetPassword({
        variables: { newPassword: password, token },
        onCompleted: res => {
          if (res.resetPassword) {
            navigate(signInPath, {
              replace: true,
            })
            setApiError(undefined)
          }
        },
        onError: () => {
          setApiError('invalid')
        },
      })
    }
  }, [navigate, password, resetPassword, token, validate])

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
                className="w-100"
                name="password"
                label={t('password')}
                type="password"
                onChange={val => {
                  setError('')
                  setPassword(val)
                }}
                value={password}
                disabled={loading}
                error={error}
              />
            </div>
          </div>
          <div className="form-submit">
            <Button
              text={t('resetPassword')}
              className="main-btn"
              disabled={!password || loading}
              loading={!password || loading}
              onClick={onHandleResetPassword}
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

export default PasswordForm
