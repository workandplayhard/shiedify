import React from 'react'

import { t } from '@/i18n'

import { ICurrencyProps } from './types'

export const Currency: React.FC<ICurrencyProps> = ({
  value = 0,
  currency = 'USD',
  className,
}) => {
  return <span className={className}>{t('currency', { value, currency })}</span>
}

export default Currency
