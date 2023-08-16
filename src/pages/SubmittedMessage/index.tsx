import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { Icon } from '@/components'
import { t } from '@/i18n'
import { signInPath } from '@/utils'

const SubmittedMessage: React.FC = () => {
  const navigate = useNavigate()
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timer.current = setTimeout(() => {
      navigate(signInPath)
    }, 5000)

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [navigate])

  return (
    <div className="message-page">
      <div className="notification-box submitted">
        <div className="icon-box">
          <Icon name="message-check-circle" />
        </div>
        <div className="title-box">
          <h1>{t('weReceivedYourMessage')}</h1>
          <p>{t('thankyou')}</p>
        </div>
        <div className="text-box">
          <p>{t('redirectingToLogin')}</p>
        </div>
      </div>
    </div>
  )
}

export default SubmittedMessage
