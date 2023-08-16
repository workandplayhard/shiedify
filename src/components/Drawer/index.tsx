import React from 'react'
import RSDrawer from 'rsuite/Drawer'
import classNames from 'classnames'

import { IDrawerProps } from './types'

export const Drawer: React.FC<IDrawerProps> = ({
  open,
  header,
  closeOnBackdrop,
  className,
  children,
  onClose,
  ...rest
}) => {
  return (
    <RSDrawer
      {...rest}
      backdrop={closeOnBackdrop ? true : 'static'}
      keyboard={false}
      overflow
      placement="right"
      open={open}
      onBackdropClick={() => (closeOnBackdrop ? onClose?.() : null)}
      onClose={onClose}
      className={classNames(className, 'custom-drawer')}
    >
      <RSDrawer.Header closeButton={false}>{header}</RSDrawer.Header>

      <RSDrawer.Body>{children}</RSDrawer.Body>
    </RSDrawer>
  )
}
