import React from 'react'
import classNames from 'classnames'

import { ITextAreaProps } from './types'

export const TextArea: React.FC<ITextAreaProps> = ({
  label,
  error,
  className,
  onChange,
  ...rest
}) => {
  return (
    <label
      className={classNames('w-100', className, {
        error: !!error,
      })}
    >
      {!!label && <span className="name">{label}</span>}
      <span className="field">
        <textarea
          {...rest}
          onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange?.(ev.target.value)
          }
        />
      </span>

      {/* TODO Form error */}
    </label>
  )
}

export default TextArea
