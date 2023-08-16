import React from 'react'

import { t } from '@/i18n'
import { useLoginForm } from '@/hooks'
import { Button, TextInput, TextLink } from '@/components'
import { contactUsPath } from '@/utils'

import Error from './error'
import Options from './options'
import Header from './header'

const LoginForm: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    authError,
    keepSignin,
    setKeepSignin,
    error,
    signingIn,
    onChange,
    onHandleSignIn,
  } = useLoginForm({ isAdmin: false })

  return (
    <div className="login-form">
      <div className="inner-wrap">
        <div className="content-box">
          <Header />
          <Error error={authError} />
          <div className="form-data">
            <div className="form-fields">
              <TextInput
                className="w-100"
                name="email"
                label={t('email')}
                onChange={onChange('email', setEmail)}
                value={email}
                disabled={signingIn}
                error={error.email}
              />
              <TextInput
                className="w-100"
                name="password"
                label={t('password')}
                type="password"
                onChange={onChange('password', setPassword)}
                value={password}
                disabled={signingIn}
                error={error.password}
              />
            </div>
          </div>
          <Options
            keepSignin={keepSignin}
            onChangeKeepSignin={onChange('keepSignin', setKeepSignin)}
            disabled={signingIn}
          />
          <div className="form-submit">
            <Button
              text={t('signIn')}
              className="main-btn"
              disabled={signingIn}
              loading={signingIn}
              onClick={onHandleSignIn}
            />
          </div>
          <div className="login-support">
            <p>
              {t('notHaveAnAccount')}
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

export default LoginForm
