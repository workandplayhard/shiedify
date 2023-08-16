import React, { useCallback, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'

import { useToast } from '@/hooks'
import Icon from '../Icon'
import Button from '../Button'
import { IToastProps } from './types'

export const Toast: React.FC<IToastProps> = ({
  id,
  message,
  secondaryMessage,
  actionButtons,
  icon,
  type,
  autoHide,
  autoHideTime,
  hasCloseBtn,
  MsgWrapEl = React.Fragment,
}) => {
  const { removeToast } = useToast()
  const [opened, setOpened] = useState<boolean>(true)

  const onDismiss = useCallback(() => {
    setOpened(false)
    const timeout = setTimeout(() => {
      removeToast(id)
      clearTimeout(timeout)
    }, 300)
  }, [id, removeToast])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (autoHide && autoHideTime) {
      timeout = setTimeout(() => {
        onDismiss()

        clearTimeout(timeout)
      }, autoHideTime)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [autoHide, autoHideTime, onDismiss])

  const iconName = useMemo(() => {
    if (icon) return icon
    if (type === 'success') return 'check-verified'
    if (type === 'info') return 'alert-circle'
    return 'alert-circle'
  }, [icon, type])

  return (
    <div className={classNames('alert-item', type, { open: opened })}>
      <div className="icon-box">
        <Icon name={iconName} />
      </div>
      <div className="text-box">
        {!!message && (
          <h5>
            <MsgWrapEl>{message}</MsgWrapEl>
          </h5>
        )}
        {!!secondaryMessage &&
          (typeof secondaryMessage === 'string' ? (
            <p>{secondaryMessage}</p>
          ) : (
            secondaryMessage
          ))}
      </div>
      {!!actionButtons && <div className="btn-box">{actionButtons}</div>}
      {hasCloseBtn && (
        <div className="close-btn">
          <Button className="" iconLeft="close" onClick={onDismiss} />
        </div>
      )}
    </div>
  )
}
