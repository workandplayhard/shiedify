import React, { useState } from 'react'
import classNames from 'classnames'

import { type ITextInputProps } from './types'
import { FormError } from '../FormError'

export const TextInput: React.FC<ITextInputProps> = ({
  label,
  icon,
  error,
  className = 'w-100',
  onChange,
  ...rest
}) => {
  const [showPwd, setShowPwd] = useState<boolean>(false)

  return (
    <label
      className={classNames(className, {
        error: !!error,
      })}
    >
      {!!label && (
        <span className="name">
          {label}
          {!!rest.required && <sup>*</sup>}
        </span>
      )}
      <span className="field">
        {rest.type !== 'password' ? (
          <span className={`ic-${icon}`} />
        ) : (
          <span
            className={showPwd ? 'ic-eye-off' : 'ic-eye'}
            onClick={() =>
              rest.type === 'password' ? setShowPwd(!showPwd) : null
            }
          />
        )}
        <input
          {...rest}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            onChange?.(ev.target.value)
          }
          type={showPwd ? 'text' : rest.type}
        />
      </span>
      {!!error && <FormError error={error} />}
    </label>
  )
}

export default TextInput
