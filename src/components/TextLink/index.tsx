import React, { useCallback } from 'react'
import classNames from 'classnames'

import { type ITextLinkProps } from './types'
import Icon from '../Icon'

export const TextLink: React.FC<ITextLinkProps> = ({
  text,
  iconLeft,
  iconRight,
  disabled,
  link,
  className,
  children,
  onClick,
  ...rest
}) => {
  const onClickLink = useCallback(() => {
    if (disabled) return
    if (link) {
      window.location.href = link
    } else if (onClick) {
      onClick()
    }
  }, [disabled, link, onClick])

  return (
    <a
      {...rest}
      className={classNames('text-link', className)}
      onClick={onClickLink}
    >
      {!!iconLeft && <Icon name={iconLeft} />}
      {text}
      {children}
      {!!iconRight && <Icon name={iconRight} />}
    </a>
  )
}

export default TextLink
