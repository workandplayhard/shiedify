import React from 'react'

import { Checkbox, TextLink } from '@/components'
import { t } from '@/i18n'
import { forgotPasswordPath } from '@/utils'

interface Props {
  keepSignin: boolean
  disabled: boolean
  onChangeKeepSignin: (_v: boolean) => void
}

const Options: React.FC<Props> = ({
  keepSignin,
  disabled,
  onChangeKeepSignin,
}) => {
  return (
    <div className="options">
      <div className="keep-signed">
        <div className="form-fields">
          <Checkbox
            checked={keepSignin}
            onChange={() => onChangeKeepSignin(!keepSignin)}
            label={t('keepMe')}
            disabled={disabled}
          />
        </div>
      </div>
      <div className="forgot-password">
        <p>
          <TextLink text={t('forgotPassword')} link={forgotPasswordPath} />
        </p>
      </div>
    </div>
  )
}

export default Options
