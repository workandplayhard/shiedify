import React, { useCallback } from 'react'
import { useNavigate, NavigateFunction } from 'react-router-dom'

import { t } from '@/i18n'

import TextLink from '../TextLink'
import { IBackButtonProps } from './types'

export const BackButton: React.FC<IBackButtonProps> = ({
  label,
  disabled,
  onBack,
}) => {
  const navigate: NavigateFunction = useNavigate()

  const onClick = useCallback(() => {
    if (onBack) onBack()
    else navigate(-1)
  }, [navigate, onBack])

  return (
    <div className="prev-page">
      <TextLink
        onClick={onClick}
        iconLeft="arrow-left"
        text={label || t('back')}
        disabled={disabled}
      />
    </div>
  )
}

export default BackButton
