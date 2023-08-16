import React from 'react'
import classNames from 'classnames'

import Icon from '../Icon'

import { IButtonProps } from './types'

export const Button: React.FC<IButtonProps> = ({
  text,
  loading,
  disabled,
  iconLeft,
  iconRight,
  className = 'main-btn',
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classNames(className, {
        disabled: !!disabled,
      })}
      disabled={disabled || loading}
    >
      {!!iconLeft && <Icon name={iconLeft} />}
      {text}
      {!!iconRight && <Icon name={iconRight} />}
      {loading && <Icon name="loading" />}
    </button>
  )
}

export default Button
