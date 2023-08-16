import React from 'react'

import { Button, Checkbox, TextArea, TextInput } from '@/components'
import { useContactUs } from '@/hooks/useContactUs'
import { t } from '@/i18n'

const ContactForm: React.FC = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    message,
    setMessage,
    loading,
    email,
    setEmail,
    check,
    setCheck,
    error,
    onChange,
    onSendMessage,
  } = useContactUs()

  return (
    <div className="contact-form">
      <div className="form-fields">
        <TextInput
          label={t('firstName')}
          placeholder={t('firstName')}
          className="w-50"
          value={firstName}
          onChange={onChange('firstName', setFirstName)}
          disabled={loading}
          error={error.firstName}
        />
        <TextInput
          label={t('lastName')}
          placeholder={t('lastName')}
          className="w-50"
          value={lastName}
          onChange={onChange('lastName', setLastName)}
          disabled={loading}
          error={error.lastName}
        />
        <TextInput
          label={t('email')}
          placeholder={t('emailPlaceHolder')}
          className="w-100"
          value={email}
          onChange={onChange('email', setEmail)}
          disabled={loading}
          error={error.email}
        />
        <TextArea
          label={t('message')}
          placeholder={t('leaveUsAMessage')}
          className="w-100"
          value={message}
          onChange={onChange('message', setMessage)}
          disabled={loading}
          error={error.message}
        />
        <Checkbox checked={check} onChange={onChange('check', setCheck)}>
          <span>
            {t('youAgreeToOurFriendly')}&nbsp;
            <a href="#">{t('privacyPolicy')}</a>.
          </span>
        </Checkbox>
      </div>
      <div className="form-submit">
        <Button
          text={t('sendPasswordResetLink')}
          className="main-btn"
          disabled={loading || !check}
          loading={loading}
          onClick={onSendMessage}
        />
      </div>
    </div>
  )
}

export default ContactForm
