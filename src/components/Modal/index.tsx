import React, { useRef } from 'react'
import RSModal from 'rsuite/Modal'
import classNames from 'classnames'

import { useOnClickOutside } from '@/hooks'
import Icon from '../Icon'
import { IModalProps } from './types'

export const Modal: React.FC<IModalProps> = ({
  open,
  placement = 'center',
  header,
  footer,
  closeOnBackdrop,
  className,
  children,
  onClose,
  ...rest
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(divRef, closeOnBackdrop, () => onClose?.())

  return (
    <RSModal
      {...rest}
      backdrop={closeOnBackdrop ? true : 'static'}
      keyboard={false}
      overflow
      open={open}
      onBackdropClick={() => (closeOnBackdrop ? onClose?.() : null)}
      onClose={onClose}
      className={classNames(className, 'custom-modal', placement)}
    >
      <div className="modal-container" ref={divRef}>
        <RSModal.Header closeButton={false}>
          {header}
          {!!onClose && (
            <div className="close-btn" onClick={() => onClose?.()}>
              <button type="button">
                <Icon name="close" />
              </button>
            </div>
          )}
        </RSModal.Header>

        <RSModal.Body>{children}</RSModal.Body>
        {!!footer && (
          <RSModal.Footer>
            <div className="btn-box">{footer}</div>
          </RSModal.Footer>
        )}
      </div>
    </RSModal>
  )
}
